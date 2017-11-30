using System.Threading.Tasks;
using System;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Collections.Generic;

using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

using Microsoft.Extensions.DependencyInjection;
using AspNetCore2Angular5.Entities;
using AspNetCore2Angular5.OptionModels;

namespace AspNetCore2Angular5.Data
{
    public static class SampleData
    {
        const string imgUrl = "~/Images/placeholder.png";
        const string defaultAdminRoleName = nameof(SiteOption.SiteAdminRole);
        const string defaultAdminUserName = nameof(SiteOption.SiteAdminUserName);
        const string defaultAdminPassword = nameof(SiteOption.SiteAdminSecurityInfo);
        const string defaultAdminEmail = nameof(SiteOption.SiteAdminEmail);

#region InitializeDatabaseAsync
       
        /// <summary>
        /// Initial data entry to the database.
        /// </summary>
        /// <param name="serviceProvider">IService provider </param>
        /// <param name="env">IHosting environment</param>
        /// <param name="createUsers">If true to create default admin user</param>
        public static async Task InitializeDatabaseAsync(this IServiceProvider serviceProvider, IHostingEnvironment environment, SQLServerContext context, bool CreateUser = true)
        {
            if(CreateUser){
                var u = await CreateAdminUserAsync(serviceProvider);
                if(u.Succeeded){
                    await serviceProvider.InsertTestData(environment, context);
                }
            }
        }
#endregion
#region InsertTestData
        
        /// <summary>
        /// Creates a store manager user who can manage the inventory.
        /// </summary>
        /// <param name="hostingEnv">IHosting Environment</param>
        /// <param name="sfContext">AspNetCore2Angular5Context</param>
        private static async Task InsertTestData(this IServiceProvider serviceProvider, IHostingEnvironment environment, SQLServerContext context)
        {
            var _context = context;
            using(_context)
            {
                await _context.AddOrUpdateAsync( c => c.Id, _context.AddPerson());
            }
        }


#endregion
#region AddOrUpdateAsync
        private static async Task AddOrUpdateAsync<TEntity>(this DbContext context, Func<TEntity, object> propertyToMatch, IEnumerable<TEntity> entities) where TEntity : class
        {
            // Query in a separate context so that we can attach existing entities as modified;
            List<TEntity> existingData;
            existingData = context.Set<TEntity>().ToList();
            foreach (var item in entities)
            {
                context.Entry(item).State = existingData.Any(g => propertyToMatch(g).Equals(
                    propertyToMatch(item)
                ) ) ? EntityState.Detached : EntityState.Added;
            }
            await context.SaveChangesAsync();
        }
#endregion
#region CreateAdminUserAsync
        /// <summary>
        /// Creates a Site Admin
        /// </summary>
        /// <param name="serviceProvider">IService Provider</param>
        private static async Task<IdentityResult> CreateAdminUserAsync(IServiceProvider serviceProvider)
        {
            var _configuration = Startup.Configuration;
            var adminRole = _configuration[defaultAdminRoleName];
            IdentityResult ir = new IdentityResult();
            var _userManager = serviceProvider.GetService<UserManager<AspNetCore2Angular5User>>();
           
            var _roleManager = serviceProvider.GetService<RoleManager<AspNetCore2Angular5Role>>();
            
            if(!await _roleManager.RoleExistsAsync(adminRole)){
                await _roleManager.CreateAsync(new AspNetCore2Angular5Role(){
                    Name = adminRole, Description= "Site Administrator", CreateBy = _configuration[defaultAdminUserName], EntryDate= DateTime.UtcNow
                });
            }
            
            var user = await _userManager.FindByNameAsync(_configuration[defaultAdminUserName]) ?? 
            await _userManager.FindByEmailAsync(_configuration[defaultAdminEmail]);
            if(user == null){
                user = new AspNetCore2Angular5User {
                    UserName = _configuration[defaultAdminUserName],
                    Email = _configuration[defaultAdminEmail], 
                    JoinDate = DateTime.UtcNow,
                    LastLogInDate = DateTime.UtcNow,
                    EmailLinkDate = DateTime.UtcNow
                };
                ir = await _userManager.CreateAsync(user, _configuration[defaultAdminPassword]);
                if(ir.Succeeded) {
                    ir = await _userManager.AddToRoleAsync(user, adminRole);
                }
                if(ir.Succeeded) {
                    ir = await _userManager.AddClaimAsync(user, new Claim("SiteManager", "Allowed"));
                }
            }
            return ir;
        }
#endregion
#region AddPerson
        private static IEnumerable<ApPerson> AddPerson(this SQLServerContext _context )
        {
            // Create Person ( 1 People)
            var people = new List<ApPerson>
            {
                new ApPerson
                {
                    Id = _context.Users.Single(u => u.UserName == Startup.Configuration[defaultAdminUserName]).Id,
                    LastName = "Islam",
                    FirstMidName = "Rejwanul",
                    BirthDate = DateTime.Parse("1989-11-02"),
                    // ProfileImages = new List<ProfileImage>()
                }
            };
            return people;
        }
#endregion
      
    }
}