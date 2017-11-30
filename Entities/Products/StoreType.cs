using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace AspNetCore2Angular5.Entities
{
    public class StoreType
    {
#region  Create & update information  
        [Display(Name = "Create By")]
        public virtual string CreateBy { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Create Date")]
        public virtual DateTime CreateDate { get; set; } = DateTime.Now.ToLocalTime();
        [Display(Name = "Update By")]
        public virtual string UpdateBy { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Update Date")]
        public virtual DateTime? UpdateDate { get; set; } = DateTime.Now.ToLocalTime();
#endregion
        [RequiredAttribute] [KeyAttribute] [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public virtual int StoreId { get; set; }

        [Required(ErrorMessage = "Please enter the name of the Store.")] [Display(Name = "Store Type")]
        [StringLength(30, MinimumLength = 3, ErrorMessage = "Title must be at least 3 character long and maximum 30 characters allowed.")]
        public virtual string StoreTitle { get; set; }
        /// <summary>
        /// Image icon url for store, to identically set an icon for store type
        /// </summary>
        [MaxLength(300)]
        public virtual string StoreIconUrl { get; set; }
        /// <summary>
        /// Icon html for store, to identically set an icon for store type
        /// </summary>
        [MaxLength(1000)]
        public virtual string StoreIconHtml { get; set; }
        /// <summary>
        /// StoreType description, what task means by a particular StoreType value for different StoreTypes.
        /// </summary>
        [StringLengthAttribute(300, ErrorMessage="Description must not exceed the maximum length of 300 chars.")]
        [DisplayAttribute(Prompt="Store Description")]
        public virtual string Description { get; set; }
        // Navigation
        public virtual IEnumerable<ParentCategory> ParentCategories { get; set; }
    }
    public class StoreTypeDto
    {
        public StoreTypeDto(){
            
        }
        public StoreTypeDto(StoreType storeType, bool includeParent = false, bool includeCategory = false, bool includeProduct = false) {
            if(storeType != null) {
                this.StoreId = storeType.StoreId;
                this.StoreTitle = storeType.StoreTitle;
                this.StoreIconUrl = storeType.StoreIconUrl;
                this.CreateBy = storeType.CreateBy;
                this.CreateDate = storeType.CreateDate;
                this.Description = storeType.Description;
                this.UpdateBy = storeType.UpdateBy;
                this.UpdateDate = storeType.UpdateDate;
                
                if(includeParent == true && storeType.ParentCategories != null && storeType.ParentCategories.Count() > 0){
                    this.ParentCategories = from pc in storeType.ParentCategories select new ParentCategoryDto(pc, includeCategory);
                }
            } 
        }
#region  Create & update information  
        [Display(Name = "Create By")]
        public virtual string CreateBy { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Create Date")]
        public virtual DateTime CreateDate { get; set; } = DateTime.Now.ToLocalTime();
        [Display(Name = "Update By")]
        public virtual string UpdateBy { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Update Date")]
        public virtual DateTime? UpdateDate { get; set; } = DateTime.Now.ToLocalTime();
#endregion
        public virtual int StoreId { get; set; }

        [StringLength(30, MinimumLength = 3, ErrorMessage = "Title must be at least 3 character long and maximum 30 characters allowed.")]
        public virtual string StoreTitle { get; set; }
        /// <summary>
        /// Image icon url for store, to identically set an icon for store type
        /// </summary>
        [MaxLength(300)]
        public virtual string StoreIconUrl { get; set; }
        /// <summary>
        /// Icon html for store, to identically set an icon for store type
        /// </summary>
        [MaxLength(1000)]
        public virtual string StoreIconHtml { get; set; }
        /// <summary>
        /// StoreType description, what task means by a particular StoreType value for different StoreTypes.
        /// </summary>
        
        [StringLengthAttribute(300, ErrorMessage="Description must not exceed the maximum length of 300 chars.")]
        [DisplayAttribute(Prompt="Store Description")]
        public virtual string Description { get; set; }
        // Navigation
        public virtual IEnumerable<ParentCategoryDto> ParentCategories { get; set; }
    }
}