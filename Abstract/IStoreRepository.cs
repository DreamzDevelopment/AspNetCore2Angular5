using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AspNetCore2Angular5.Entities;

namespace AspNetCore2Angular5.Abstract
{
    public interface IStoreRepository : IDisposable
    {
        Task<IEnumerable<StoreType>> GetStores();
        // /// <summary>
        // /// Get all the Store Dtos from the Context
        // /// </summary>
        // Task<IEnumerable<StoreTypeDto>> GetStoreDtos();
    }
}