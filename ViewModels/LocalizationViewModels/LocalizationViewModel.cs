using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Metadata;
using AspNetCore2Angular5.ViewModels.DataDefinitionModels;

namespace AspNetCore2Angular5.ViewModels.LocalizationViewModels
{
    public class LocalizationViewModel
    {
        public virtual IEnumerable<IEntityType> IEntityList { get; set; } 
        public virtual IEnumerable<EntityListModel> EntityList { get; set; }

    }
    
    public class MyModel<TClass>
    {
        private string entityName;

        public MyModel()
        {
        }

        public MyModel(System.Type t) {
            
        }

    }
    
}