using System.IO;
using System;
using AspNetCore2Angular5.Data;
using AspNetCore2Angular5.Helpers;

namespace AspNetCore2Angular5.Helpers
{
    public static class FileHelper
    {
         
        
        /// <summary>
        /// Create the directory path if not exists
        /// </summary>
        /// <param name="path">the path of location: string</param>
        /// <returns>bool</returns>
        public static bool CreateFolderIfNeeded(string path)
        {
            if (Directory.Exists(path))
                return true;
            try
            {
                Directory.CreateDirectory(path);
                return true;
            }
            catch (Exception)
            {
                /*TODO: You must process this exception.*/
                return false;
            }
        }
        /// <summary>
        /// Create the file if not exists
        /// </summary>
        /// <param name="path">the path locate the file : string</param>
        /// <param name="fileName">name of the file with extension: string</param>
        /// <returns>bool</returns>
        public static bool CreateFileIfNeeded(string path, string fileName)
        {
            FileHelper.CreateFolderIfNeeded(path);
            if (File.Exists(Path.Combine(path , fileName) ) )
            {
                return true;
            }
            try
            {
                File.Create(Path.Combine(path , fileName)).Close(); // Important to close...
                return true;
            }
            catch (Exception)
            {
                /*TODO: You must process this exception.*/
                return false;
            }
        }
        /// <summary>
        /// Delete the directory path if exists
        /// </summary>
        /// <param name="path">the path of location: string</param>
        /// <returns>bool</returns>
        public static bool DeleteFolderIfExisted(string path)
        {
            if (Directory.Exists(path)){
                try
                {
                    Directory.Delete(path);
                    return true;
                }
                catch (Exception)
                {
                    /*TODO: You must process this exception.*/
                    return false;
                }
            }else{
                return true;
            }
        }
        /// <summary>
        /// Delete the file if exists
        /// </summary>
        /// <param name="path">the path locate the file : string</param>
        /// <param name="fileName">name of the file with extension: string</param>
        /// <returns>bool</returns>
        public static bool DeleteFileIfExisted(string fileFullPath)
        {
            if (File.Exists(fileFullPath))
            {
                try
                {
                    File.Delete(fileFullPath); // Important to close...
                    return true;
                }
                catch (Exception)
                {
                    /*TODO: You must process this exception.*/
                    return false;
                }
            }else{
                return true;
            }
        }
        /// <summary>
        /// Clean ups files were saved to diretory and wasn't deleted..
        /// </summary>
        /// <param name="path">the path from where files to be deleted: string</param>
        /// <param name="minsOld">minutes the files are old: int</param>
        public static void CleanUpFolder(string path, int minsOld)
        {
            try
            {
                var currentUtcNow = DateTime.UtcNow;
                //var serverPath = HttpContext. .MapPath("~/temp/");

                // Get the path for temporary directory 
                var serverPath = Path.GetFullPath(path);

                if (!Directory.Exists(serverPath)) return;
                var fileEntries = Directory.GetFiles(serverPath);
                foreach (var fileEntry in fileEntries)
                {
                    var fileCreationTime = File.GetCreationTimeUtc(fileEntry);
                    var res = currentUtcNow - fileCreationTime;
                    if (res.TotalMinutes > minsOld)
                    {
                        File.Delete(fileEntry);
                    }
                }
            }
            catch
            {
                // Deliberately empty.
            }
        }
#region Save ByteArray as File 
        /// <summary>
        /// Save Byte[] into a File
        /// </summary>
        /// <param name="dataArray">Content: byte[]</param>
        /// <param name="path">Path: string</param>
        /// <param name="fileName">FileName: string</param>
        /// <param name="mimeType">FileType: string</param>
        /// <returns>bool</returns>
        public static IJsonResult SaveByteArrayAsFileAsync(byte[] dataArray, string path, string fileName, string mimeType)
        {
            var jsonResult = new MyJsonResult() { };
            if((dataArray.Length <= 0) || string.IsNullOrWhiteSpace(path) || string.IsNullOrWhiteSpace(fileName)) {
                return jsonResult;
            }
            using(FileStream fileStream = new FileStream(Path.Combine(path , fileName ), FileMode.Create)){
                // Write the data to the file, byte by byte.
                for(int i = 0; i < dataArray.Length; i++)
                {
                    fileStream.WriteByte(dataArray[i]);
                }
                // Set the stream position to the beginning of the file.
                fileStream.Seek(0, SeekOrigin.Begin);

                // Read and verify the data.
                for(int i = 0; i < fileStream.Length; i++)
                {
                    if(dataArray[i] != fileStream.ReadByte())
                    {
                        jsonResult.Result = JsonResultFlag.Error;
                        jsonResult.Message = $"Error writing data.";
                        return jsonResult;
                    }
                }
                jsonResult.Result = JsonResultFlag.Succeeded;
                jsonResult.Message = $"The data was written to {fileStream.Name} and verified.";
            }
            return jsonResult;
        }
#endregion
        
    }
}