


using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCore2Angular5.Entities.SQLite 
{
    public enum MenuItemType {
        Default = 0,
        PictureBox = 1,
        Gradient = 2,

    }
    // public class MenuGroup
    // {
    //     public virtual string Id { get; set; }
    //     public virtual string Title { get; set; }
    //     public virtual string IconHtml { get; set; }
    //     public virtual string IconUrl { get; set; }
    //     public virtual ICollection<MenuItem> MenuItems { get; set; }
    // }
    // public class MenuGroupDto
    // {
    //     public MenuGroupDto() { }
    //     public MenuGroupDto(MenuGroup menuGroup, bool includeItems = false) 
    //     {
    //         this.Id = menuGroup.Id;
    //         this.Title = menuGroup.Title;
    //         this.IconHtml = menuGroup.IconHtml;
    //         this.IconUrl = menuGroup.IconUrl;
    //         if(includeItems && menuGroup.MenuItems != null) {
    //             foreach (var item in menuGroup.MenuItems)
    //             {
    //                 this.MenuItems.Add(new MenuItemDto(item));
    //             }
    //         }
    //     }
    //     public virtual string Id { get; set; }
    //     public virtual string Title { get; set; }
    //     public virtual string IconHtml { get; set; }
    //     public virtual string IconUrl { get; set; }
    //     public virtual ICollection<MenuItemDto> MenuItems { get; set; }
    // }
/**
 * Menu Item, related to parent and child, while in business logic to create new MenuItem or Update,
 * Must ensure there is no Parent conflict for Parent being a Child of same item
 */
    public class MenuItem
    {
        public MenuItem() {
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [HiddenInput]
        public virtual int Id { get; set; }
        /**
         * Title of the MenuItem
         */
        [StringLength(200)]
        public virtual string Title { get; set; }
        /**
         * Description of the MenuItem
         */
        [StringLength(500)]
        public virtual string Description { get; set; }
        /**
         * Target/Href of the MenuItem
         */
        [StringLength(300)]
        
        public virtual string Target { get; set; }
        /**
         * Html content of the Icon for the MenuItem
         */
        [StringLength(500)]
        public virtual string IconHtml { get; set; }
        /**
         * Image Url of the Icon for the MenuItem
         */
        [StringLength(200)]
        public virtual string IconUrl { get; set; }
        /**
         * Image Url of the Image of the MenuItem
         */
        [StringLength(200)]
        public virtual string ImageUrl { get; set; }
        /**
         * Parent Element Id, Foreign Key relation
         */
        public virtual int? ParentId { get; set; }
        /**
         * Comma separated Ids of Child element(s)
         */
        public virtual string MenuItems { get; set; } 

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
        public virtual void AddChildElement(string childElement) {

        }
    }

    public class MenuItemDto
    {
        public MenuItemDto() { }
        public MenuItemDto(MenuItem menuItem, bool includeMenuItems = true) 
        {
            if(menuItem != null) {
                this.Id = menuItem.Id;
                this.Title = menuItem.Title;
                this.Description = menuItem.Description;
                this.Target = menuItem.Target;
                this.IconHtml = menuItem.IconHtml;
                this.IconUrl = menuItem.IconUrl;
                this.ImageUrl = menuItem.ImageUrl;
                this.ParentId = menuItem.ParentId;
                if(includeMenuItems ) {
                    this.MenuItems = menuItem.MenuItems;
                }

                this.CreateBy = menuItem.CreateBy;
                this.CreateDate = menuItem.CreateDate;
                this.UpdateBy = menuItem.UpdateBy;
                this.UpdateDate = menuItem.UpdateDate;
            }
        }
        public virtual int Id { get; set; }
        /**
         * Title of the MenuItem
         */
        public virtual string Title { get; set; }
        /**
         * Description of the MenuItem
         */
        public virtual string Description { get; set; }
        /**
         * Target/Href of the MenuItem
         */
        public virtual string Target { get; set; }
        /**
         * Html content of the Icon for the MenuItem
         */
        public virtual string IconHtml { get; set; }
        /**
         * Image Url of the Icon for the MenuItem
         */
        public virtual string IconUrl { get; set; }
        /**
         * Image Url of the Image of the MenuItem
         */
        public virtual string ImageUrl { get; set; }
        /**
         * Parent Element Id, Foreign Key relation
         */
        public virtual int? ParentId { get; set; }
        /**
         * Comma separated Ids of Child element(s)
         */
        public virtual string MenuItems { get; set; } 
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