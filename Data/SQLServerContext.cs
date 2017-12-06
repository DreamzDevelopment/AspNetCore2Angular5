using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using AspNetCore2Angular5.Entities;

namespace AspNetCore2Angular5.Data
{
    public class SQLServerContext : IdentityDbContext<AspNetCore2Angular5User>
    {
        public SQLServerContext(DbContextOptions<SQLServerContext> options): base(options) {
            // base.Database.EnsureCreatedAsync();
        }
        public DbSet<ApPerson> ApPersons { get; set; }
        public DbSet<ImageProfile> ProfileImages { get; set; }
        public DbSet<StoreType> StoreTypes { get; set; }
        public DbSet<ParentCategory> ParentCategories { get; set; }
        public DbSet<Category> Categories { get; set; }

        /**
         * Site Navigation Menu creation entities
         */
        
        protected override void OnModelCreating(ModelBuilder builder) 
        {
            // Can't use, if this context to use with SQLite database, SQLite doesn't support Schema
            // Also, any API configured tables below, must remove schema value of ToTable() method.
            // builder.HasDefaultSchema("dbo");

            base.OnModelCreating(builder);

            /**
             * Configure Relation(s)
             */
            base.OnModelCreating(builder);         
                builder.Entity<AspNetCore2Angular5User>()
                    .HasMany(e => e.Claims)
                    .WithOne()
                    .HasForeignKey(e => e.UserId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.Cascade);

                builder.Entity<AspNetCore2Angular5User>()
                    .HasMany(e => e.Logins)
                    .WithOne()
                    .HasForeignKey(e => e.UserId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.Cascade);

                builder.Entity<AspNetCore2Angular5User>()
                    .HasMany(e => e.Roles)
                    .WithOne()
                    .HasForeignKey(e => e.UserId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.Cascade);
                
                builder.Entity<AspNetCore2Angular5Role>()
                    .HasMany(e => e.Claims)
                    .WithOne()
                    .HasForeignKey(e => e.RoleId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.Cascade);

                builder.Entity<AspNetCore2Angular5Role>()
                    .HasMany(e => e.Users)
                    .WithOne()
                    .HasForeignKey(e => e.RoleId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.Cascade);


                /// <summary>
                /// AspNetCore2Angular5Claim type extended from System.Security.Claim 
                /// A key cannot be configured on 'AspNetCore2Angular5Claim' because it is a derived type. 
                /// The key must be configured on the root type 'Claim'. 
                /// If you did not intend for 'Claim' to be included in the model, ensure that it is not included in a DbSet property on your context, 
                /// referenced in a configuration call to ModelBuilder, or referenced from a navigation property on a type that is included in the model.
                /// </summary>
                // builder.Entity<AspNetCore2Angular5Claim>().ToTable("AspNetCore2Angular5Claims", "dbo").HasKey(mc => new { mc.Type, mc.Value });
                
                // For example, you can rename the ASP.NET Identity table names and more.
                builder.Entity<IdentityRole>().ToTable("AspNetCore2Angular5Roles");
                builder.Entity<AspNetCore2Angular5Role>().ToTable("AspNetCore2Angular5Roles");
            
                //builder.Entity<IdentityUser>().ToTable("AspNetCore2Angular5User","dbo");
                builder.Entity<AspNetCore2Angular5User>().ToTable("AspNetCore2Angular5Users");
                
                /// If following context table(s) created, then the IdentityRelation brokens
            
                // builder.Entity<IdentityUserRole<string>>().ToTable("SfUserRoles","dbo");
                builder.Entity<IdentityUserRole<string>>().HasKey(p => new { p.UserId, p.RoleId });
                builder.Entity<IdentityUserRole<string>>().ToTable("AspNetCore2Angular5UserRoles");

                /// If following context table(s) created, then the IdentityRelation brokens
                // builder.Entity<AspNetCore2Angular5UserRole>().ToTable("AspNetCore2Angular5UserRoles","dbo");
                // builder.Entity<IdentityUserLogin<string>>().ToTable("SfUserLogins","dbo");
                builder.Entity<IdentityUserLogin<string>>().ToTable("AspNetCore2Angular5UserLogins");
                /// If following context table(s) created, then the IdentityRelation brokens
                // builder.Entity<AspNetCore2Angular5UserLogin>().ToTable("AspNetCore2Angular5UserLogins","dbo");
                // builder.Entity<IdentityUserToken<string>>().ToTable("SfUserTokens","dbo");
                builder.Entity<IdentityUserToken<string>>().ToTable("AspNetCore2Angular5UserTokens");
                // builder.Entity<AspNetCore2Angular5UserToken>().ToTable("AspNetCore2Angular5UserTokens","dbo");

                // builder.Entity<IdentityUserClaim<string>>().ToTable("SfUserClaims","dbo");
                builder.Entity<IdentityUserClaim<string>>().ToTable("AspNetCore2Angular5UserClaims");
                /// If following context table(s) created, then the IdentityRelation brokens
                // builder.Entity<AspNetCore2Angular5UserClaim>().ToTable("AspNetCore2Angular5UserClaims","dbo");
                // builder.Entity<IdentityRoleClaim<string>>().ToTable("SfRoleClaims","dbo");           
                builder.Entity<IdentityRoleClaim<string>>().ToTable("AspNetCore2Angular5RoleClaims");           
                /// If following context table(s) created, then the IdentityRelation brokens
                // builder.Entity<AspNetCore2Angular5RoleClaim>().ToTable("AspNetCore2Angular5RoleClaims","dbo");  
                
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