using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using AspNetCore2Angular5.Data;

namespace AspNetCore2Angular5.Entities
{
    public class ApPerson
    {
        [Key]
        [ForeignKey("AspNetCore2Angular5User")]
        public virtual string Id { get; set; }

        [Required(ErrorMessage = "Please enter the Last Name.")]
        [Display(Name = "Last Name", Prompt = "Surname")]
        [StringLength(50, MinimumLength = 1, ErrorMessage = "Last name must be at least 2 character long and less than 50 characters.")]
        public virtual string LastName { get; set; }

        [Required(ErrorMessage = "Please enter the First Name.")]
        [Column("FirstName")]
        [Display(Name = "First Name", Prompt ="First (mid) Name")]
        [StringLength(50, MinimumLength = 1, ErrorMessage = "First and (optional)Middle name must be at least 2 character long and less than 50 characters.")]
        public virtual string FirstMidName { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Birth Date")]
        [Required(ErrorMessage = "Please enter Date of Birth.")]
        public virtual DateTime BirthDate { get; set; }

        [Display(Name = "Full Name")]
        [ScaffoldColumn(false)]
        public virtual string FullName => FirstMidName + " " + LastName;

        // AspNetCore2Angular5ing foreign key relationship
        // public virtual ICollection<ApPersonAddress> SfPeopleAddresses { get; set; }
        public virtual AspNetCore2Angular5User AspNetCore2Angular5User { get; set; }

        // public virtual ICollection<SfProfileImage> SfProfileImages { get; set; }
        public virtual ICollection<ImageProfile> ProfileImages { get; set; }

    }
    public class ApPersonDto
    {
        public ApPersonDto() { }
        public ApPersonDto(ApPerson person, bool includePeopleAddresses = false, bool includeUser = false) {
            if(person != null) {
                this.BirthDate = person.BirthDate;
                this.FirstMidName = person.FirstMidName;
                this.FullName = person.FullName;
                this.Id = person.Id;
                this.LastName = person.LastName;
                // this.ProfileImages = person.ProfileImages;
                // if(includePeopleAddresses == true && person.SfPeopleAddresses != null  && person.SfPeopleAddresses.Count > 0){
                //     this.SfPeopleAddresses = from personAddress in person.SfPeopleAddresses select new ApPersonAddressDto(personAddress);
                // }
                if(includeUser == true && person.AspNetCore2Angular5User != null){
                    this.AspNetCore2Angular5User = new AspNetCore2Angular5UserDto(person.AspNetCore2Angular5User);
                }
                // if(includeImages == true && person.SfProfileImages != null && person.SfProfileImages.Count > 0){
                //     this.SfProfileImages = from pi in person.SfProfileImages select new SfProfileImageDto(pi);
                // }
                this.ProfileImages = person.ProfileImages;
            }
        }
        public virtual string Id { get; set; }

        [Display(Name = "Last Name", Prompt = "Surname")]
        [StringLength(50, MinimumLength = 1, ErrorMessage = "Last name must be at least 2 character long and less than 50 characters.")]
        public virtual string LastName { get; set; }

        [Column("FirstName")]
        [Display(Name = "First Name", Prompt ="First (mid) Name")]
        [StringLength(50, MinimumLength = 1, ErrorMessage = "First and (optional)Middle name must be at least 2 character long and less than 50 characters.")]
        public virtual string FirstMidName { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Birth Date")]
        public virtual DateTime BirthDate { get; set; }

        [Display(Name = "Full Name")]
        public virtual string FullName { get; set; }


        // MAspNetCore2Angular5ing foreign key relationship

        // public virtual IEnumerable<ApPersonAddressDto> SfPeopleAddresses { get; set; }
        public virtual AspNetCore2Angular5UserDto AspNetCore2Angular5User { get; set; }
    //    public virtual IEnumerable<SfProfileImageDto> SfProfileImages { get; set; }
        public virtual ICollection<ImageProfile> ProfileImages { get; set; }
    }
    public partial class ImageProfile
    {
        public ImageProfile()
        {

        }
        public ImageProfile(string personId, ImageIndexs index, string url)
        {
            this.PersonId = personId;
            this.ProfileImgIndex = index;
            this.ImageUrl = url;
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [HiddenInput]
        public virtual int Id { get; set; }

        [ForeignKey("ApPerson")]
        [Display(Name = "Profile ID")]
        public virtual string PersonId { get; set; }
        [Required(ErrorMessage = "Must specify an Index for the Image.")]
        public virtual ImageIndexs ProfileImgIndex { get; set; }
        public virtual string ImageUrl { get; set; }
    }
}
