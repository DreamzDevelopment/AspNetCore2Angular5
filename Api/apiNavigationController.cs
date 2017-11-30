


using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using AspNetCore2Angular5.Data;
using AspNetCore2Angular5.Entities.SQLite;
using AspNetCore2Angular5.ViewModels.MenuViewModels;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.DependencyInjection;
using AspNetCore2Angular5.Abstract;

namespace AspNetCore2Angular5.Api 
{
    [RouteAttribute("api/[controller]")]
    public class apiNavigationController: Controller
    {
        private readonly INavigationRepository _NavigationRepository;
        public apiNavigationController(INavigationRepository navigationRepository) {
            _NavigationRepository  = navigationRepository;
        }

#region Get Navigation Menus
        /// <summary>
        /// Get Navigation Menu, Templates and MenuItems
        /// </summary>
        /// <param name="template">Id of selected template</param>
        [HttpGet]
        [RouteAttribute("[action]")]
        [Produces("application/json")]
        [AllowAnonymous]
        public async Task<IActionResult> GetNavigationMenu(string template ) {
            var model = new SiteNavigationModel() { 
                    SelectorBase = ".navigation-menu",
                    SelectedTemplate = 1,
                    MenuTemplates = new List<MenuTemplateDto>(),
                    MenuItems = new List<MenuItemDto>() 
                };
            foreach (var item in await _NavigationRepository.GetMenuTemplatesAsync())
            {
                model.MenuTemplates.Add(new MenuTemplateDto(item));
            }
            foreach (var item in await _NavigationRepository.GetMenuItemsAsync())
            {
                model.MenuItems.Add(new MenuItemDto(item));
            }
            var _template = await _NavigationRepository.FindTemplateAsync(template);
            MenuTemplateDto _templateDto = null;
            
            if(_template == null && model.MenuTemplates != null && !string.IsNullOrWhiteSpace(template)) {
                int _id = -1;
                if(int.TryParse(template, out _id)) {
                    _templateDto= model.MenuTemplates.FirstOrDefault(mt => mt.Id == _id );
                } 
                if(_templateDto == null) {
                    _templateDto= model.MenuTemplates.FirstOrDefault(mt => mt.Title.ToLower() == template.ToLower() );
                }
            }
            model.SelectedTemplate = _template != null ? _template.Id : _templateDto != null ? _templateDto.Id : -1;
            return Ok(model);
        }
#endregion
    }
}