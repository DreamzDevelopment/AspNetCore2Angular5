using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCore2Angular5.ViewComponents
{
    [ViewComponentAttribute(Name = "SocialPanel")]
    public class SocialPanelComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(string viewType)
        {
            switch(viewType)
            {
                case "Diamond":
                    return View("DiamondPanel");
                case "Circle":
                    return View("CirclePanel");
                case "BoxPanel":
                    return View("BoxPanel");
                default:
                    return View("Default");
            }
        }
    }
}