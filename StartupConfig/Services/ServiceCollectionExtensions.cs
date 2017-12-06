using AspNetCore2Angular5.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using AspNetCore2Angular5.Data;
using Microsoft.EntityFrameworkCore;
using Localization.SqlLocalizer.DbStringLocalizer;
using AspNetCore2Angular5;
using Microsoft.AspNetCore.Identity;
using AspNet.Security.OpenIdConnect.Primitives;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using AspNetCore2Angular5.Services;
using AspNetCore2Angular5.Filters;
using Microsoft.AspNetCore.Builder;
using System.Globalization;
using Microsoft.AspNetCore.Localization;
using AspNetCore2Angular5.OptionModels;

namespace Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions
{

    public static class ServiceCollectionExtensions 
    {
        static ServiceCollectionExtensions() {

        }
        
        public static MvcOptions AddCustomizeOptions(this MvcOptions options)
        {
            options.CacheProfiles.Add("Default",
                new CacheProfile()
                {
                    Duration = 180, // seconds
                });
            options.CacheProfiles.Add("GetImage",
                new CacheProfile()
                {
                    Duration = 180, // seconds
                    VaryByQueryKeys = new string[] {"imageOf", "index"}
                });
            options.CacheProfiles.Add("Never",
                new CacheProfile()
                {
                    Location = ResponseCacheLocation.None,
                    NoStore = true
                });
            return
                options;
               
        }
        public static IServiceCollection AddSslCertificate(this IServiceCollection services, IHostingEnvironment hostingEnv)
        {
            // var cert = new X509Certificate2(Path.Combine(hostingEnv.ContentRootPath, "extra", "cert.pfx"), "game123");

            //services.Configure<KestrelServerOptions>(options =>
            //{
            //    options.UseHttps(cert);
            //});

            return services;
        }
        public static IServiceCollection AddCustomDbContext(this IServiceCollection services)
        {
            // services.AddDbContext<SQLServerContext>(options => 
            //     options.UseSqlServer(Connection.GetConnection(ConnectionType.SQLServer))
            //             .UseOpenIddict()
            // );
            // Add framework services.
            services.AddDbContext<SQLServerContext>(options =>
            {
                string useSqLite = Startup.Configuration["Database:UseSQLite"];
                string useInMemory = Startup.Configuration["Database:UseInMemory"];
                if (useInMemory.ToLower() == "true")
                {
                    // InMemory is not implemented
                    // TODO: Implement InMemory, using SQLite InMemory
                    options.UseInMemoryDatabase(Connection.GetInMemoryDatabase()); // Takes database name
                }
                else if (useSqLite.ToLower() == "true")
                {
                    options
                        .UseSqlite(Connection.GetConnection(ConnectionType.ConSQLiteApp));
                }
                else
                {
                    options.UseSqlServer(Connection.GetConnection(ConnectionType.SQLServer));
                }
                options.UseOpenIddict();
            });
            // Secondary Database for not necessarily be secured or public data
            services.AddDbContext<SQLiteContext>(options =>
                options.UseSqlite(Connection.GetConnection(ConnectionType.SQLiteAspNetCore2Angular5)));
            // No Schema
            // services.AddLocalizationSqlSchema("translations");
            services.AddDbContext<LocalizationModelContext>(options =>
                options.UseSqlite(
                    Connection.GetConnection(ConnectionType.SQLiteLocalization),
                    b => b.MigrationsAssembly("AspNetCore2Angular5") // Required
                ),
                ServiceLifetime.Singleton
            );
            
            return services;
        }
        public static IServiceCollection AddCustomServices(this IServiceCollection services)
        {
            // New instance every time, only configuration class needs so its ok
            // services.AddSingleton<IStringLocalizerFactory, EFStringLocalizerFactory>();

            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();

            services.AddScoped<UserResolverService>();
            services.AddScoped<ApiExceptionFilter>();
            return services;
        }
        public static IServiceCollection AddCustomLocalization(this IServiceCollection services)
        {
            // Language Culture Filter from URI
            // services.AddScoped<LanguageActionFilter>();
            
            // Configure supported cultures and localization options
            services.Configure<RequestLocalizationOptions>(options => {
                var supportedCultures = new [] {
                    new CultureInfo("en-US"),
                    new CultureInfo("bn-BD")
                };
                // State what the default culture for your application is. This will be used if no specific culture
                // can be determined for a given request.
                options.DefaultRequestCulture = new RequestCulture(culture: "en-US", uiCulture: "en-US");
                // You must explicitly state which cultures your application supports.
                // These are the cultures the app supports for formatting numbers, dates, etc.
                options.SupportedCultures = supportedCultures;

                // These are the cultures the app supports for UI strings, i.e. we have localized resources for.
                options.SupportedUICultures = supportedCultures;

                // You can change which providers are configured to determine the culture for requests, or even add a custom
                // provider with your own logic. The providers will be asked in order to provide a culture for each request,
                // and the first to provide a non-null result that is in the configured supported cultures list will be used.
                // By default, the following built-in providers are configured:
                // - QueryStringRequestCultureProvider, sets culture via "culture" and "ui-culture" query string values, useful for testing
                // - CookieRequestCultureProvider, sets culture via "ASPNET_CULTURE" cookie
                // - AcceptLanguageHeaderRequestCultureProvider, sets culture via the "Accept-Language" request header
                // options.RequestCultureProviders.Insert(0, new CustomRequestCultureProvider(async context =>
                // {
                //  // My custom request culture logic
                //  return new ProviderCultureResult("en");
                // }));
            });

            return services;
        }

        public static IServiceCollection AddConfiguredOption(this IServiceCollection services)
        {
            services.Configure<DBContextOption>(Startup.Configuration.GetSection("ConnectionStrings"));
            services.Configure<SqlContextOptions>(Startup.Configuration.GetSection("SqlContextOptions"));

            return services;
        }
        public static IServiceCollection AddCustomizedMvc(this IServiceCollection services)
        {
            services.AddMvc(options => 
            {
                options.AddCustomizeOptions();
                options.Filters.Add(typeof(ModelValidationFilter));
            })
            .AddJsonOptions(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            })
                // http://asp.net-hacker.rocks/2017/05/08/add-custom-ioc-in-aspnetcore.html
                // .AddControllersAsServices()
                
                // Add support for finding localized views, based on file name suffix, e.g. Index.bd.cshtml
            .AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix)
            // Add support for localizing strings in data annotations (e.g. validation messages) via the
            // IStringLocalizer abstractions.
            .AddDataAnnotationsLocalization(options => {
            });

            return services;
        }
        
    }
    
 
    
}