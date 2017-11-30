using System.Globalization;

namespace AspNetCore2Angular5.Helpers
{
    public class MyMessage : IMyMessage
    {
        public MyMessage() { }
        public string GetMessageText(MessageId id)
        {
            return MyMessage.GetMessageTextStatic(id);
        }

        private string SetMessageText(string message, string message_Bangla)
        {
            return MyMessage.SetMessageTextStatic(message, message_Bangla);
        }

        private static string SetMessageTextStatic(string message, string message_Bangla) {
            
            CultureInfo currentCulture = CultureInfo.CurrentCulture;
            switch (currentCulture.ToString())
            {
                case "en-US":
                    return message;
                case "bn-BD":
                    if(!(string.IsNullOrWhiteSpace(message_Bangla)) ){
                        return message_Bangla;
                    }else{
                        return message;
                    }
                default:
                    return message;
            }
        }
        public static string GetMessageTextStatic(MessageId id)
        {
            return 
                // id == MessageId.ChangeUsernameSuccess ? MyMessage.SetMessageTextStatic("Successfully change username for ", " ক্রিয়েট করতে সফল হই এর জন্য ")
                  
                  id == MessageId.MsgUnAuthorize ? MyMessage.SetMessageTextStatic("Unauthorized request failed for  ", " অননুমোদিত রিকুয়েস্ট অসমর্থ হই এর জন্য ")
                : id == MessageId.MsgAuthorize ? MyMessage.SetMessageTextStatic("Authorized request succeeded for  ", " অনুমোদিত রিকুয়েস্ট সফল হই এর জন্য ")
                
                : id == MessageId.MsgCreateSuccess ? MyMessage.SetMessageTextStatic("Successfully created for ", " ক্রিয়েট করতে সফল হই এর জন্য ")
                : id == MessageId.MsgCreateFailed ? MyMessage.SetMessageTextStatic( $"Failed to create for "," ক্রিয়েট করতে অসমর্থ হই এর জন্য ")
                : id == MessageId.MsgUpdateSuccess ? MyMessage.SetMessageTextStatic("Successfully updated for ", " আপডেট করতে সফল হই এর জন্য ")
                : id == MessageId.MsgUpdateFailed ? MyMessage.SetMessageTextStatic( $"Failed to update for "," আপডেট করতে অসমর্থ হই এর জন্য ")
                : id == MessageId.MsgDeleteSuccess ? MyMessage.SetMessageTextStatic("Successfully Delete for ", " রিমুভ করতে সফল হই এর জন্য ")
                : id == MessageId.MsgDeleteFailed ? MyMessage.SetMessageTextStatic( $"Failed to Delete for "," রিমুভ করতে অসমর্থ হই এর জন্য ")
                : id == MessageId.MsgSavePropSuccess ? MyMessage.SetMessageTextStatic( $"Succeeded to save properties for ", " এর প্রপার্টিজ সেভ করতে সফল হই" )
                : id == MessageId.MsgSavePropFailed ? MyMessage.SetMessageTextStatic( $"Failed to save properties for ", " এর প্রপার্টিজ সেভ করতে ব্যর্থ হই" )
                
                : id == MessageId.MsgRemoveChildFirst ? MyMessage.SetMessageTextStatic( $" Please, remove dependant first and then ", " অনুগ্রহ করে প্রথমে অধীন রিমুভ করুন এবং তারপর " )
                
                : id == MessageId.MsgExistedUser ? MyMessage.SetMessageTextStatic("for same name already exist! ", " একই নাম এর ইতোমধ্যে বিদ্যমান! ")
                : id == MessageId.MsgLoginFail ? MyMessage.SetMessageTextStatic("Login failed with error! ", " লগইন করতে ব্যর্থ হই! ")
                : id == MessageId.MsgLoginSucc ? MyMessage.SetMessageTextStatic("Login succeeded! ", " লগইন করতে সফল হই! ")

                : id == MessageId.MsgExistedTitle ? MyMessage.SetMessageTextStatic( "for same title already exist! ", " একই শিরনাম এর ইতোমধ্যে বিদ্যমান! ")
                : id == MessageId.MsgUnknownErr ? MyMessage.SetMessageTextStatic( "Unknown error occurred!", " অজানা অশুদ্ধি ঘটেছে! ")
                : id == MessageId.MsgTryAgain ? MyMessage.SetMessageTextStatic( "Please try again later.", " অনুগ্রহ করে পরে আবার চেষ্টা করুন ")
                : id == MessageId.MsgForbidden ? MyMessage.SetMessageTextStatic( "Please don't try again, it is forbidden.", " অনুগ্রহ করে আর চেষ্টা করবেন না, ইহা প্রতিষিদ্ধ। ")
                : id == MessageId.MsgVerifySucc ? MyMessage.SetMessageTextStatic("Succeeded to verify : ", " সত্যতা প্রতিপাদন করতে সফল হয়েছি ঃ ")
                : id == MessageId.MsgVerifyFail ? MyMessage.SetMessageTextStatic( "Failed to verify : ", " সত্যতা প্রতিপাদন করতে ব্যর্থ হই ঃ ")

                : id == MessageId.MsgEmailSendSucc ? MyMessage.SetMessageTextStatic("Succeeded to send email : ", " ইমেইল পাঠাতে সফল হয়েছি ঃ ")
                : id == MessageId.MsgEmailSendFail ? MyMessage.SetMessageTextStatic( "Failed to send email : ", " ইমেইল পাঠাতে ব্যর্থ হই ঃ ")
                // : id == MessageId.MsgEmailVerifySucc ? MyMessage.SetMessageTextStatic("Succeeded to verify email : ", " ইমেইল সত্যতা প্রতিপাদন সফল হয়েছি ঃ ")
                // : id == MessageId.MsgEmailVerifyFail ? MyMessage.SetMessageTextStatic( "Failed to verify email : ", " ইমেইল সত্যতা প্রতিপাদন ব্যর্থ হই ঃ ")   

                : id == MessageId.MsgSmsSendSucc ? MyMessage.SetMessageTextStatic("Succeeded to send SMS : ", " SMS পাঠাতে সফল হয়েছি ঃ ")
                : id == MessageId.MsgSmsSendFail ? MyMessage.SetMessageTextStatic( "Failed to send SMS : ", " SMS পাঠাতে ব্যর্থ হই ঃ ")


                : id == MessageId.MsgValidInput ? MyMessage.SetMessageTextStatic( "Valid Input! ", " ইনপুট যুক্তিসিদ্ধ ! ")
                : id == MessageId.MsgInvalidInput ? MyMessage.SetMessageTextStatic( "Invalid Input! ", " ইনপুট যুক্তিসিদ্ধ নয়! ")

                : id == MessageId.MsgBKashPINWarn ? MyMessage.SetMessageTextStatic(
                    "This is not your account PIN (which you use for making BKash Transaction). This is generated by BKash and sent to you as confirmation PIN for recipient after BKash transaction succeeded",
                                                                    " এটি আপনার অ্যাকাউন্ট পিন নয় ( যেটি আপনি বিকাশ লেনদেন এর জন্য ব্যাবহার করেন )। এটি বিকাশ উৎপন্ন করে এবং আপনাকে অনুমোদন পিন হিসাবে পাঠায়, যখন আপনার লেনদেন সফল হয়। যা আপনি প্রাপক কে প্রদান করতে পারেন। ")
                : id == MessageId.MsgRequestFail ? MyMessage.SetMessageTextStatic("Failed to complete request! ", " 'Request' সম্পন্ন করতে ব্যর্থ হই ! ")
                : id == MessageId.MsgRequestSucc ? MyMessage.SetMessageTextStatic("Succeeded to complete request! ", " 'Request' সম্পন্ন করতে সফল হই ! ")
              
                : id == MessageId.MsgNoContent ? MyMessage.SetMessageTextStatic("No content found for request! ", " 'Request' এর জন্য কোন কন্টেন্ট পাওয়া যায়নি! ")
                : id == MessageId.MsgAddrNotFound ? MyMessage.SetMessageTextStatic( $" We couldn't find your address, please check and confirm again. ", $"আমরা আপনার ঠিকানা খুঁজে পাইনি, অনুগ্রহ করে পুনরায় পরীক্ষা করে নিশ্চিত করুন। ")
               
                : id == MessageId.MsgCartModified ? MyMessage.SetMessageTextStatic( $" Your cart is updated. Please check and review your order. ", $" আপনার কার্ট পরিবর্তন হয়েছে। অনুগ্রহ করে 'Order' পুনঃ নিরীক্ষা করুন। ")
                // 
                : "";
        }

#region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects).
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~MyMessage() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        void System.IDisposable.Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }
#endregion

    }

}