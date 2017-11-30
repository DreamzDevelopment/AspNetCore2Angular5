using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace AspNetCore2Angular5.Entities
{
    public class AspNetCore2Angular5Role : IdentityRole
    {
        public AspNetCore2Angular5Role()
        {
        }

        public AspNetCore2Angular5Role(string roleName) : base(roleName)
        {
        }
        //
        // Summary:
        //     Initializes a new instance of AspNetCore2Angular5Role
        //
        // Parameters:
        //   roleName:
        //     The role name.
        //  description:
        //      Description of the role.
        //
        // Remarks:
        //     The Id property is initialized from a new GUID string value.

        public AspNetCore2Angular5Role(string name, string description) : base(name)
        {
            Description = description;
        }
        [StringLength(200, ErrorMessage = "Maximum number of characters allowed is 200")]
        public string Description { get; set; }
#region  Create & Update information 
        [Display(Name = "Create By")]
        public string CreateBy { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Entry Date")]
        public DateTime EntryDate { get; set; } = DateTime.UtcNow;
        [Display(Name = "Update By")]
        public string UpdateBy { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Update Date")]
        public DateTime? UpdateDate { get; set; } = DateTime.UtcNow;
#endregion
        /// <summary>
        /// Navigation property for the users this role belongs to.
        /// </summary>
        public virtual ICollection<IdentityUserRole<string>> Users { get; } = new List<IdentityUserRole<string>>();

        /// <summary>
        /// Navigation property for the claims this user possesses.
        /// </summary>
        public virtual ICollection<IdentityRoleClaim<string>> Claims { get; } = new List<IdentityRoleClaim<string>>();

    }
    public class AspNetCore2Angular5RoleDto
    {
        public AspNetCore2Angular5RoleDto()
        {
        }

        public AspNetCore2Angular5RoleDto(AspNetCore2Angular5Role role)
        {
            if(role != null){
                this.Id = role.Id;
                
                this.Claims = role.Claims;
                this.ConcurrencyStamp = role.ConcurrencyStamp;
                
                this.CreateBy = role.CreateBy;
                this.Description = role.Description;
                this.EntryDate = role.EntryDate;
                this.Name = role.Name;
                this.UpdateBy = role.UpdateBy;
                this.UpdateDate = role.UpdateDate;
                this.Users = role.Users;
            }
        }
        public string Id { get; set; }
        public ICollection<IdentityRoleClaim<string>> Claims { get; set; }
        public string ConcurrencyStamp { get; set; }

        [StringLength(200, ErrorMessage = "Maximum number of characters allowed is 200")]
        public string Description { get; set; }
        public string Name { get; set; }
        public ICollection<IdentityUserRole<string>> Users { get; set; }
#region  Create & Update information 
        [Display(Name = "Create By")]
        public string CreateBy { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Entry Date")]
        public DateTime EntryDate { get; set; } = DateTime.UtcNow;
        [Display(Name = "Update By")]
        public string UpdateBy { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Update Date")]
        public DateTime? UpdateDate { get; set; } = DateTime.UtcNow;
#endregion
    }

    
}
