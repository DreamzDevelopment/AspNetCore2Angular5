using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;

namespace AspNetCore2Angular5
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = BuildWebHost(args);
                /// <summary>
                /// If calling setupMigrations from StartUp class, then, when try to remove a Migrations without applying to the Context
                /// this is applied before removing. And, in a result, the remove operation fails with 'already applied' error
                /// </summary>
                host.MigrateAsync().Wait();
                /// <summary>
                /// Uncomment following section to read all the environment variables 
                /// </summary>
                // var path = Startup.Configuration.GetSection("PATH").Value;
                // // or get all
                // foreach(var env in Startup.Configuration.GetChildren())
                // {
                //     Console.WriteLine($"{env.Key}:{ env.Value}");
                // }
                host.Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                // UseEnvironment & UseHttps certFile
                /// <summary>
                /// Uncomment following line to debug in development mode
                /// </summary>
                .UseEnvironment("Development")
                
                .CaptureStartupErrors(true)  // use this to allow command line parameters in the config
                .UseKestrel(options => {
                    // options.Limits.MaxConcurrentConnections = 100;
                    // options.Limits.MaxConcurrentUpgradedConnections = 100;
                    // options.Limits.MaxRequestBodySize = 10 * 1024;
                    // options.Limits.MinRequestBodyDataRate =
                    //     new MinDataRate(bytesPerSecond: 100, gracePeriod: TimeSpan.FromSeconds(10));
                    // options.Limits.MinResponseDataRate =
                    //     new MinDataRate(bytesPerSecond: 100, gracePeriod: TimeSpan.FromSeconds(10));
                    // options.Listen(IPAddress.Loopback, 5000);
                    // options.Listen(IPAddress.Loopback, 5001, listenOptions =>
                    // {
                    //     listenOptions.UseHttps("testCert.pfx", "testPassword");
                    // });
                })
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseUrls("http://0.0.0.0:5000;http://localhost:5000;")
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();
    }
}
