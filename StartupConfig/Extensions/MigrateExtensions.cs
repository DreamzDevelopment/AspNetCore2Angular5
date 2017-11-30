using System.Threading.Tasks;
using AspNetCore2Angular5.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Builder;
using AspNetCore2Angular5;

namespace Microsoft.Extensions.DependencyInjection.Extensions
{
    public static class MigrateExtensions
    {
        private static bool IfRemoveAndCreate => string.IsNullOrWhiteSpace(Startup.Configuration["MigrateAndSample:IfRemoveAndCreate"]) ? false : 
                                                    bool.Parse(Startup.Configuration["MigrateAndSample:IfRemoveAndCreate"]);
        private static bool IfCallSampleData => string.IsNullOrWhiteSpace(Startup.Configuration["MigrateAndSample:IfCallSampleData"]) ? false : 
                                                    bool.Parse(Startup.Configuration["MigrateAndSample:IfCallSampleData"]);
        private static bool IfIgnoreEnvironment => string.IsNullOrWhiteSpace(Startup.Configuration["MigrateAndSample:IfIgnoreEnvironment"]) ? false : 
                                                    bool.Parse(Startup.Configuration["MigrateAndSample:IfIgnoreEnvironment"]);
        public static void Migrate(this IWebHost webhost)
        {
            webhost.ConfigureMigration();
        }
        public static async Task MigrateAsync(this IWebHost webhost)
        {
            await webhost.ConfigureMigrationAsync();
        }
        public static void ConfigureMigration(this IWebHost webhost)
        {
            using (var scope = webhost.Services.GetService<IServiceScopeFactory>().CreateScope())
            {
                var _hostingEnvironment = scope.ServiceProvider.GetRequiredService<IHostingEnvironment>();
                using(var _context = scope.ServiceProvider.GetRequiredService<SQLServerContext>()) 
                {
                    if(IfRemoveAndCreate && ( _hostingEnvironment.IsDevelopment() || IfIgnoreEnvironment ))
                    {
                        _context.Database.EnsureDeleted(); // Not use in Production
                    }
                    Console.WriteLine($"=======================================Applying Migrations {_hostingEnvironment.EnvironmentName}===========================================");
                    try
                    {
                        _context.Database.Migrate();
                    }
                    catch (DbUpdateException)
                    {
                        throw;
                    }
                    // it is for one time applying, then removed
                    if(IfCallSampleData && ( _hostingEnvironment.IsDevelopment() || IfIgnoreEnvironment ))
                    {
                        Console.WriteLine($"calling sample data");
                        scope.ServiceProvider.InitializeDatabaseAsync( _hostingEnvironment, _context, true).Wait(); 
                    // await Data.SampleData.UpdateBKashPaymentAsync(_context); // it is for one time applying, then removed, this doesn't need for Initial Create
                    }
                }
                using (var _sqliteContext = scope.ServiceProvider.GetRequiredService<SQLiteContext>())
                {
                    if(IfRemoveAndCreate && ( _hostingEnvironment.IsDevelopment() || IfIgnoreEnvironment ))
                    {
                        _sqliteContext.Database.EnsureDeleted(); // Not to use in Production
                    }
                    Console.WriteLine($"=======================================Applying Migrations SQLite {_hostingEnvironment.EnvironmentName}===========================================");
                    try
                    {
                        _sqliteContext.Database.Migrate();
                    }
                    catch (System.Exception)
                    {
                        throw;
                    }
                    // it is for one time applying, then removed
                    if(IfCallSampleData && ( _hostingEnvironment.IsDevelopment() || IfIgnoreEnvironment ))
                    {
                        Console.WriteLine($"calling sample data SQLite");
                        scope.ServiceProvider.InitializeSQLiteDatabaseAsync(_hostingEnvironment, _sqliteContext, false).Wait();
                    }
                }
            }
        }
        public static async Task ConfigureMigrationAsync(this IWebHost webhost)
        {
            using (var scope = webhost.Services.GetService<IServiceScopeFactory>().CreateScope())
            {
                var _hostingEnvironment = scope.ServiceProvider.GetRequiredService<IHostingEnvironment>();
                using(var _context = scope.ServiceProvider.GetRequiredService<SQLServerContext>()) 
                {

                    if(IfRemoveAndCreate && ( _hostingEnvironment.IsDevelopment() || IfIgnoreEnvironment ))
                    {
                        await _context.Database.EnsureDeletedAsync(); // Not to use in Production
                    }
                    Console.WriteLine($"=======================================Applying Migrations {_hostingEnvironment.EnvironmentName}===========================================");
                    try
                    {
                        await _context.Database.MigrateAsync();
                    }
                    catch (DbUpdateException)
                    {
                        throw;
                    }
                    // it is for one time applying, then removed
                    if(IfCallSampleData && ( _hostingEnvironment.IsDevelopment() || IfIgnoreEnvironment ))
                    {
                        Console.WriteLine($"calling sample data");
                        scope.ServiceProvider.InitializeDatabaseAsync( _hostingEnvironment, _context, true).Wait(); 
                    // await Data.SampleData.UpdateBKashPaymentAsync(_context); // it is for one time applying, then removed, this doesn't need for Initial Create
                    }
                }
                using (var _sqliteContext = scope.ServiceProvider.GetRequiredService<SQLiteContext>())
                {
                    if(IfRemoveAndCreate && ( _hostingEnvironment.IsDevelopment() || IfIgnoreEnvironment ))
                    {
                        await _sqliteContext.Database.EnsureDeletedAsync(); // Not to use in Production
                    }
                    Console.WriteLine($"=======================================Applying Migrations SQLite {_hostingEnvironment.EnvironmentName}===========================================");
                    try
                    {
                        await _sqliteContext.Database.MigrateAsync();
                    }
                    catch (DbUpdateException)
                    {
                        throw;
                    }
                    // it is for one time applying, then removed
                    if(IfCallSampleData && ( _hostingEnvironment.IsDevelopment() || IfIgnoreEnvironment ))
                    {
                        Console.WriteLine($"calling sample data SQLite");
                        await scope.ServiceProvider.InitializeSQLiteDatabaseAsync(_hostingEnvironment, _sqliteContext, false);
                    }
                }
            }
        }
    }
}
    
    