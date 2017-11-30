using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AspNetCore2Angular5.Entities.SQLite;

namespace AspNetCore2Angular5.Abstract
{
    public interface INavigationRepository : IDisposable
    {
        Task<ICollection<MenuTemplate>> GetMenuTemplatesAsync( );
        Task<ICollection<MenuItem>> GetMenuItemsAsync( );
        Task<MenuTemplate> FindTemplateAsync( string id );
    }
}