using Autofac;
using System;
using AspNetCore2Angular5.Helpers;
using AspNetCore2Angular5.SignalR;
using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions;
using Swashbuckle.AspNetCore.Swagger;

namespace AspNetCore2Angular5
{
    public class Startup
    {
        public static IHostingEnvironment _hostingEnv;

        private bool _createNewRecordWhenLocalisedStringDoesNotExist = false;
        private bool useTypeFullNames = true;
        private bool useOnlyPropertyNames = false;
        private bool returnOnlyKeyIfNotFound = true;
        
        public Startup(IConfiguration configuration, IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            Configuration = configuration;
            if (env.IsDevelopment())
            {
                // This will push telemetry data through Application Insights pipeline faster, allowing you to view results immediately.
                // builder.AddApplicationInsightsSettings(developerMode: true);
                builder.AddUserSecrets<Startup>();
                useTypeFullNames = false;
                returnOnlyKeyIfNotFound = false;
                
                _createNewRecordWhenLocalisedStringDoesNotExist = true;
            } else {
                // builder.build() is required to complete adding of AppSettings.json to the Configuration
                Configuration = builder.Build();
                _createNewRecordWhenLocalisedStringDoesNotExist = string.IsNullOrWhiteSpace(Configuration["Localization:CreateNewRecordWhenLocalisedStringDoesNotExist"]) ? 
                                                                    false : bool.Parse((Configuration["Localization:CreateNewRecordWhenLocalisedStringDoesNotExist"]));
            }

            Configuration = builder.Build();
            _hostingEnv = env; // Inject hosting environment 

            /// Setup Serilog, logging of site in file
            SerilogHelper.SetupSerilog();
        }

        public static IConfiguration Configuration { get; set; }
        // IContainer instance in the Startup class 
        public IContainer ApplicationContainer { get; private set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddCustomHeaders();


            if (_hostingEnv.IsDevelopment())
            {
                services.AddSslCertificate(_hostingEnv);
            }
            services.AddOptions();
            
            // services.AddResponseCompression(options =>
            // {
            //     options.Providers.Add<GzipCompressionProvider>();
            //     options.Providers.Add<CustomCompressionProvider>();
            //     options.MimeTypes = MimeTypeHelper.DefaultMimeTypes;
            // });

            services.AddCustomDbContext();

            services.AddCustomIdentity();

            services.AddCustomOpenIddict();
            
            services.AddMemoryCache();
            /// <summary>
            /// Add default services for ASP.Net Core
            /// </summary>
            services.AddCustomServices();
            /// <summary>
            /// Add SignalR Chat Service
            /// </summary>
            services.AddSignalR();
            /// <summary>
            /// SQL Server Database used for common localization of ASP.Net Core app and integrated angular app
            /// </summary>
            services.AddSqlLocalization(options => 
                options.UseSettings(useTypeFullNames, useOnlyPropertyNames, returnOnlyKeyIfNotFound, _createNewRecordWhenLocalisedStringDoesNotExist)
            );
            services.AddCustomLocalization();
            // Add IOptions of secrets and settings into service
            services.AddConfiguredOption();

            // If you want to tweak Identity cookies, they're no longer part of IdentityOptions.
            services.ConfigureApplicationCookie(options => options.LoginPath = "/Account/LogIn");
            
            
            services.Configure<RouteOptions>( (option) => {
                option.LowercaseUrls = true;
                // option.ConstraintMap.Add("returnUrl", typeof( string) );
            });

            // cookie-based TempData provider
            services.AddSingleton<ITempDataProvider, CookieTempDataProvider>();
            
            // Add session related services.
            services.AddSession(options => {
                options.IdleTimeout = new TimeSpan(7,0,0);
            });
            /// <summary>
            /// Add MVC service to the Pipe, with customization
            /// </summary>
            services.AddCustomizedMvc();

            // Node services are to execute any arbitrary nodejs code from .net
            services.AddNodeServices();
            /// <summary>
            /// Add Swagger to the pipe
            /// </summary>
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "AspNetCore2Angular5", Version = "v1" });
            });
            
#region Configure Autofac (Without ConfigureContainer)

            // Create the container builder.
            var builder = new ContainerBuilder();

            // Register dependencies, populate the services from the collection, and build the container. If you want
            // to dispose of the container at the end of the app, be sure to keep a reference to it as a property or field.
            //
            // Note that Populate is basically a foreach to add things into Autofac that are in the collection. If you register
            // things in Autofac BEFORE Populate then the stuff in the ServiceCollection can override those things; if you register
            // AFTER Populate those registrations can override things in the ServiceCollection. Mix and match as needed.
            builder.Populate(services);

            builder.ConfigureContainer();

            this.ApplicationContainer = builder.Build();
            // Create the IServiceProvider based on the container.
            return new AutofacServiceProvider(this.ApplicationContainer);
#endregion
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IApplicationLifetime appLifetime)
        {
            app.UseCustomizedCsp();
            app.UseCustomizedHeadersMiddleware();

            app.AddCustomLocalization();

            app.AddDevMiddlewares();

            if (_hostingEnv.IsProduction())
            {
                // app.UseResponseCompression();
                app.UseExceptionHandler("/Home/Error");
            }
            
            // Set Angular Route
            app.UseCustomizedAngularRoute();

            app.UseAuthentication();

            app.UseStaticFiles();

            // Configure session for asp.net core app
            app.UseSession();
            
            app.UseSignalR(routes =>
            {
                routes.MapHub<Chat>("chathub");
            });

            app.UseMvc(ConfigureRoute
            //     routes =>
            // {
            //     routes.MapRoute(
            //         name: "default",
            //         template: "{controller=Home}/{action=Index}/{id?}");
            // }
            );

            // If you want to dispose of resources that have been resolved in the
            // application container, register for the "ApplicationStopped" event.
            // You can only do this if you have a direct reference to the container,
            // so it won't work with the above ConfigureContainer mechanism.
            appLifetime.ApplicationStopped.Register(() => this.ApplicationContainer.Dispose());
        }
#region ConfigureRoute
        private void ConfigureRoute(IRouteBuilder routes) 
        { 
            // Home/About 
            routes.MapRoute(
               name: "about-route",
               template: "about",
               defaults: new { controller = "home", action = "about" }
            );
            // Home/Index 
            routes.MapRoute(
                name: "default",
                template: "{controller=home}/{action=index}/{id?}"
            );
            routes.MapSpaFallbackRoute(
                name: "spa-fallback",
                defaults: new { controller = "Home", action = "Index" });
        }
#endregion
    }
}
