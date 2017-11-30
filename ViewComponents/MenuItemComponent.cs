using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNetCore2Angular5.Entities.SQLite;
using AspNetCore2Angular5.ViewModels.MenuViewModels;

namespace AspNetCore2Angular5.ViewComponents
{
    [ViewComponentAttribute(Name = "MenuItem")]
    public class MenuItemComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(SiteNavigationModel model)
        {
            var viewName = "Default";
            if(model != null) {
                // switch(model.MenuItemType)
                // {
                //     case MenuItemType.Gradient:
                //         viewName = "Gradient";
                //         break;
                //     case MenuItemType.PictureBox:
                //         viewName = "PictureBox";
                //         break;
                //     default:
                //         viewName = "Default";
                //         break;
                // }
            }
            return View(viewName, model);
            
        }
    }
}