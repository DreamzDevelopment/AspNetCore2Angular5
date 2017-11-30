using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using AspNetCore2Angular5.ViewModels.ImageStoreViewModels;
using AspNetCore2Angular5.Data;
using static System.Net.Mime.MediaTypeNames;

namespace AspNetCore2Angular5.ViewComponents
{
    /// <summary>
    /// Static Image View Component 
    /// </summary>
    [ViewComponentAttribute(Name = "StaticImage")]
    public class StaticImageComponent : ViewComponent
    {
        // TODO: Implement ItemImage Component
        public StaticImageComponent() {

        }
        public async Task<IViewComponentResult> InvokeAsync(string path, ImageIndexs fileIndex, string mimeType = Image.Jpeg, string imageOnly = "false", string animated = "false", string background = "false") 
        {
            var viewName = "Default";
            var fileName = fileIndex.ToString().Split('_')[0].ToLower();
            var staticImg = new StaticImageDto() { 
                Path = path, 
                FileIndex = fileIndex, 
                FileName = fileName, 
                MimeType = mimeType, 
                ImageOnly = bool.Parse(imageOnly), 
                Animated = bool.Parse(animated) ,
                Background = bool.Parse(background) , 
            };
            var extension = mimeType.Split('/')[1];
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), Path.Combine(path, fileName)) + ".";
            var fileExist = File.Exists(filePath + extension);
            if(fileExist){
                filePath = filePath + extension;
            }else{
                extension = "jpg";
                fileExist = File.Exists(filePath + extension);
                if(fileExist){
                    filePath = filePath + extension;
                }else{
                    mimeType = Image.Gif;
                    extension = mimeType.Split('/')[1];
                    fileExist = File.Exists(filePath + extension);
                    if(fileExist){
                        filePath = filePath + extension;
                    }else{
                        mimeType = Image.Tiff;
                        extension = mimeType.Split('/')[1];
                        fileExist = File.Exists(filePath + extension);
                        if(fileExist){
                            filePath = filePath + extension;
                        }else{
                            extension = "png";
                            fileExist = File.Exists(filePath + extension);
                            if(fileExist){
                                filePath = filePath + extension;
                            }else{
                                extension = "svg";
                                fileExist = File.Exists(filePath + extension);
                                if(fileExist){
                                    filePath = filePath + extension;
                                }
                            }
                        }
                    }
                }
            }
            if(fileExist){
                viewName = "StaticImage";
                FileInfo fileInfo =  new FileInfo(filePath);
                staticImg.FileInfo = fileInfo;
                staticImg.Url = filePath.Substring(filePath.IndexOf("wwwroot") + 7); // faster, as of different C# researchers 
                // staticImg.Url = fileInfo.DirectoryName.Substring(fileInfo.DirectoryName.IndexOf("wwwroot") + 7) + fileInfo.Name;
                staticImg.MimeType = mimeType;
                staticImg.Path = filePath;
                staticImg.UploadDate = File.GetLastWriteTime(filePath);
            }
            return View(viewName, staticImg);
        }
    }
}