using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AspNetCore2Angular5.Entities;
using AspNetCore2Angular5.Entities.SQLite;

namespace AspNetCore2Angular5.Data
{
    public class SQLiteContext : DbContext
    {
        public SQLiteContext(DbContextOptions<SQLiteContext> options): base(options) {
            // base.Database.EnsureCreatedAsync();
        }
        /**
         * Site Navigation Menu creation entities
         */
        public DbSet<MenuHtml> MenuHtmls { get; set; }
        public DbSet<MenuItem> MenuItems { get; set; }
        public DbSet<MenuTemplate> MenuTemplates { get; set; }

        public DbSet<ItemImage> ItemImages { get; set; }
        public DbSet<ProductImage> ProductImages { get; set; }
        public DbSet<ProfileImage> ProfileImages { get; set; }
        
        protected override void OnModelCreating(ModelBuilder builder) {
            base.OnModelCreating(builder);

            /**
             * Configure Relation(s)
             */
            
        }

        // in your context class
        // public DbSet<T> GetDbSet<T>() where T : class
        // {
        //     return this.Set<T>();
        // }
        /// <summary>
        /// Apply dynamic query on a DbSet of context with the name of the Entity or Table during RunTime
        /// </summary>
        /// <param name="fullname">Full Qualified Name $"[Namespace such as MyApp.Entities.Identity.[Class or EntityName such as ApplicationUser],ApplicationName" </param>
        public dynamic DbSet_ByName(string fullname)
        {
            Type targetType = Type.GetType(fullname);
            var model = GetType()
                .GetRuntimeProperties()
                .Where(o => 
                    o.PropertyType.IsGenericType &&
                    o.PropertyType.GetGenericTypeDefinition() == typeof(DbSet<>) &&
                    o.PropertyType.GenericTypeArguments.Contains(targetType))
                .FirstOrDefault();
            if (null != model)
                return model.GetValue(this);
            return null;
        }
        /// <summary>
        /// Apply dynamic query on a DbSet of context with the name of the Entity or Table during RunTime
        /// </summary>
        /// <param name="fullname">Full Qualified Name $"[Namespace such as MyApp.Entities.Identity.[Class or EntityName such as ApplicationUser],ApplicationName" </param>
        public async Task<dynamic> DbSet_ByNameAsync(string fullname)
        {
            Type targetType = Type.GetType(fullname);
            var model = await GetType()
                .GetRuntimeProperties()
                .Where(o => 
                    o.PropertyType.IsGenericType &&
                    o.PropertyType.GetGenericTypeDefinition() == typeof(DbSet<>) &&
                    o.PropertyType.GenericTypeArguments.Contains(targetType)).ToAsyncEnumerable()
            
                .FirstOrDefault();
            if (null != model)
                return model.GetValue(this);
            return null;
        }

    }
}