using System;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCore2Angular5.Entities
{

    /// <summary>
    /// Sub property of Product class /// Associated to a category 
    /// </summary>
    public class ParentCategory
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
        [Key] [DatabaseGenerated(DatabaseGeneratedOption.Identity)] [HiddenInput]
        public virtual int ParentId { get; set; }
        // Foreign Key mapping
        [ForeignKey("StoreType")] [Display(Name = "Store Type")] [Required(ErrorMessage = "Please select Store Type.")]
        public virtual int StoreId { get; set; }

        [Required(ErrorMessage = "Please enter the name of the Parent Category.")] [Display(Name = "Parent Title")]
        [StringLength(30, MinimumLength = 3, ErrorMessage = "Title must be at least 3 character long and maximum 30 characters allowed.")]
        public virtual string ParentTitle { get; set; }
        /// <summary>
        /// Image icon url for Parent Category, to identically set an icon for Parent Category
        /// </summary>
        public virtual string IconUrl { get; set; }
        // Navigation
        public virtual StoreType StoreType { get; set; }
        public virtual ICollection<Category> Categories { get; set; }
    }

    public class ParentCategoryDto
    {
        public ParentCategoryDto() { }
        public ParentCategoryDto(ParentCategory parent, bool includeCategories = false) {
            if(parent != null) {
                this.CreateBy = parent.CreateBy;
                this.CreateDate = parent.CreateDate;
                this.UpdateBy = parent.UpdateBy;
                this.UpdateDate = parent.UpdateDate;
                this.ParentId = parent.ParentId;
                this.ParentTitle = parent.ParentTitle;
                this.IconUrl = parent.IconUrl;
                this.StoreType = parent.StoreType;
                if( includeCategories && parent.Categories != null ) {
                    this.Categories = (ICollection<CategoryDto>) from c in (IEnumerable<Category>)parent.Categories select new CategoryDto(c);
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
        [Key] [DatabaseGenerated(DatabaseGeneratedOption.Identity)] [HiddenInput]
        public virtual int ParentId { get; set; }
        // Foreign Key mapping
        [ForeignKey("StoreType")] [Display(Name = "Store Type")] [Required(ErrorMessage = "Please select Store Type.")]
        public virtual int StoreId { get; set; }

        [Required(ErrorMessage = "Please enter the name of the Parent Category.")] [Display(Name = "Parent Title")]
        [StringLength(30, MinimumLength = 3, ErrorMessage = "Title must be at least 3 character long and maximum 30 characters allowed.")]
        public virtual string ParentTitle { get; set; }
        /// <summary>
        /// Image icon url for Parent Category, to identically set an icon for Parent Category
        /// </summary>
        public virtual string IconUrl { get; set; }
        // Navigation
        public virtual StoreType StoreType { get; set; }
        public virtual ICollection<CategoryDto> Categories { get; set; }
    }
}
