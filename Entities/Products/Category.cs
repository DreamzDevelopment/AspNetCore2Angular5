using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCore2Angular5.Entities
{

    /// <summary>AspNetCore2Angular5
    /// Category of the products
    /// </summary>
    public class Category
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
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [HiddenInput]
        public virtual int CategoryId { get; set; }

        // Foreign Key mapping
        [ForeignKey("ParentCategory")] [Display(Name = "Parent Category")] [Required(ErrorMessage = "Please select Parent Category.")]
        public virtual int ParentId { get; set; }

        // Logic (ParentCategory and Category.Title unique)
        [Required(ErrorMessage = "Please enter the name of the Category.")] [Display(Name = "Category Title")]
        [StringLength(30, MinimumLength = 1, ErrorMessage = "Title must be at least 3 character long and maximum 30 characters allowed.")]
        public virtual string Title { get; set; }

        // Navigation
        public virtual ParentCategory ParentCategory { get; set; }
        // public virtual ICollection<Product> Products { get; set; }
    }
    public class CategoryDto
    {
        public CategoryDto() { }
        public CategoryDto(Category category, bool includeParent = false) {
            this.CreateBy = category.CreateBy;
            this.CreateDate = category.CreateDate;
            this.UpdateBy = category.UpdateBy;
            this.UpdateDate = category.UpdateDate;
            this.CategoryId = category.CategoryId ;
            this.ParentId = category.ParentId ;
            this.Title = category.Title;
            if( includeParent && category.ParentCategory != null) {
                this.ParentCategory = new ParentCategoryDto(category.ParentCategory);
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
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [HiddenInput]
        public virtual int CategoryId { get; set; }

        // Foreign Key mapping
        [ForeignKey("ParentCategory")] [Display(Name = "Parent Category")] [Required(ErrorMessage = "Please select Parent Category.")]
        public virtual int ParentId { get; set; }

        // Logic (ParentCategory and Category.Title unique)
        [Required(ErrorMessage = "Please enter the name of the Category.")] [Display(Name = "Category Title")]
        [StringLength(30, MinimumLength = 1, ErrorMessage = "Title must be at least 3 character long and maximum 30 characters allowed.")]
        public virtual string Title { get; set; }

        // Navigation
        public virtual ParentCategoryDto ParentCategory { get; set; }
        // public virtual ICollection<Product> Products { get; set; }
    }
}
