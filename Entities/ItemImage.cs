using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
// using AspNetCore2Angular5.Entities.Products;
using AspNetCore2Angular5.Data;
namespace AspNetCore2Angular5.Entities
{
   
    public class ItemImage
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ImageId { get; set; }

#region  Create & Update information 
        [Display(Name = "Upload By")]
        public string UploadBy { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}", ApplyFormatInEditMode = true)]
        [Display(Name = "Upload Date")]
        public DateTime UploadDate { get; set; } = DateTime.UtcNow;

        [Display(Name = "Update By")]
        public string UpdateBy { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Update Date")]
        public DateTime? UpdateDate { get; set; } = DateTime.UtcNow;
#endregion

        [Column(TypeName = "image")]
        public byte[] FileContent { get; set; }
        [StringLengthAttribute(50, ErrorMessage= "Maximum 50 characters allowed.")]
        public string MimeType { get; set; }
        [StringLengthAttribute(300, ErrorMessage= "Maximum 300 characters allowed.")]
        public string FileName { get; set; }
        /// <summary>
        /// Url to locate the Image in wwwroot/media/image/
        /// </summary>
        /// <returns></returns>
        [DataTypeAttribute(DataType.ImageUrl)]
        [DisplayAttribute(Name="Image Url")]
        [StringLengthAttribute(350, ErrorMessage= "Maximum 350 characters allowed.")]
        public string FullPathImageUrl { get; set; }

        // Logic: imgIndex and SkuId complex key

        // [ForeignKey("Item")] // this is removed, because they are in two different contexts.
        public string SkuId { get; set; }
     
        [Required(ErrorMessage = "Must specify an Index for the Image.")]
        public ImageIndexs ItemImgIndex { get; set; }

        // mapping foreign key relationship
        // this is removed, because they are in two different contexts.
        // public virtual  Item Item { get; set; }
    }
    public class ItemImageDto
    {
        public ItemImageDto() {
            
        }
        public ItemImageDto(ItemImage sfImage){
            if(sfImage != null){
                this.ImageId = sfImage.ImageId;
                this.UpdateBy = sfImage.UpdateBy;
                this.UpdateDate = sfImage.UpdateDate;
                this.UploadBy = sfImage.UploadBy;
                this.UploadDate = sfImage.UploadDate;

                this.MimeType = sfImage.MimeType;
                this.FileName = sfImage.FileName;
                this.FullPathImageUrl = sfImage.FullPathImageUrl;
                
                // Logic: imgIndex and SkuId complex key
                this.SkuId = sfImage.SkuId;        
                this.ItemImgIndex = sfImage.ItemImgIndex;
                // TODO: Generate image url
                this.ImageUrl = sfImage.FullPathImageUrl;
                // $"/ImageUpload/GetImage?imageOf={this.SkuId}&index={this.ItemImgIndex}";
            }
        }
        public int ImageId { get; set; }
#region  Create & Update information 
        [Display(Name = "Upload By")]
        public string UploadBy { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}", ApplyFormatInEditMode = true)]
        [Display(Name = "Upload Date")]
        public DateTime UploadDate { get; set; } = DateTime.UtcNow;

        [Display(Name = "Update By")]
        public string UpdateBy { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Update Date")]
        public DateTime? UpdateDate { get; set; } = DateTime.UtcNow;
#endregion
        public string MimeType { get; set; }
        public string FileName { get; set; }
        // Logic: imgIndex and SkuId complex key
        public string SkuId { get; set; }
        public ImageIndexs ItemImgIndex { get; set; }
        /// <summary>
        /// this url locate the Image content from DB
        /// </summary>
        /// <returns></returns>
        public string ImageUrl { get; set; }
        /// <summary>
        /// Url to locate the Image in wwwroot/media/image/
        /// </summary>
        /// <returns></returns>
        [DataTypeAttribute(DataType.ImageUrl)]
        [DisplayAttribute(Name="Image Url")]
        [StringLengthAttribute(350, ErrorMessage= "Maximum 350 characters allowed.")]
        public string FullPathImageUrl { get; set; }
    }
}
