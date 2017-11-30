using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetCore2Angular5.Entities.SQLite;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using AspNetCore2Angular5.Models;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Mvc.Routing;
using AspNetCore2Angular5.OptionModels;

namespace AspNetCore2Angular5.Data
{
    public static class SampleDataSQLite
    {
        const string imgUrl = "~/Images/placeholder.png";
        const string defaultAdminRoleName = nameof(SiteOption.SiteAdminRole);
        const string defaultAdminUserName = nameof(SiteOption.SiteAdminUserName);
        const string defaultAdminPassword = nameof(SiteOption.SiteAdminSecurityInfo);
        const string defaultAdminEmail = nameof(SiteOption.SiteAdminEmail);
        
#region InitializeSQLiteDatabaseAsync()
        /// <summary>
        /// Initialize SQLite database. And Insert Test data.
        /// </summary>
        /// <param name="serviceProvider"></param>
        /// <param name="hostingEnv"></param>
        /// <param name="sqliteContext"></param>
        /// <param name="CreateUser"></param>
        public static async Task InitializeSQLiteDatabaseAsync(this IServiceProvider serviceProvider, IHostingEnvironment hostingEnv, 
            SQLiteContext sqliteContext, bool CreateUser= true)
        {
            await serviceProvider.InsertSQLiteTestData(hostingEnv, sqliteContext);
        }
#endregion
#region InsertSQLiteTestData
        private static async Task InsertSQLiteTestData(this IServiceProvider serviceProvider, IHostingEnvironment hostingEnv, SQLiteContext sqliteContext )
        {
            var _context = sqliteContext;
            var _defaultUser = Startup.Configuration[defaultAdminUserName];
            // var _sqliteOptions = new DbContextOptionsBuilder<SQLiteContext>()
            //                     .UseSqlite(Connection.GetConnection(ConnectionType.SQLiteAspNetCore2Angular5))
            //                     .Options;
            using(_context)
            {
                await _context.AddOrUpdateAsync( s => s.Title, _context.AddMenuHtmls(_defaultUser));
                await _context.AddOrUpdateAsync( s => s.Title, _context.AddMenuTemplates(_defaultUser));
                Console.WriteLine($"==================Add MenutItems=================================");
                await _context.AddOrUpdateAsync( s => s.Title, _context.AddMenuItems(_defaultUser));
                Console.WriteLine($"==================Update MenutItems=================================");
                await _context.UpdateMenuItems(_defaultUser);
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
#region AddMenuHtmls
        private static IEnumerable<MenuHtml> AddMenuHtmls(this SQLiteContext context, string userName)
        {
            var menuHtmls = new List<MenuHtml> {
                new MenuHtml() {
                    Title = "Picture Box Root", Selector = ".root-item", SelectorImg = "", SelectorBtn = ".root-btn", 
                    Html = "<ul class=\"u-item my-row picture-box root-item\" >" + 
                        "<a class=\"btn root-btn\" title=\"Description Here\" href=\"#\" >" + 
                        "<span class=\"btn-icon-left pull-left\"><i class=\"fa fa-file-archive-o\"></i>&nbsp;&nbsp;</span>" + 
                        "<span class=\"active\">Title Here</span>" + 
                        "" + 
                        "</a><br>" + 
                        "</ul>"
                },
                new MenuHtml() {
                    Title = "Picture Box Child", Selector = ".child-item", SelectorImg = ".child-img", SelectorBtn = ".child-btn", 
                    Html = "<li class=\"l-item col-md-3 col-xs-6 col-full-width child-item\" >" +
                        "<div class=\"img-box child-img\" ></div>" +
                        "<a class=\"btn btn-block child-btn\" href=\"#\" title=\"Description Here\">" + 
                        "<span class=\"btn-icon-left pull-left\"><i class=\"fa fa-file-archive-o\"></i>&nbsp;&nbsp;</span>" + 
                        "<span>Title Here</span>" +
                        "" + 
                        "</a>" + 
                        "</li>"
                }
            };
            return menuHtmls;
        }
#endregion

#region AddMenuTemplates
        /// <summary>
        /// Create Menu Template List
        /// </summary>
        /// <param name="context"></param>
        /// <param name="userName"></param>
        private static IEnumerable<MenuTemplate> AddMenuTemplates(this SQLiteContext context, string userName)
        {
            var menuTemplates = new List<MenuTemplate>
            {
                new MenuTemplate() {
                    Title = "Picture Box", Description = "Square Picture and Title of the menu item at the bottom of the picture", 
                    RootId = context.MenuHtmls.First(mh => mh.Title == "Picture Box Root" ).Id, 
                    // RootElement = context.MenuHtmls.First(mh => mh.Title == "Picture Box Root" ) , 
                    ChildId = context.MenuHtmls.First(mh => mh.Title == "Picture Box Child" ).Id, 
                    // ChildElement = 
                }
            };
            return menuTemplates;
        }
#endregion
#region AddMenuItems
        public static IEnumerable<MenuItem> AddMenuItems(this SQLiteContext context, string userName)
        {
            /**
             * Create Menu Item List
             */
            var menuItems = new List<MenuItem> 
            {
            /**
             * Root Level Menu
             */
                new MenuItem() {
                    Title = "Know More", Description = "My Description", Target = "", 
                    IconHtml = "<i class=\"fa fa-file-archive-o\"></i>", 
                    IconUrl = "", 
                    ImageUrl = "/images/photo/IMG_8598.JPG", 
                    ParentId = null, 
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },
                new MenuItem() {
                    Title = "How to do", Description = "My Description", Target = "", 
                    IconHtml = "<i class=\"fa fa-file-archive-o\"></i>", 
                    IconUrl = "", 
                    ImageUrl = "/images/photo/IMG_8598.JPG", 
                    ParentId = null, 
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },
                new MenuItem() {
                    Title = "Customer Reviews", Description = "My Description", Target = "", 
                    IconHtml = "", 
                    IconUrl = "/images/icons/verify.png", 
                    ImageUrl = "/images/photo/IMG_8598.JPG", 
                    ParentId = null, 
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },
            /**
             * 
             */
            /**
             * First Level Menu 
             */
                new MenuItem() {
                    Title = "About Us", Description = "My Description", Target = "/Home/About" , 
                    IconHtml = "<i class=\"fa fa-file-archive-o\"></i>", 
                    IconUrl = "", ImageUrl = "/images/photo/IMG_8598.JPG", 
                    ParentId = null,
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },
                new MenuItem() {
                    Title = "Contact Us", Description = "My Description", Target = "/Home/ContactUs" , 
                    IconHtml = "<i class=\"fa fa-file-archive-o\"></i>", 
                    IconUrl = "", 
                    ImageUrl = "/images/photo/IMG_8598.JPG", 
                    ParentId = null,
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },
                
                new MenuItem() {
                    Title = "Video Tutorial", Description = "My Description", Target = "", 
                    IconHtml = "<i class=\"fa fa-file-archive-o\"></i>", 
                    IconUrl = "", 
                    ImageUrl = "/images/photo/IMG_8598.JPG", 
                    ParentId = null,
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },
                new MenuItem() {
                    Title = "Documentation", Description = "My Description", Target = "", 
                    IconHtml = "<i class=\"fa fa-file-archive-o\"></i>", 
                    IconUrl = "", 
                    ImageUrl = "/images/photo/IMG_8598.JPG", 
                    ParentId = null,
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },

                new MenuItem() {
                    Title = "Review 1", Description = "My Description", Target = "/Home/About/?1&name=Rejwan" , 
                    IconHtml = "", 
                    IconUrl = "/images/icons/verify.png", 
                    ImageUrl = "", 
                    ParentId = null,
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },
                new MenuItem() {
                    Title = "Review 2", Description = "My Description", Target = "", 
                    IconHtml = "<i class=\"fa fa-file-archive-o\"></i>", 
                    IconUrl = "", 
                    ImageUrl = "/images/photo/IMG_8598.JPG", 
                    ParentId = null,
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },
            /**
             * 
             */
            /**
             * Second Level Menu
             */
                new MenuItem() {
                    Title = "Review 1 Review 1", Description = "My Description", Target = "", 
                    IconHtml = "<i class=\"fa fa-file-archive-o\"></i>", 
                    IconUrl = "", ImageUrl = "/images/photo/IMG_8598.JPG", 
                    ParentId = null,
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },
                new MenuItem() {
                    Title = "Review 1 Review 2", Description = "My Description", Target = "", 
                    IconHtml = "<i class=\"fa fa-file-archive-o\"></i>", 
                    IconUrl = "", 
                    ImageUrl = "/images/photo/IMG_8598.JPG", 
                    ParentId = null,
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },

                new MenuItem() {
                    Title = "Review 1 Review 3", Description = "My Description", Target = "", 
                    IconHtml = "<i class=\"fa fa-file-archive-o\"></i>", 
                    IconUrl = "", 
                    ImageUrl = "/images/photo/IMG_8598.JPG", 
                    ParentId = null,
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },

                new MenuItem() {
                    Title = "Review 2 Review 1", Description = "My Description", Target = "", 
                    IconHtml = "<i class=\"fa fa-file-archive-o\"></i>", 
                    IconUrl = "", 
                    ImageUrl = "/images/photo/IMG_8598.JPG",
                    ParentId = null,
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },
                new MenuItem() {
                    Title = "Review 2 Review 2", Description = "My Description", Target = "", 
                    IconHtml = "<i class=\"fa fa-file-archive-o\"></i>", 
                    IconUrl = "", 
                    ImageUrl = "/images/photo/IMG_8598.JPG", 
                    ParentId = null,
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },
                new MenuItem() {
                    Title = "Review 2 Review 3", Description = "My Description", Target = "", 
                    IconHtml = "<i class=\"fa fa-file-archive-o\"></i>", 
                    IconUrl = "", 
                    ImageUrl = "/images/photo/IMG_8598.JPG", 
                    ParentId = null,
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },
            /**
             * 
             */
            /**
             * Third Level Menu
             */
                new MenuItem() {
                    Title = "Review 1 Review 1 Review 1", Description = "My Description", Target = "", 
                    IconHtml = "<i class=\"fa fa-file-archive-o\"></i>", 
                    IconUrl = "", 
                    ImageUrl = "/images/photo/IMG_8598.JPG", 
                    ParentId = null,
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null,
                },
                new MenuItem() {
                    Title = "Review 2 Review 1 Review 1", Description = "My Description", Target = "", 
                    IconHtml = "<i class=\"fa fa-file-archive-o\"></i>", 
                    IconUrl = "", 
                    ImageUrl = "/images/photo/IMG_8598.JPG", 
                    ParentId = null,
                    MenuItems = "",
                    CreateBy = userName, CreateDate = DateTime.UtcNow, UpdateBy = "", UpdateDate = null
                },
            /**
             * 
             */
            };
            return menuItems;
        }
#endregion
#region UpdateMenuItems

        private static async Task UpdateMenuItems(this SQLiteContext context, string userName)
        {
            // var options = new DbContextOptionsBuilder<SQLiteContext>()
            //                 .UseSqlite(Connection.GetConnection(ConnectionType.SQLiteAspNetCore2Angular5)).Options;
            var menuItems = context.MenuItems.ToList();
            var parent = new MenuItem();
            var child = new MenuItem();
            /**
             * Relation of 'Know More' and Children [ "About Us", "Contact Us"]
             */
                parent = menuItems.First(mi => mi.Title == "Know More" );

                child = menuItems.First(mi => mi.Title == "About Us" );
                child.ParentId = parent.Id;
                if(string.IsNullOrWhiteSpace(parent.MenuItems)) {
                    parent.MenuItems = child.Id.ToString();
                } else {
                    parent.MenuItems = string.Join(',', new string[] { parent.MenuItems, child.Id.ToString() } );
                }
                
                child = menuItems.First(mi => mi.Title == "Contact Us" );
                child.ParentId = parent.Id;
                if(string.IsNullOrWhiteSpace(parent.MenuItems)) {
                    parent.MenuItems = child.Id.ToString();
                } else {
                    parent.MenuItems = string.Join(',', new string[] { parent.MenuItems, child.Id.ToString() } );
                }
            /**
             * 
             */
            
            /**
             * Relation of "How to do" and Children [ "Video Tutorial", "Documentation"]
             */
                parent = menuItems.First(mi => mi.Title == "How to do" );

                child = menuItems.First(mi => mi.Title == "Video Tutorial" );
                child.ParentId = parent.Id;
                if(string.IsNullOrWhiteSpace(parent.MenuItems)) {
                    parent.MenuItems = child.Id.ToString();
                } else {
                    parent.MenuItems = string.Join(',', new string[] { parent.MenuItems, child.Id.ToString() } );
                }
                
                child = menuItems.First(mi => mi.Title == "Documentation" );
                child.ParentId = parent.Id;
                if(string.IsNullOrWhiteSpace(parent.MenuItems)) {
                    parent.MenuItems = child.Id.ToString();
                } else {
                    parent.MenuItems = string.Join(',', new string[] { parent.MenuItems, child.Id.ToString() } );
                }
            /**
             * 
             */
            /**
             * Relation of "Customer Reviews" and Children [ "Review 1", "Review 2"]
             */
                parent = menuItems.First(mi => mi.Title == "Customer Reviews" );

                child = menuItems.First(mi => mi.Title == "Review 1" );
                child.ParentId = parent.Id;
                if(string.IsNullOrWhiteSpace(parent.MenuItems)) {
                    parent.MenuItems = child.Id.ToString();
                } else {
                    parent.MenuItems = string.Join(',', new string[] { parent.MenuItems, child.Id.ToString() } );
                }
                
                child = menuItems.First(mi => mi.Title == "Review 2" );
                child.ParentId = parent.Id;
                if(string.IsNullOrWhiteSpace(parent.MenuItems)) {
                    parent.MenuItems = child.Id.ToString();
                } else {
                    parent.MenuItems = string.Join(',', new string[] { parent.MenuItems, child.Id.ToString() } );
                }
            /**
             * 
             */
            /**
             * Relation of "Review 1" and Children [ "Review 1 Review 1", "Review 1 Review 2", "Review 1 Review 2"]
             */
                parent = menuItems.First(mi => mi.Title == "Review 1" );

                child = menuItems.First(mi => mi.Title == "Review 1 Review 1" );
                child.ParentId = parent.Id;
                if(string.IsNullOrWhiteSpace(parent.MenuItems)) {
                    parent.MenuItems = child.Id.ToString();
                } else {
                    parent.MenuItems = string.Join(',', new string[] { parent.MenuItems, child.Id.ToString() } );
                }
                
                child = menuItems.First(mi => mi.Title == "Review 1 Review 2" );
                child.ParentId = parent.Id;
                if(string.IsNullOrWhiteSpace(parent.MenuItems)) {
                    parent.MenuItems = child.Id.ToString();
                } else {
                    parent.MenuItems = string.Join(',', new string[] { parent.MenuItems, child.Id.ToString() } );
                }

                child = menuItems.First(mi => mi.Title == "Review 1 Review 3" );
                child.ParentId = parent.Id;
                if(string.IsNullOrWhiteSpace(parent.MenuItems)) {
                    parent.MenuItems = child.Id.ToString();
                } else {
                    parent.MenuItems = string.Join(',', new string[] { parent.MenuItems, child.Id.ToString() } );
                }
            /**
             * 
             */
            /**
             * Relation of "Review 2" and Children [ "Review 2 Review 1", "Review 2 Review 2", "Review 2 Review 2"]
             */
                parent = menuItems.First(mi => mi.Title == "Review 2" );

                child = menuItems.First(mi => mi.Title == "Review 2 Review 1" );
                child.ParentId = parent.Id;
                if(string.IsNullOrWhiteSpace(parent.MenuItems)) {
                    parent.MenuItems = child.Id.ToString();
                } else {
                    parent.MenuItems = string.Join(',', new string[] { parent.MenuItems, child.Id.ToString() } );
                }
                
                child = menuItems.First(mi => mi.Title == "Review 2 Review 2" );
                child.ParentId = parent.Id;
                if(string.IsNullOrWhiteSpace(parent.MenuItems)) {
                    parent.MenuItems = child.Id.ToString();
                } else {
                    parent.MenuItems = string.Join(',', new string[] { parent.MenuItems, child.Id.ToString() } );
                }

                child = menuItems.First(mi => mi.Title == "Review 2 Review 3" );
                child.ParentId = parent.Id;
                if(string.IsNullOrWhiteSpace(parent.MenuItems)) {
                    parent.MenuItems = child.Id.ToString();
                } else {
                    parent.MenuItems = string.Join(',', new string[] { parent.MenuItems, child.Id.ToString() } );
                }
            /**
             * 
             */
            /**
             * Relation of "Review 1 Review 1" and Children [ "Review 1 Review 1 Review 1" ]
             */
                parent = menuItems.First(mi => mi.Title == "Review 1 Review 1" );

                child = menuItems.First(mi => mi.Title == "Review 1 Review 1 Review 1" );
                child.ParentId = parent.Id;
                if(string.IsNullOrWhiteSpace(parent.MenuItems)) {
                    parent.MenuItems = child.Id.ToString();
                } else {
                    parent.MenuItems = string.Join(',', new string[] { parent.MenuItems, child.Id.ToString() } );
                }
                
            /**
             * 
             */
            /**
             * Relation of "Review 2 Review 1" and Children [ "Review 2 Review 1 Review 1" ]
             */
                parent = menuItems.First(mi => mi.Title == "Review 2 Review 1" );

                child = menuItems.First(mi => mi.Title == "Review 2 Review 1 Review 1" );
                child.ParentId = parent.Id;
                if(string.IsNullOrWhiteSpace(parent.MenuItems)) {
                    parent.MenuItems = child.Id.ToString();
                } else {
                    parent.MenuItems = string.Join(',', new string[] { parent.MenuItems, child.Id.ToString() } );
                }
                
            /**
             * 
             */
            // return menuItems;
            try {
                context.UpdateRange(menuItems);
                await context.SaveChangesAsync();
            } catch(Exception ex) {

            }
        }   
#endregion
    }
}