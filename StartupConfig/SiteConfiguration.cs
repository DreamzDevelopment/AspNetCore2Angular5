using Microsoft.Extensions.Configuration;

namespace AspNetCore2Angular5
{
    public static class SiteConfiguration
    {
        static SiteConfiguration() {
            
        }
        public static string GetAccessTokenLifetime() {
            return Startup.Configuration.GetAccessTokenLifetime();
        }
        public static string GetAccessTokenLifetime(this IConfiguration Configuration) {
            return Configuration["SiteConfiguration:AccessTokenLifetime"];
        }

        public static string GetIdentityTokenLifetime() {
            return Startup.Configuration.GetIdentityTokenLifetime();
        }
        public static string GetIdentityTokenLifetime(this IConfiguration Configuration) {
            return Configuration["SiteConfiguration:IdentityTokenLifetime"];
        }

        public static string GetRefreshTokenLifetime() {
            return Startup.Configuration.GetRefreshTokenLifetime();
        }
        public static string GetRefreshTokenLifetime(this IConfiguration Configuration) {
            return Configuration["SiteConfiguration:RefreshTokenLifetime"];
        }
    }   
}