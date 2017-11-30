namespace AspNetCore2Angular5.OptionModels
{
    public class SQLServerOption
    {
        public virtual string SQLServerConnection { get; set; }
        public virtual string SQLServerAlternateConnection { get; set; }
        public virtual string SQLiteConnection { get; set; }
        public virtual string SQLServerAdminUserName { get; set; }
        public virtual string SQLServerAdminSecurityInfo { get; set; }
    }
}