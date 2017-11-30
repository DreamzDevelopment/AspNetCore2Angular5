using System;
using System.Globalization;

namespace AspNetCore2Angular5.Helpers
{
    public enum MessageId
    {
        MsgLoginSucc = 7,
        MsgLoginFail = 8,
        MsgExistedUser = 9, 
        ChangeUsernameSuccess = 10,
        MsgCreateSuccess = 11,
        MsgCreateFailed = 12,
        MsgUpdateSuccess = 13,
        MsgUpdateFailed = 14,
        MsgDeleteSuccess = 15,
        MsgDeleteFailed = 16,
        MsgSavePropSuccess = 17,
        MsgSavePropFailed = 18,
        MsgExistedTitle = 19, 

        MsgUnknownErr = 20,
        MsgTryAgain = 21,
        MsgForbidden = 22,
        MsgVerifySucc = 23,
        MsgVerifyFail = 24,
        MsgRemoveChildFirst = 25,
        MsgEmailSendSucc = 30,
        MsgEmailSendFail = 31,
        // MsgEmailVerifySucc = 32,
        // MsgEmailVerifyFail = 33,
        MsgSmsSendSucc = 34,
        MsgSmsSendFail = 35,

        MsgValidInput = 41,
        MsgInvalidInput = 42,
        MsgRequestFail = 43,
        MsgRequestSucc = 44,

        MsgBKashPINWarn = 51,
        MsgUnAuthorize = 52,
        MsgAuthorize = 53,
        MsgNoContent = 54,
        MsgAddrNotFound = 55,

        MsgCartModified = 60,
    }
    public interface IMyMessage : IDisposable
    {
        
        string GetMessageText(MessageId message);

        // public static string MsgCreateSuccess { get { return SetMessageText(" Successfully created for ", " ক্রিয়েট করতে সফল হই এর জন্য ");} }
        // public static string MsgCreateFailed{ get { return SetMessageText( $"Failed to create for "," ক্রিয়েট করতে অসমর্থ হই এর জন্য ");} }
        // public static string MsgUpdateSuccess { get { return SetMessageText(" Successfully updated for ", " আপডেট করতে সফল হই এর জন্য ");} }
        // public static string MsgUpdateFailed{ get { return SetMessageText( $"Failed to update for "," আপডেট করতে অসমর্থ হই এর জন্য ");} }
        // public static string MsgDeleteSuccess { get { return SetMessageText(" Successfully Delete for ", " রিমুভ করতে সফল হই এর জন্য ");} }
        // public static string MsgDeleteFailed{ get { return SetMessageText( $"Failed to Delete for "," রিমুভ করতে অসমর্থ হই এর জন্য ");} }
       
        // public static string MsgSavePropSuccess{ get { return SetMessageText($"Succeeded to save properties for ", " এর প্রপার্টিজ সেভ করতে সফল হই" );} }
        // public static string MsgSavePropFailed{ get { return SetMessageText($"Failed to save properties for ", " এর প্রপার্টিজ সেভ করতে ব্যর্থ হই" );} }
       
        // public static string MsgExistedTitle{ get { return SetMessageText("for same title already exist!", " একই শিরনাম এর ইতোমধ্যে বিদ্যমান।");} }
        // public static string MsgUnknownErr{ get { return SetMessageText("Unknown error occurred!", "অজানা অশুদ্ধি ঘটেছে!");} }
        // public static string MsgTryAgain{ get { return SetMessageText("Please try again later.", "অনুগ্রহ করে পরে আবার চেষ্টা করুন");} }
        // public static string MsgForbidden{ get { return SetMessageText("Please don't try again, it is forbidden.", "অনুগ্রহ করে আর চেষ্টা করবেন না, ইহা প্রতিষিদ্ধ। ");} }
    }
}
