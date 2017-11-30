using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Serilog;
using Serilog.Events;
namespace AspNetCore2Angular5.Helpers
{
    public static class SerilogHelper
    {
        
        public static void SetupSerilog()
        {
            // Configure Serilog
            Log.Logger = new LoggerConfiguration()
            .MinimumLevel
            .Information()
            .WriteTo.File($"logs/log-{DateTime.UtcNow.ToString(@"yyyy/MM/dd HH:mm tt")}.txt", LogEventLevel.Information) // Un comment if logging required on text file
            .WriteTo.Seq("http://localhost:5341/")
            .CreateLogger();
        }
       
    }
}