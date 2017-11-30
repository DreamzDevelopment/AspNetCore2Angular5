using Microsoft.Extensions.Configuration;
using System;
using AspNetCore2Angular5.OptionModels;

namespace AspNetCore2Angular5.Data
{
    public enum ConnectionType {
        SQLServer,
        ConSQLiteApp,
        SQLiteAspNetCore2Angular5,
        SQLiteLocalization,
    }
    public static class Connection
    {
        public static string conString { get; internal set; }
        const string sqlServerConnection = nameof(SQLServerOption.SQLServerConnection);
        const string sqlServerAlternateConnection = nameof(SQLServerOption.SQLServerAlternateConnection);
        const string sqliteConnection = nameof(SQLServerOption.SQLiteConnection);
        const string sqlServerAdmin = nameof(SQLServerOption.SQLServerAdminUserName);
        const string sqlServerAdminSecurity = nameof(SQLServerOption.SQLServerAdminSecurityInfo);
#region GetInMemoryDatabase
        public static string GetInMemoryDatabase() 
        {
            return Startup.Configuration.GetInMemoryDatabase();
        }
        public static string GetInMemoryDatabase(this IConfiguration Configuration) 
        {
            return Configuration["InMemoryDatabase:Name"];
        }
#endregion
#region ConnectionString
        public static string GetConnection(ConnectionType conType) 
        {
            return Startup.Configuration.GetConnection(conType);
        }
        public static string GetConnection(this IConfiguration Configuration, ConnectionType conType)
        {
            // Sql Login Details
            conString = Configuration["ConnectionStrings:ConMSSQL"];
            if(string.IsNullOrWhiteSpace(conString)) {
                conString = Configuration[sqlServerConnection];
            }
            switch (conType)
            {
                case ConnectionType.SQLiteLocalization:
                    conString = Configuration["ConnectionStrings:ConLocalization"];
                    if(string.IsNullOrWhiteSpace(conString)) {
                        conString = Configuration[sqliteConnection];
                    }
                    break;
                case ConnectionType.SQLiteAspNetCore2Angular5: 
                    conString = Configuration["ConnectionStrings:ConSQLite"];
                    if(string.IsNullOrWhiteSpace(conString)) {
                        conString = Configuration[sqliteConnection];
                    }
                    break;
                // this is alternate to SQL Server database, which is main database of the APP
                case ConnectionType.ConSQLiteApp: 
                    conString = Configuration["ConnectionStrings:ConSQLiteApp"];
                    if(string.IsNullOrWhiteSpace(conString)) {
                        conString = Configuration[sqlServerAlternateConnection];
                    }
                    break;
                case ConnectionType.SQLServer:
                default:
                    var userId = Configuration[sqlServerAdmin];           
                    var userSecret = GetUserSecret(Configuration);
                    conString = conString + "User ID=" + userId + ";" + "Password=" + userSecret + ";";
                    break;
            }
            return conString;
        }
        // TODO: Encryption and decryption of User Secrets, must implement
        public static string GetUserSecret()
        {
            return Startup.Configuration.GetUserSecret();
        }
        public static string GetUserSecret(this IConfiguration Configuration)
        {
            return Configuration[sqlServerAdminSecurity];
        }
#endregion ConnectionString
    }
}
