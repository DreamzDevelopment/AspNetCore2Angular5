using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AspNetCore2Angular5.Abstract;
using AspNetCore2Angular5.Data;
using AspNetCore2Angular5.Entities;

namespace AspNetCore2Angular5.Concrete
{
    public class StoreRepository : IStoreRepository
    {
        private readonly SQLServerContext _Context;
        public StoreRepository(SQLServerContext context) {
            _Context = context;
        }
        public async  Task<IEnumerable<StoreType>> GetStores()
        {
            var stores = await _Context.StoreTypes
                .Include(s => s.ParentCategories)
                .ThenInclude(p => p.Categories)
                .OrderBy(s => s.StoreTitle).ToListAsync();
            return stores;
        }        

#region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects).
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~StoreRepository() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        void System.IDisposable.Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }
#endregion

    }
}