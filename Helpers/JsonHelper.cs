using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace AspNetCore2Angular5.Helpers
{
    public static class JsonHelper
    {
        public static string JsonSerialize(object obj)
        {
            return JsonConvert.SerializeObject(obj,
                        new JsonSerializerSettings
                        {
                            ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                            StringEscapeHandling =  StringEscapeHandling.EscapeHtml,
                            ContractResolver = new CamelCasePropertyNamesContractResolver()
                        });
        }
    }
}