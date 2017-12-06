using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Localization.SqlLocalizer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Options;
using AspNetCore2Angular5.Models;
using AspNetCore2Angular5.OptionModels;
using Localization.SqlLocalizer.DbStringLocalizer;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using AspNetCore2Angular5.Data;

namespace AspNetCore2Angular5.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHtmlLocalizer<HomeController> _localizer;
        private readonly IStringLocalizer<SharedResource> _stringLocalizer;
        private readonly ILocalizationRepository _LocalizationRepository;
        public HomeController( IHtmlLocalizer<HomeController> localizer, IStringLocalizer<SharedResource> stringLocalizer, ILocalizationRepository localizationRepository)
        {
            _localizer = localizer;
            _stringLocalizer = stringLocalizer;
            _LocalizationRepository = localizationRepository;
        }
        public async Task<IActionResult> Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";
            
            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        /// <summary>
        /// Select Culture of the App.
        /// </summary>
        /// <param name="culture"></param>
        /// <param name="returnUrl"></param>
        [HttpPostAttribute]
        public async Task<IActionResult> SelectCulture(string culture, bool ignoreCase = false, string returnUrl = null) {
            Response.Cookies.Append(CookieRequestCultureProvider.DefaultCookieName, CookieRequestCultureProvider.MakeCookieValue(
                new RequestCulture(culture)),
                new CookieOptions { Expires = DateTimeOffset.UtcNow.AddDays(100)}
            );
            await _LocalizationRepository.ResetLocalizationCache(null, ignoreCase);
            return RedirectToLocal(returnUrl);
        }

#region Helpers
        // private Task<AspNetCore2Angular5User> GetCurrentUserAsync()
        // {
        //     return _UserManager.GetUserAsync(HttpContext.User);
        // }
        private IActionResult RedirectToLocal(string returnUrl)
        {
            if (!string.IsNullOrWhiteSpace(returnUrl))
            {
                return Redirect(returnUrl);
            }
            else
            {
                return RedirectToAction(nameof(HomeController.Index), "Home");
            }
        }
        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }
#endregion
    }
}
