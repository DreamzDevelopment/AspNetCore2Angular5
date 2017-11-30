using System.Collections.Generic;
using System.Linq;
using static Microsoft.AspNetCore.ResponseCompression.ResponseCompressionDefaults;

namespace AspNetCore2Angular5.Helpers
{
    public static class MimeTypeHelper
    {
        public static IEnumerable<string> DefaultMimeTypes => MimeTypes.Concat(new[]
                                {
                                    "image/svg+xml",
                                    // "image/png", // natively compressed, better not to further compress
                                    // "image/jpeg",
                                    // "image/jpg",
                                    "image/gif",
                                    "application/atom+xml",
                                    "application/font-woff2"
                                });
    }
}