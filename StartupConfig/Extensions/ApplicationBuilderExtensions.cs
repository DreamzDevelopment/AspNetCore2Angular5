﻿using System;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Serilog;
using Microsoft.AspNetCore.Authentication.MicrosoftAccount;
using Microsoft.AspNetCore.Authentication.Facebook;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.Twitter;
using Microsoft.AspNetCore.Localization;
using System.Globalization;
using System.Collections.Generic;
using Microsoft.Extensions.Options;
using NetEscapades.AspNetCore.SecurityHeaders;
using Joonasw.AspNetCore.SecurityHeaders;
using Microsoft.AspNetCore.Hosting.Server.Features;
using System.Linq;
using AspNetCore2Angular5.Data;
using Microsoft.Extensions.DependencyInjection.Extensions;
using AspNetCore2Angular5;

namespace Microsoft.Extensions.DependencyInjection.Extensions
{
    public static class ApplicationBuilderExtensions
    {
        public static IApplicationBuilder UseCustomizedHeadersMiddleware(this IApplicationBuilder app)
        {
            var policyCollection = new HeaderPolicyCollection()
                   .AddFrameOptionsDeny()
                   .AddXssProtectionBlock()
                   .AddContentTypeOptionsNoSniff()
                   .AddStrictTransportSecurityMaxAge(maxAge: 60 * 60 * 24 * 365) // maxage = one year in seconds
                   .AddReferrerPolicyOriginWhenCrossOrigin()
                   .RemoveServerHeader();
            //    .AddCustomHeader("X-My-Test-Header", "Header value");

            app.UseCustomHeadersMiddleware(policyCollection);
            return app;
        }
        public static IApplicationBuilder UseCustomizedCsp(this IApplicationBuilder app)
        {
            var URLS = app.ServerFeatures.Get<IServerAddressesFeature>().Addresses;
            var socketUrl = "ws" + URLS.ToList().First().Replace("http", "", StringComparison.OrdinalIgnoreCase).Replace("https", "", StringComparison.OrdinalIgnoreCase);

            // TODO: Implement HSTS once SSL is implemented
            // Enable Strict Transport Security with a 30-day caching period
            // Do not include subdomains
            // Do not allow preload
            // app.UseHsts(new HstsOptions(TimeSpan.FromDays(30), includeSubDomains: false, preload: false));

            // // Use certificate pinning with:
            // // - 30-day caching period
            // // - One pin in SHA-256 form
            // // - Report-Only = Invalid certificate should not be reported, but:
            // // - Report problems to /hpkp-report
            // app.UseHpkp(hpkp =>
            // {
            //     hpkp.UseMaxAgeSeconds(30 * 24 * 60 * 60)
            //         .AddSha256Pin("nrmpk4ZI3wbRBmUZIT5aKAgP0LlKHRgfA2Snjzeg9iY=")
            //         .SetReportOnly()
            //         .ReportViolationsTo("/hpkp-report");
            // });

            // Content Security Policy
            app.UseCsp(csp =>
            {
                // If nothing is mentioned for a resource class, allow from this domain
                csp.ByDefaultAllow
                                .FromSelf();

                // Allow JavaScript from:
                csp.AllowScripts
                                .FromSelf() //This domain
                                .AllowUnsafeEval()
                                .AllowUnsafeInline();

                // CSS allowed from:
                csp.AllowStyles
                                .FromSelf()
                                .AllowUnsafeInline();

                csp.AllowImages
                    .FromSelf()
                    .From("data:");

                // HTML5 audio and video elemented sources can be from:
                csp.AllowAudioAndVideo
                                .FromNowhere();

                // Contained iframes can be sourced from:
                csp.AllowChildren
                                .FromNowhere(); //Nowhere, no iframes allowed

                // Allow AJAX, WebSocket and EventSource connections to:
                csp.AllowConnections
                                .To(socketUrl)
                                .ToSelf();

                // Allow fonts to be downloaded from:
                csp.AllowFonts
                                .FromSelf()
                                .From("data:");

                // Allow object, embed, and applet sources from:
                csp.AllowPlugins
                                .FromNowhere();

                // Allow other sites to put this in an iframe?
                csp.AllowFraming
                                .FromNowhere(); // Block framing on other sites, equivalent to X-Frame-Options: DENY

                // Do not block violations, only report
                // This is a good idea while testing your CSP
                // Remove it when you know everything will work
                // csp.SetReportOnly();
                // Where should the violation reports be sent to?
                // csp.ReportViolationsTo("/csp-report");
            });

            return app;
        }

        public static IApplicationBuilder UseCustomWebpackDevMiddleware(this IApplicationBuilder app)
        {
            app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
            {
                HotModuleReplacement = true
            });
            return app;
        }
        public static IApplicationBuilder UseCustomSwaggerApi(this IApplicationBuilder app)
        {
            // Enable middleware to serve generated Swagger as a JSON endpoint
            app.UseSwagger();
            // Enable middleware to serve swagger-ui assets (HTML, JS, CSS etc.)
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "V1 Docs");
            });

            return app;
        }
        public static IApplicationBuilder AddDevMiddlewares(this IApplicationBuilder app)
        {
            var env = app.ApplicationServices.GetRequiredService<IHostingEnvironment>();
            var loggerFactory = app.ApplicationServices.GetRequiredService<ILoggerFactory>();

            if (env.IsDevelopment())
            {
                loggerFactory.AddConsole(Startup.Configuration.GetSection("Logging"));
                loggerFactory.AddDebug();
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseCustomWebpackDevMiddleware();
                // NOTE: For SPA swagger needs adding before MVC
                app.UseCustomSwaggerApi();
            }

            // TODO loggerFactory.AddSerilog();

            return app;
        }

        public static IApplicationBuilder AddCustomLocalization(this IApplicationBuilder app)
        {
            // Get localization information
            var locOptions = app.ApplicationServices.GetService<IOptions<RequestLocalizationOptions>>();
            app.UseRequestLocalization(locOptions.Value);

            return app;
        }

        // public static IApplicationBuilder SetupMigrations(this IApplicationBuilder app)
        // {
        //     // For more details on creating database during deployment see http://go.microsoft.com/fwlink/?LinkID=615859
        //     try
        //     {
        //         app.MigrateAsync().Wait();
        //     }
        //     catch (Exception) { }
        //     return app;
        // }

    }
}
