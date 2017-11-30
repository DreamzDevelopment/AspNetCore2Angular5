using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCore2Angular5.ViewComponents
{
    [ViewComponentAttribute(Name = "MenuIcon")]
    public class MenuIconComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(string iconType)
        {
            switch(iconType)
            {
                case "1":
                return View("MenuIcon1");
                case "2":
                return View("MenuIcon2");
                case "3":
                return View("MenuIcon3");
                case "4":
                return View("MenuIcon4");
                default:
                return View("MenuIcon0");
            }
        }
    }
}