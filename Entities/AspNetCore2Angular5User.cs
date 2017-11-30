using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

 namespace AspNetCore2Angular5.Entities
 {
    ///
    /// Extended IdentityUser
    /// Add profile data for application users by adding properties to the AspNetCore2Angular5User class
    public class AspNetCore2Angular5User : IdentityUser
    {
        
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Registration Date")]
        public DateTime JoinDate { get; set; }
        
        // Summary:
        // Parameters:
        //   LastLogInDate:
        //     The last successful login date.
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Last Login Date")]
        public DateTime LastLogInDate { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Email Link Date")]
        public DateTime EmailLinkDate { get; set; }

        [DisplayAttribute(Name="Country")]
        [StringLength(100, ErrorMessage = "Maximum number of characters allowed is 100")]
        public string Country { get; set; }
        [StringLength(100, ErrorMessage = "Maximum number of characters allowed is 100")]
        public string AccountStatus { get; set; }

        // Similar to AccountStatus(string), (this)boolean flag
        public bool IsActive { get; set; }
        
        /*
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<AppUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }
        */
        /// <summary>
        /// Navigation property for the roles this user belongs to.
        /// </summary>
        public virtual ICollection<IdentityUserRole<string>> Roles { get; } = new List<IdentityUserRole<string>>();

        /// <summary>
        /// Navigation property for the claims this user possesses.
        /// </summary>
        public virtual ICollection<IdentityUserClaim<string>> Claims { get; } = new List<IdentityUserClaim<string>>();

        /// <summary>
        /// Navigation property for this users login accounts.
        /// </summary>
        public virtual ICollection<IdentityUserLogin<string>> Logins { get; } = new List<IdentityUserLogin<string>>();

    }
    public class AspNetCore2Angular5UserDto
    {
        public AspNetCore2Angular5UserDto() { }
        public AspNetCore2Angular5UserDto(AspNetCore2Angular5User user, bool includePerson = false, bool includeBKash = false,bool includePhoneDirectory = false, bool includeRecovery = false, bool includeSubscription = false) { 
            if(user != null) {
                this.Id = user.Id;
                this.AccessFailedCount = user.AccessFailedCount;
                this.Claims = user.Claims;
                this.Email = user.Email;
                this.EmailConfirmed = user.EmailConfirmed;
                this.LockoutEnabled = user.LockoutEnabled;
                this.LockoutEnd = user.LockoutEnd;
                this.Logins = user.Logins;
                this.PhoneNumber = user.PhoneNumber;
                this.PhoneNumberConfirmed = user.PhoneNumberConfirmed;
                this.Roles = user.Roles;
                this.TwoFactorEnabled = user.TwoFactorEnabled;
                this.UserName = user.UserName;
                this.AccountStatus = user.AccountStatus;
                this.Country = user.Country;
                this.EmailLinkDate = user.EmailLinkDate;
                this.IsActive = user.IsActive;
                this.JoinDate = user.JoinDate;
                this.LastLogInDate = user.LastLogInDate;
            }
        }
        public string Id { get; set; }
        public int AccessFailedCount { get; set; }
        public ICollection<IdentityUserClaim<string>> Claims { get; set; }

        [DataTypeAttribute(DataType.EmailAddress)]
        public string Email { get; set; }
        public bool EmailConfirmed { get; set; }
        public bool LockoutEnabled { get; set; }
        public DateTimeOffset? LockoutEnd { get; set; }
        public ICollection<IdentityUserLogin<string>> Logins { get; set; }
        
        [DataTypeAttribute(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; }
        public bool PhoneNumberConfirmed { get; set; }
        public ICollection<IdentityUserRole<string>> Roles { get; set; }
        public bool TwoFactorEnabled { get; set; }
        public string UserName { get; set; }
        

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Registration Date")]
        public DateTime JoinDate { get; set; }
        
        // Summary:
        // Parameters:
        //   LastLogInDate:
        //     The last successful login date.
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Last Login Date")]
        public DateTime LastLogInDate { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Email Link Date")]
        public DateTime EmailLinkDate { get; set; }

        [DisplayAttribute(Name="Country")]
        public string Country { get; set; }
        public string AccountStatus { get; set; }

        // Similar to AccountStatus(string), (this)boolean flag
        public bool IsActive { get; set; }
        
        /*
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<AppUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }
        */

    }
 }