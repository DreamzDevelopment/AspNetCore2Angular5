using System;
using AspNet.Security.OpenIdConnect.Primitives;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using AspNetCore2Angular5;
using AspNetCore2Angular5.Data;
using AspNetCore2Angular5.Entities;
using AspNetCore2Angular5.OptionModels;

namespace Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions
{
    public enum AppTypes
    {
        Facebook = 1,
        Google = 2,
        Microsoft = 3,
        Twitter = 4,
        LinkedIn = 5,
        OpenId = 6
    }
    public interface IAuthenticationServiceOptions
    {
    }
    
    public static class AuthenticationServices
    { 
        public static IServiceCollection AddCustomIdentity(this IServiceCollection services)
        {
            // For api unauthorized calls return 401 with no body
            services.AddIdentity<AspNetCore2Angular5User, AspNetCore2Angular5Role>(options =>
            {
                options.Password.RequiredLength = 4;
                options.Password.RequireNonAlphanumeric = false;
            })
            .AddEntityFrameworkStores<SQLServerContext>()
            .AddDefaultTokenProviders();

            return services;
        }

        public static IServiceCollection AddCustomOpenIddict(this IServiceCollection services)
        {
            // Configure Identity to use the same JWT claims as OpenIddict instead
            // of the legacy WS-Federation claims it uses by default (ClaimTypes),
            // which saves you from doing the mapping in your authorization controller.
            services.Configure<IdentityOptions>(options =>
            {
                options.ClaimsIdentity.UserNameClaimType = OpenIdConnectConstants.Claims.Name;
                options.ClaimsIdentity.UserIdClaimType = OpenIdConnectConstants.Claims.Subject;
                options.ClaimsIdentity.RoleClaimType = OpenIdConnectConstants.Claims.Role;
            });

            // Register the OpenIddict services.
            services.AddOpenIddict(options =>
            {
                // Register the Entity Framework stores.
                options.AddEntityFrameworkCoreStores<SQLServerContext>();

                // Register the ASP.NET Core MVC binder used by OpenIddict.
                // Note: if you don't call this method, you won't be able to
                // bind OpenIdConnectRequest or OpenIdConnectResponse parameters.
                options.AddMvcBinders();

                // Enable the token endpoint.
                // Form password flow (used in username/password login requests)
                options.EnableTokenEndpoint("/connect/token");

                // Enable the authorization endpoint.
                // Form implicit flow (used in social login redirects)
                options.EnableAuthorizationEndpoint("/connect/authorize");

                // Enable the password and the refresh token flows.
                options.AllowPasswordFlow()
                       .AllowRefreshTokenFlow()
                       .AllowImplicitFlow(); // To enable external logins to authenticate

                options.SetAccessTokenLifetime(TimeSpan.FromSeconds(Convert.ToInt32(SiteConfiguration.GetAccessTokenLifetime()) ));
                options.SetIdentityTokenLifetime(TimeSpan.FromSeconds(Convert.ToInt32(SiteConfiguration.GetIdentityTokenLifetime()) ));
                options.SetRefreshTokenLifetime(TimeSpan.FromSeconds(Convert.ToInt32(SiteConfiguration.GetRefreshTokenLifetime()) ));
                // During development, you can disable the HTTPS requirement.
                options.DisableHttpsRequirement();

                // Note: to use JWT access tokens instead of the default
                // encrypted format, the following lines are required:
                //
                // options.UseJsonWebTokens();
                options.AddEphemeralSigningKey();
            });

            // If you prefer using JWT, don't forget to disable the automatic
            // JWT -> WS-Federation claims mapping used by the JWT middleware:
            //
            // JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();
            // JwtSecurityTokenHandler.DefaultOutboundClaimTypeMap.Clear();
            //
            // services.AddAuthentication()
            //     .AddJwtBearer(options =>
            //     {
            //         options.Authority = "http://localhost:54895/";
            //         options.Audience = "resource_server";
            //         options.RequireHttpsMetadata = false;
            //         options.TokenValidationParameters = new TokenValidationParameters
            //         {
            //             NameClaimType = OpenIdConnectConstants.Claims.Subject,
            //             RoleClaimType = OpenIdConnectConstants.Claims.Role
            //         };
            //     });

            // Alternatively, you can also use the introspection middleware.
            // Using it is recommended if your resource server is in a
            // different application/separated from the authorization server.
            //
            // services.AddAuthentication()
            //     .AddOAuthIntrospection(options =>
            //     {
            //         options.Authority = new Uri("http://localhost:54895/");
            //         options.Audiences.Add("resource_server");
            //         options.ClientId = "resource_server";
            //         options.ClientSecret = "875sqd4s5d748z78z7ds1ff8zz8814ff88ed8ea4z4zzd";
            //         options.RequireHttpsMetadata = false;
            //     });

            services.AddAuthentication(options =>
            {
                // This will override default cookies authentication scheme
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultForbidScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
               .AddOAuthValidation()

               // https://developers.facebook.com/apps
               .AddFacebook(options => { 
                    options.AppId = Startup.Configuration[nameof(FacebookAuthenticationOptions.AuthenticationFacebookAppId)] ?? "unified-template-com";
                    options.AppSecret = Startup.Configuration[nameof(FacebookAuthenticationOptions.AuthenticationFacebookAppSecret)] ?? "unified-template-com";
                })
               // https://console.developers.google.com/projectselector/apis/library?pli=1
                .AddGoogle(options => { 
                    options.ClientId = Startup.Configuration[nameof(GoogleAuthenticationOptions.AuthenticationGoogleClientId)] ?? "unified-template-com";
                    options.ClientSecret = Startup.Configuration[nameof(GoogleAuthenticationOptions.AuthenticationGoogleClientSecret)] ?? "unified-template-com";
                })
               // https://apps.dev.microsoft.com/?mkt=en-us#/appList
                .AddMicrosoftAccount(options => { 
                    options.ClientId = Startup.Configuration[nameof(MicrosoftAuthenticationOptions.AuthenticationMicrosoftClientId)] ?? "unified-template-com";
                    options.ClientSecret = Startup.Configuration[nameof(MicrosoftAuthenticationOptions.AuthenticationMicrosoftClientSecret)] ?? "unified-template-com";
                })
               // https://apps.twitter.com/
                .AddTwitter(options => { 
                    options.ConsumerKey = Startup.Configuration[nameof(TwitterAuthenticationOptions.AuthenticationTwitterConsumerKey)] ?? "unified-template-com";
                    options.ConsumerSecret = Startup.Configuration[nameof(TwitterAuthenticationOptions.AuthenticationTwitterConsumerSecret)] ?? "unified-template-com";
                })
                // .AddOAuth("LinkedIn", options => {
                //     // options.SignInScheme = "external_cookie";
                //     options.ClientId = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientId)] ?? "unified-template-com";
                //     options.ClientSecret = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientSecret)] ?? "unified-template-com";
                //     options.CallbackPath = "/signin-linkedin";

                //     options.AuthorizationEndpoint = "https://www.linkedin.com/oauth/v2/authorization";
                //     options.TokenEndpoint = "https://www.linkedin.com/oauth/v2/accessToken";
                //     options.UserInformationEndpoint = "https://api.linkedin.com/v1/people/~:(id,first-name,last-name,email-address,picture-url,picture-urls::(original))";

                //     options.Scope.Add("r_basicprofile");
                //     options.Scope.Add("r_emailaddress");

                //     // options.Events = new OAuthEvents
                //     // {
                //     //     OnCreatingTicket = OnCreatingTicketLinkedInCallBack,
                //     //     OnTicketReceived = OnTicketReceivedCallback
                //     // };
                // })
               // Note: Below social providers are supported through this open source library:
               // https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers

               // https://www.linkedin.com/secure/developer?newapp=
               .AddLinkedIn(options =>
               {
                   options.ClientId = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientId)] ?? "unified-template-com";
                   options.ClientSecret = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientSecret)] ?? "unified-template-com";

               })
               // https://github.com/settings/developers
               .AddGitHub(options =>
               {
                   options.ClientId = Startup.Configuration[nameof(GitHubAuthenticationOptions.AuthenticationGitHubClientId)] ?? "unified-template-com";
                   options.ClientSecret = Startup.Configuration[nameof(GitHubAuthenticationOptions.AuthenticationGitHubClientSecret)] ?? "unified-template-com";

               })
               // https://developer.paypal.com/developer/applications
               .AddPaypal(options =>
               {
                   options.ClientId = Startup.Configuration[nameof(PaypalAuthenticationOptions.AuthenticationPaypalClientId)] ?? "unified-template-com";
                   options.ClientSecret = Startup.Configuration[nameof(PaypalAuthenticationOptions.AuthenticationPaypalClientSecret)] ?? "unified-template-com";
               })
               // https://developer.yahoo.com/app
               .AddYahoo(options =>
               {
                   options.ClientId = Startup.Configuration[nameof(YahooAuthenticationOptions.AuthenticationYahooClientId)] ?? "unified-template-com";
                   options.ClientSecret = Startup.Configuration[nameof(YahooAuthenticationOptions.AuthenticationYahooClientSecret)] ?? "unified-template-com";
               })
               .AddOAuth("LinkedIn1", options => {
                    // options.SignInScheme = "external_cookie";
                    options.ClientId = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientId)] ?? "unified-template-com";
                    options.ClientSecret = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientSecret)] ?? "unified-template-com";
                    options.CallbackPath = "/signin-linkedin";
                    options.AuthorizationEndpoint = "https://www.linkedin.com/oauth/v2/authorization";
                    options.TokenEndpoint = "https://www.linkedin.com/oauth/v2/accessToken";
               })
               .AddOAuth("LinkedIn2", options => {
                    // options.SignInScheme = "external_cookie";
                    options.ClientId = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientId)] ?? "unified-template-com";
                    options.ClientSecret = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientSecret)] ?? "unified-template-com";
                    options.CallbackPath = "/signin-linkedin";
                    options.AuthorizationEndpoint = "https://www.linkedin.com/oauth/v2/authorization";
                    options.TokenEndpoint = "https://www.linkedin.com/oauth/v2/accessToken";
               })
               .AddOAuth("LinkedIn3", options => {
                    // options.SignInScheme = "external_cookie";
                    options.ClientId = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientId)] ?? "unified-template-com";
                    options.ClientSecret = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientSecret)] ?? "unified-template-com";
                    options.CallbackPath = "/signin-linkedin";
                    options.AuthorizationEndpoint = "https://www.linkedin.com/oauth/v2/authorization";
                    options.TokenEndpoint = "https://www.linkedin.com/oauth/v2/accessToken";
               })
               .AddOAuth("LinkedIn4", options => {
                    // options.SignInScheme = "external_cookie";
                    options.ClientId = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientId)] ?? "unified-template-com";
                    options.ClientSecret = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientSecret)] ?? "unified-template-com";
                    options.CallbackPath = "/signin-linkedin";
                    options.AuthorizationEndpoint = "https://www.linkedin.com/oauth/v2/authorization";
                    options.TokenEndpoint = "https://www.linkedin.com/oauth/v2/accessToken";
               })
               .AddOAuth("LinkedIn5", options => {
                    // options.SignInScheme = "external_cookie";
                    options.ClientId = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientId)] ?? "unified-template-com";
                    options.ClientSecret = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientSecret)] ?? "unified-template-com";
                    options.CallbackPath = "/signin-linkedin";
                    options.AuthorizationEndpoint = "https://www.linkedin.com/oauth/v2/authorization";
                    options.TokenEndpoint = "https://www.linkedin.com/oauth/v2/accessToken";
               })
               .AddOAuth("LinkedIn6", options => {
                    // options.SignInScheme = "external_cookie";
                    options.ClientId = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientId)] ?? "unified-template-com";
                    options.ClientSecret = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientSecret)] ?? "unified-template-com";
                    options.CallbackPath = "/signin-linkedin";
                    options.AuthorizationEndpoint = "https://www.linkedin.com/oauth/v2/authorization";
                    options.TokenEndpoint = "https://www.linkedin.com/oauth/v2/accessToken";
               })
               .AddOAuth("LinkedIn7", options => {
                    // options.SignInScheme = "external_cookie";
                    options.ClientId = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientId)] ?? "unified-template-com";
                    options.ClientSecret = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientSecret)] ?? "unified-template-com";
                    options.CallbackPath = "/signin-linkedin";
                    options.AuthorizationEndpoint = "https://www.linkedin.com/oauth/v2/authorization";
                    options.TokenEndpoint = "https://www.linkedin.com/oauth/v2/accessToken";
               })
               .AddOAuth("LinkedIn8", options => {
                    // options.SignInScheme = "external_cookie";
                    options.ClientId = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientId)] ?? "unified-template-com";
                    options.ClientSecret = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientSecret)] ?? "unified-template-com";
                    options.CallbackPath = "/signin-linkedin";
                    options.AuthorizationEndpoint = "https://www.linkedin.com/oauth/v2/authorization";
                    options.TokenEndpoint = "https://www.linkedin.com/oauth/v2/accessToken";
               })
               .AddOAuth("LinkedIn9", options => {
                    // options.SignInScheme = "external_cookie";
                    options.ClientId = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientId)] ?? "unified-template-com";
                    options.ClientSecret = Startup.Configuration[nameof(LinkedInAuthenticationOptions.AuthenticationLinkedInClientSecret)] ?? "unified-template-com";
                    options.CallbackPath = "/signin-linkedin";
                    options.AuthorizationEndpoint = "https://www.linkedin.com/oauth/v2/authorization";
                    options.TokenEndpoint = "https://www.linkedin.com/oauth/v2/accessToken";
               })
               ;

            return services;
        }
    }
}