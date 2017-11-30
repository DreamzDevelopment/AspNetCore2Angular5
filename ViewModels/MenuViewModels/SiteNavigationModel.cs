

using System.Collections.Generic;
using AspNetCore2Angular5.Entities.SQLite;

namespace AspNetCore2Angular5.ViewModels.MenuViewModels
{
    public class  SiteNavigationModel 
    {
        /**
         * Currently Selected template from Template Collection
         */
        public virtual int SelectedTemplate { get; set; }
        /**
         * Base element, within which menu items will be injected
         * Only jQuery Selector, such as '.base-element' etc.
         */
        public virtual string SelectorBase { get; set; }
        /**
         * Collection of available template(s)
         */
        public virtual ICollection<MenuTemplateDto> MenuTemplates { get; set; }
        /**
         * Collection of Menu item(s)
         */
        public virtual ICollection<MenuItemDto> MenuItems { get; set; }
    }
       
}