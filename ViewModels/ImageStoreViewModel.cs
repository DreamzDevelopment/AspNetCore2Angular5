using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using AspNetCore2Angular5.Data;
using AspNetCore2Angular5.Entities;

namespace AspNetCore2Angular5.ViewModels.ImageStoreViewModels
{
    public class ImageUploadViewModel
    {
        [Column(TypeName = "image")]
        public virtual byte[] FileContent { get; set; }
        public virtual string MimeType { get; set; }
        public virtual string FilePath { get; set; }
        public virtual string FileName { get; set; }
        public virtual bool Result { get; set; }
        
    }
    public class ImageUploadModel
    {
        public virtual string StoreId { get; set; } 
        public virtual string Id { get; set; } 
        [Required]
        public virtual string Index { get; set; } 
        [Required]
        public virtual string ImageContent { get; set; } 
        public virtual string MimeType { get; set; } 
        [Required]
        public virtual string ImageFormat { get; set; } 
        public virtual string FilePath { get; set; } 
        // public virtual string HomeContent { get; set; } 
        public virtual string ReturnUrl { get; set; } = null;
    }
    public class ImageRemoveModel
    {
        /// <summary>
        /// The image is belongs to, Product, Item or Profile.
        /// </summary>
        [Required]
        public virtual string Id { get; set; }
        /// <summary>
        /// Index of the Image to be Removed.
        /// </summary>
        [Required]
        public virtual ImageIndexs Index { get; set; } 
        public virtual ImageFor ImageFor  { get; set; } = ImageFor.Non_Category;
        public virtual string FilePath { get; set; } = null; 
        public virtual bool HomeContent { get; set; } = false;
        public virtual int? StoreId { get; set; } = null;
        public virtual string ReturnUrl { get; set; } = null;
    }
    // public class ImageDto { // SF
    //     public ImageDto() {

    //     }
    //     public ImageFor ImageFor { get; set; }
    //     public virtual IEnumerable<SfProfileImageDto> ProfileImages { get; set; }
    //     public virtual IEnumerable<SfProductImageDto> ProductImages { get; set; }
    //     public virtual IEnumerable<SfItemImageDto> ItemImages { get; set; }
    // }
    public class ImageDto { 
        public ImageDto() {

        }
        public ImageFor ImageFor { get; set; }
        public virtual IEnumerable<ProfileImageDto> ProfileImages { get; set; }
        public virtual IEnumerable<ProductImageDto> ProductImages { get; set; }
        public virtual IEnumerable<ItemImageDto> ItemImages { get; set; }
    }
    public class StaticImageDto {
        public StaticImageDto() {

        }
        public string Path { get; set; }
        public ImageIndexs FileIndex { get; set; }

        [StringLength(100, ErrorMessage = "Maximum number of characters allowed is 100")]
        public string FileName { get; set; }
        [StringLength(30, ErrorMessage = "Maximum number of characters allowed is 30")]
        public string MimeType { get; set; }
        public string Url { get; set; }
        public bool ImageOnly { get; set; } = false;
        public bool Animated { get; set; } = false;
        public bool Background { get; set; } = false;
        public FileInfo FileInfo { get; set; }
        public DateTime UploadDate { get; set; }
    }
}