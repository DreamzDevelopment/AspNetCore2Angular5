namespace AspNetCore2Angular5.OptionModels
{
    public partial class FacebookAuthenticationOptions 
    {   
        public string AuthenticationFacebookAppId {get;set;}
        public string AuthenticationFacebookAppSecret {get;set;}
    }
    public partial class TwitterAuthenticationOptions 
    {   
        public string AuthenticationTwitterConsumerKey {get;set;}
        public string AuthenticationTwitterConsumerSecret {get;set;}
    }
    public partial class GoogleAuthenticationOptions 
    {   
        public string AuthenticationGoogleClientId {get;set;}
        public string AuthenticationGoogleClientSecret {get;set;}
    }
    public partial class MicrosoftAuthenticationOptions 
    {   
        public string AuthenticationMicrosoftClientId {get;set;}
        public string AuthenticationMicrosoftClientSecret {get;set;}
    }
    public partial class LinkedInAuthenticationOptions 
    {   
        public string AuthenticationLinkedInClientId {get;set;}
        public string AuthenticationLinkedInClientSecret {get;set;}
    }
    public partial class GitHubAuthenticationOptions 
    {   
        public string AuthenticationGitHubClientId {get;set;}
        public string AuthenticationGitHubClientSecret {get;set;}
    }
    public partial class PaypalAuthenticationOptions 
    {   
        public string AuthenticationPaypalClientId {get;set;}
        public string AuthenticationPaypalClientSecret {get;set;}
    }
    public partial class YahooAuthenticationOptions 
    {   
        public string AuthenticationYahooClientId {get;set;}
        public string AuthenticationYahooClientSecret {get;set;}
    }
}