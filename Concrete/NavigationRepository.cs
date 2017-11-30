using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using AspNetCore2Angular5.Abstract;
using AspNetCore2Angular5.Data;
using AspNetCore2Angular5.Entities.SQLite;
using AspNetCore2Angular5.OptionModels;

namespace AspNetCore2Angular5.Concrete
{
    public class NavigationRepository : INavigationRepository
    {
        private readonly SQLiteContext _SQLiteContext;
        private readonly DBContextOption _DBContextOption;
        public NavigationRepository(SQLiteContext context, IOptions<DBContextOption> dbOptions) {
            _SQLiteContext = context;
            _DBContextOption = dbOptions.Value;
        }

#region GetMenuTemplates
        /// <summary>
        /// 
        /// </summary>
        public async Task<ICollection<MenuTemplate>> GetMenuTemplatesAsync( ) 
        {
            var menuTemplates = await _SQLiteContext.MenuTemplates.ToListAsync();
            var sqliteOptions = new DbContextOptionsBuilder<SQLiteContext>()
                                .UseSqlite(_DBContextOption.ConSQLite)
                                .Options;
            using(var sqliteContext = new SQLiteContext(sqliteOptions) )
            {
                foreach (var item in menuTemplates)
                {
                    item.RootElement = await sqliteContext.MenuHtmls.FindAsync(item.RootId);
                    item.ChildElement = await sqliteContext.MenuHtmls.FindAsync(item.ChildId);
                }
            }
            
            return menuTemplates;
        }
#endregion
#region GetMenuItemsAsync
        /// <summary>
        /// 
        /// </summary>
        public async Task<ICollection<MenuItem>> GetMenuItemsAsync()
        {
            return await _SQLiteContext.MenuItems.ToListAsync();
        }
#endregion
#region FindTemplateAsync
        /// <summary>
        /// Find menu template with Title or Id of the MenuTemplate
        /// </summary>
        /// <param name="id">Id or Title of the MenuTemplate</param>
        public async Task<MenuTemplate> FindTemplateAsync( string id ) 
        {
            MenuTemplate menuTemplate = null;
            if(!string.IsNullOrWhiteSpace(id)) {
                int _id = -1;
                if(int.TryParse(id, out _id)) {
                    menuTemplate = await _SQLiteContext.MenuTemplates.FirstOrDefaultAsync(mt => mt.Id == _id );
                }
                if(menuTemplate == null) {
                    menuTemplate = await _SQLiteContext.MenuTemplates.FirstOrDefaultAsync(mt => mt.Title.ToLower() == id.ToLower() );
                }
            }
            return menuTemplate;
        }
        
#endregion


#region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects).
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~NavigationRepository() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        void System.IDisposable.Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }

        
        #endregion

    }
}