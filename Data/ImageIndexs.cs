namespace AspNetCore2Angular5.Data
{
    public enum ImageFor {
        Profile_Image = 1,
        Product_Image = 2,
        Item_Image = 3,
        Banner_Image = 4,
        Panel_Image = 5,
        ProductDesc_Image = 6,
        Non_Category = 0
    }
    public enum ImageIndexs {

        // Ajax call width and height (_, X)
        // Ajax call Image Store type  (Profile)
        // Ajax call Image Store ViewPort  (Login 'circle')
        Profile_220X300 = 1,
        ProfileLogin_120X120 = 2,
        // Ajax call width and height (_, X)
        // Ajax call Image Store type  (Product)
        // Ajax call Image Store ViewPort  ('')
    
        Product1_360X420 = 3, // For Product only
        Product2_360X420 = 4,
        // Ajax call width and height (_, X)
        // Ajax call Image Store type  (Item)
        // Ajax call Image Store ViewPort  ('')
        Item1_1024X620 = 5, /* For Item */
        Item2_1024X620 = 6,
        Item3_1024X620 = 7,
        Item4_1024X620 = 8,
        Item5_1024X620 = 9,
        Item6_1024X620 = 10,
        Item7_1024X620 = 11,
        Item8_1024X620 = 12,
        Item0_102X120 = 13,

        // Banner Images
        // Ajax call width and height (_, X)
        // Ajax call Image Store type  (Banner)
        // Ajax call Image Store ViewPort  ('')
        Banner1_1920X1080 = 14,
        Banner2_1920X1080 = 15,
        Banner3_1920X1080 = 16,
        Banner4_1920X1080 = 17,
        // panel images
        // Ajax call width and height (_, X)
        // Ajax call Image Store type  (Panel)
        // Ajax call Image Store ViewPort  ('')
        Panel11_300X300 = 18,
        Panel12_300X300 = 19,
        Panel13_300X300 = 20,
        Panel14_300X300 = 21,
        Panel21_300X300 = 22,
        Panel22_300X300 = 23,
        Panel23_300X300 = 24,
        Panel24_300X300 = 25,
        Panel31_300X300 = 26,
        Panel32_300X300 = 27,
        Panel33_300X300 = 28,
        Panel34_300X300 = 29,
        Panel41_300X300 = 30,
        Panel42_300X300 = 31,
        Panel43_300X300 = 32,
        Panel44_300X300 = 33,
        ProductDesc1_512X310 = 34,
        ProductDesc2_512X310 = 35,
        ProductDesc3_512X310 = 36,
        ProductDesc4_512X310 = 37,
        ProductDesc5_1920X1080 = 38,
        ProductDesc6_1920X1080 = 39,
        ProductDesc7_1920X1080 = 40,
        ProductDesc8_1920X1080 = 41,

        // Media Image File

        MediaImage_autoXauto = 50,
        
    }
    public static class ImageIndexsType
    {
        public static bool IsProfileImage(this ImageIndexs imageIndex)
        {
            switch (imageIndex)
            {
                case ImageIndexs.Profile_220X300:
                case ImageIndexs.ProfileLogin_120X120:
                return true;
                default:
                return false;
            }
        }
        public static bool IsProductImage(this ImageIndexs imageIndex)
        {
            switch (imageIndex)
            {
                case ImageIndexs.Product1_360X420:
                case ImageIndexs.Product2_360X420:
                return true;
                default:
                return false;
            }
        }
        public static bool IsProductDescImage(this ImageIndexs imageIndex)
        {
            switch (imageIndex)
            {
                case ImageIndexs.ProductDesc1_512X310:
                case ImageIndexs.ProductDesc2_512X310:
                case ImageIndexs.ProductDesc3_512X310:
                case ImageIndexs.ProductDesc4_512X310:
                case ImageIndexs.ProductDesc5_1920X1080:
                case ImageIndexs.ProductDesc6_1920X1080:
                case ImageIndexs.ProductDesc7_1920X1080:
                case ImageIndexs.ProductDesc8_1920X1080:
                return true;
                default:
                return false;
            }
        }
        public static bool IsItemImage(this ImageIndexs imageIndex)
        {
            switch (imageIndex)
            {
                case ImageIndexs.Item1_1024X620:
                case ImageIndexs.Item2_1024X620:
                case ImageIndexs.Item3_1024X620:
                case ImageIndexs.Item4_1024X620:
                case ImageIndexs.Item5_1024X620:
                case ImageIndexs.Item6_1024X620:
                case ImageIndexs.Item7_1024X620:
                case ImageIndexs.Item8_1024X620:
                case ImageIndexs.Item0_102X120:
                return true;
                default:
                return false;
            }
        }
        public static bool IsBannerImage(this ImageIndexs imageIndex)
        {
            switch (imageIndex)
            {
                case ImageIndexs.Banner1_1920X1080:
                case ImageIndexs.Banner2_1920X1080:
                case ImageIndexs.Banner3_1920X1080:
                case ImageIndexs.Banner4_1920X1080:
                return true;
                default:
                return false;
            }
        }
        public static bool IsMediaImage(this ImageIndexs imageIndex)
        {
            if(imageIndex == ImageIndexs.MediaImage_autoXauto)
            {
                return true;
            }
            else if(imageIndex.ToString().IndexOf("MediaImage_") >= 0) {
                return true;
            }else{
                return false;
            }
        }
    }
}