
using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace Microsoft.Extensions.DependencyInjection.Extensions
{
    public static class ClientAppBuilderExtensions
    {
        public static IApplicationBuilder UseCustomizedAngularRoute(this IApplicationBuilder app)
        {
#region in Use
            var angularRoutes = new[] {
                "/admin",
                "/store",
            };
            app.Use(async (context, next) => // Angular Redirecting on refresh page
            {
                var path = context.Request.Path;
                var route = angularRoutes.FirstOrDefault((ar) => path.Value.StartsWith(ar, StringComparison.OrdinalIgnoreCase));
                if (path.HasValue && null != route)
                {
                    
                    var paths = 
                        //path.Value.ToString().EndsWith('/') ? 
                        path.Value.ToString().Split('/')
                        // : (path.Value.ToString() + "/").Split("/")
                        ; 
                    context.Request.Path = new PathString(
                        (paths.Length > 1) ? "/" + paths[1] : null);
                        // ((paths.Length > 1) ? "/" + paths[1] : null) + ( (paths.Length > 2) ? "/" + paths[2] : null) );
                }
                await next();
            });
#endregion
            return app;
        }
    }
}