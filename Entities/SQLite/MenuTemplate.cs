

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCore2Angular5.Entities.SQLite
{
    public interface IMenuTemplate
    {
        int Id { get; set; }
        string Title { get; set; }
        string Description { get; set; }
    }
    public class MenuTemplate : IMenuTemplate
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [HiddenInput]
        public virtual int Id { get; set; }
        /**
         * Title of the Template
         */
        [StringLength(120)]
        public virtual string Title { get; set; }
        /**
         * Description of the Template
         */
        [StringLength(500)]
        public virtual string Description { get; set; }
        /**
         * Root Element, foreign Key
         */
        public virtual int RootId { get; set; }
        public virtual MenuHtml RootElement { get; set; }
        /**
         * Child Element, foreign Key
         */
        public virtual int ChildId { get; set; }
        public virtual MenuHtml ChildElement { get; set; }
#region  Create & Update information 
        [Display(Name = "Create By")]
        public string CreateBy { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}", ApplyFormatInEditMode = true)]
        [Display(Name = "Create Date")]
        public DateTime CreateDate { get; set; } = DateTime.UtcNow;

        [Display(Name = "Update By")]
        public string UpdateBy { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Update Date")]
        public DateTime? UpdateDate { get; set; } = DateTime.UtcNow;
#endregion

    }
    public class MenuTemplateDto : IMenuTemplate
    {
        public MenuTemplateDto() { }
        public MenuTemplateDto(MenuTemplate template) {
            if(template != null) {
                this.Id = template.Id;
                this.Title = template.Title;
                this.Description = template.Description;
                this.RootId = template.RootId;
                if(template.RootElement != null) {
                    this.RootElement = new MenuHtmlDto(template.RootElement);
                }
                this.ChildId = template.ChildId;
                if(template.ChildElement != null) {
                    this.ChildElement = new MenuHtmlDto(template.ChildElement);
                }

                this.CreateBy = template.CreateBy;
                this.CreateDate = template.CreateDate;
                this.UpdateBy = template.UpdateBy;
                this.UpdateDate = template.UpdateDate;
            }
        }
        
        public virtual int Id { get; set; }
        /**
         * Title of the Template
         */
        public virtual string Title { get; set; }
        /**
         * Description of the Template
         */
        public virtual string Description { get; set; }
        /**
         * Root Element, foreign Key
         */
        public virtual int RootId { get; set; }
        public virtual MenuHtmlDto RootElement { get; set; }
        /**
         * Child Element, foreign Key
         */
        public virtual int ChildId { get; set; }
        public virtual MenuHtmlDto ChildElement { get; set; }
#region  Create & Update information 
        [Display(Name = "Create By")]
        public string CreateBy { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}", ApplyFormatInEditMode = true)]
        [Display(Name = "Create Date")]
        public DateTime CreateDate { get; set; } = DateTime.UtcNow;

        [Display(Name = "Update By")]
        public string UpdateBy { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Update Date")]
        public DateTime? UpdateDate { get; set; } = DateTime.UtcNow;
#endregion
    }
}
