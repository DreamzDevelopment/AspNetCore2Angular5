
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCore2Angular5.Entities.SQLite
{
    /**
     * Html content of Navigation Menu Implementation
     * Contains, different controls selector [such selector '.class-name', '#id' etc.]
     * These controls selector will be used to replace appropriate section of html content, according
     * to the MenuItem information of that particular MenuItem
     * 
        * example html: root element
        * optional section inside of square bracket '[]'
        * 
        * <ul class="u-item my-row picture-box root-item" >
        * <a class="btn root-btn" >
        * [icon html: <span class="btn-icon-left pull-left"><i class="fa fa-file-archive-o"></i>&nbsp;&nbsp;</span>] - this will be replaced with 'MenuItem' -> iconHtml
        * <span style="font-size:20px" class="span-item active">Know More</span>
        * [expansion and collapse icon: html ]
        * </a><br>
        * </ul>
        * 
        * example html: child element
        * optional section inside of square bracket '[]'
        * 
        * <li class="l-item col-md-3 col-xs-6 col-full-width child-item" >
        * <div class="img-box child-img" ></div>
        * <a class="btn btn-block child-btn" href="#" title="About Us">
        * [icon html: <span class="btn-icon-left pull-left"><i class="fa fa-file-archive-o"></i>&nbsp;&nbsp;</span>] - this will be replaced with 'MenuItem' -> iconHtml
        * <span>About Us 1</span>
        * </a>
        * </li>
     */
        public interface IMenuHtml
        {
            int Id { get; set; }
            /**
             * Title of the Html block
             */
            string Title { get; set; }
            /**
             * Root Selector Element
             */
            string Selector { get; set; }
            /**
             * Image container element, if 'img' element type, then 'src' attribute, otherwise background image
             */
            string SelectorImg { get; set; }
            /**
             * Button to include target [href] of the menu item
             */
            string SelectorBtn { get; set; }
            /**
             * Complete html content of the menu item template
             */
            string Html { get; set; }
            
        }
        public class MenuHtml : IMenuHtml
        {
            [Key]
            [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            [HiddenInput]
            public virtual int Id { get; set; }
            /**
             * Title of the Html block
             */
            [StringLength(120)]
            public virtual string Title { get; set; }
            
            /**
             * Root Selector Element
             */
            [StringLength(120)]
            public virtual string Selector { get; set; }
            /**
             * Image container element, if 'img' element type, then 'src' attribute, otherwise background image
             */
            [StringLength(120)]
            public virtual string SelectorImg { get; set; }
            /**
             * Button to include target [href] of the menu item
             */
            [StringLength(120)]
            public virtual string SelectorBtn { get; set; }
            /**
             * Complete html content of the menu item template
             */
            public virtual string Html { get; set; }
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
        public class MenuHtmlDto : IMenuHtml
        {
            public MenuHtmlDto() { }
            public MenuHtmlDto(MenuHtml menuHtml) {
                if(menuHtml != null) {
                    this.Id = menuHtml.Id;
                    this.Title = menuHtml.Title;
                    this.Selector = menuHtml.Selector;
                    this.SelectorImg = menuHtml.SelectorImg;
                    this.SelectorBtn = menuHtml.SelectorBtn;
                    this.Html = menuHtml.Html;

                    this.CreateBy = menuHtml.CreateBy;
                    this.CreateDate = menuHtml.CreateDate;
                    this.UpdateBy = menuHtml.UpdateBy;
                    this.UpdateDate = menuHtml.UpdateDate;
                }
            }
            public virtual int Id { get; set; }
            /**
             * Title of the Html block
             */
            public virtual string Title { get; set; }
            /**
             * Root Selector Element
             */
            public virtual string Selector { get; set; }
            /**
             * Image container element, if 'img' element type, then 'src' attribute, otherwise background image
             */
            public virtual string SelectorImg { get; set; }
            /**
             * Button to include target [href] of the menu item
             */
            public virtual string SelectorBtn { get; set; }
            /**
             * Complete html content of the menu item template
             */
            public virtual string Html { get; set; }
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