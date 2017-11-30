using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using AspNetCore2Angular5.Abstract;

namespace AspNetCore2Angular5.Controllers
{
    public class StoreController: Controller
    {
#region Variables
        
#endregion
#region Constructor
        public StoreController()
        {
            
        }
#endregion
#region Store Home

        /// <summary>
        /// Get all products from the context
        /// </summary>
        [HttpGet]
        [AllowAnonymous]
        public IActionResult Index()
        {
            // var products = await _ProductRepository.GetAllProducts();
            // foreach (var item in products)
            // {
            // }
            return View();
        }
#endregion
#region Helpers
    
#endregion

    }
}