using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
// using AspNetCore2Angular5.Entities.Products;
using AspNetCore2Angular5.Data;

namespace AspNetCore2Angular5.Entities
{
    public class ProductImage
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
        [DataTypeAttribute(DataType.ImageUrl)]
        [DisplayAttribute(Name="Image Url")]
        [StringLengthAttribute(350, ErrorMessage= "Maximum 350 characters allowed.")]
        public string FullPathImageUrl { get; set; }

        // Logic: imgIndex and SkuId complex key

        // [ForeignKey("Product")] // This should omitted, because they re in two different context.
        public int ProductId { get; set; }
     
        [Required(ErrorMessage = "Must specify an Index for the Image.")]
        public ImageIndexs ProductImgIndex { get; set; }

        // mapping foreign key relationship
        // this is removed, because they are in two different contexts.
        // public virtual  Product Product { get; set; }
    }
    public class ProductImageDto
    {
        public ProductImageDto() {
            
        }
        public ProductImageDto(ProductImage image){
            if(image != null){
                this.ImageId = image.ImageId;
                this.UpdateBy = image.UpdateBy;
                this.UpdateDate = image.UpdateDate;
                this.UploadBy = image.UploadBy;
                this.UploadDate = image.UploadDate;

                this.MimeType = image.MimeType;
                this.FileName = image.FileName;
                this.FullPathImageUrl = image.FullPathImageUrl;

                this.ProductId = image.ProductId;
                this.ProductImgIndex = image.ProductImgIndex;
                
                // TODO: Generate image url
                this.ImageUrl = image.FullPathImageUrl;
                // $"/ImageUpload/GetImage?imageOf={this.ProductId}&index={this.ProductImgIndex}";
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
        public int ProductId { get; set; }     
        public ImageIndexs ProductImgIndex { get; set; }
        /// <summary>
        /// this url locate the Image content from DB
        /// </summary>
        public string ImageUrl { get; set;}
        /// <summary>
        /// Url to locate the Image in wwwroot/media/image/
        /// </summary>
        
        [DataTypeAttribute(DataType.ImageUrl)]
        [DisplayAttribute(Name="Image Url")]
        [StringLengthAttribute(350, ErrorMessage= "Maximum 350 characters allowed.")]
        public string FullPathImageUrl { get; set; }
    }
}
