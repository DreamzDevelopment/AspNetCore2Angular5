using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNetCore2Angular5.Abstract;
using AspNetCore2Angular5.Entities;

namespace AspNetCore2Angular5.Api
{
    [Route("api/[controller]")]
    public class apiStoreController : Controller
    {
        private readonly IStoreRepository _StoreRepository;
        public apiStoreController(IStoreRepository storeRepository) 
        {
            _StoreRepository = storeRepository;
        }
#region Get Stores
        /// <summary>
        /// Get Store List from the Context
        /// </summary>
        [HttpGet]
        [Route("[action]")]
        [Produces("application/json")]
        public async Task<IActionResult> GetStores()
        {
            var stores = from s in await _StoreRepository.GetStores() select new StoreTypeDto(s, true, true);
            return Ok(stores);
        }
#endregion
    }
}