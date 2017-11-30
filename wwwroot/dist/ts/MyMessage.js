"use strict";
var MessageType;
(function (MessageType) {
    MessageType[MessageType["info"] = 0] = "info";
    MessageType[MessageType["warn"] = 1] = "warn";
    MessageType[MessageType["danger"] = 2] = "danger";
    MessageType[MessageType["important"] = 3] = "important";
    MessageType[MessageType["very_important"] = 4] = "very_important";
    MessageType[MessageType["urgent"] = 5] = "urgent";
    MessageType[MessageType["extreme"] = 6] = "extreme";
    MessageType[MessageType["top_priority"] = 7] = "top_priority";
})(MessageType || (MessageType = {}));
var MessageId;
(function (MessageId) {
    MessageId[MessageId["msgUnAuthUser"] = 9] = "msgUnAuthUser";
    MessageId[MessageId["msgSelItemSize"] = 10] = "msgSelItemSize";
    MessageId[MessageId["msgConfirmDelete"] = 11] = "msgConfirmDelete";
    MessageId[MessageId["msgExistItemId"] = 12] = "msgExistItemId";
    MessageId[MessageId["msgServPathReq"] = 13] = "msgServPathReq";
    MessageId[MessageId["msgSelPathReq"] = 14] = "msgSelPathReq";
    MessageId[MessageId["msgSelListEmpty"] = 15] = "msgSelListEmpty";
    MessageId[MessageId["msgInvalidInput"] = 16] = "msgInvalidInput";
    MessageId[MessageId["msgInputMinErr"] = 17] = "msgInputMinErr";
    MessageId[MessageId["msgInputMaxErr"] = 18] = "msgInputMaxErr";
    MessageId[MessageId["msgReqInputErr"] = 19] = "msgReqInputErr";
    MessageId[MessageId["msgSkuIdReq"] = 20] = "msgSkuIdReq";
    MessageId[MessageId["msgNoChangeDetect"] = 21] = "msgNoChangeDetect";
    MessageId[MessageId["msgTryAgain"] = 22] = "msgTryAgain";
    MessageId[MessageId["msgErrorUnknown"] = 23] = "msgErrorUnknown";
    MessageId[MessageId["msgNoSourceFound"] = 24] = "msgNoSourceFound";
    MessageId[MessageId["msgSuccessReq"] = 25] = "msgSuccessReq";
    MessageId[MessageId["msgFailedReq"] = 26] = "msgFailedReq";
    MessageId[MessageId["msgSelTransLang"] = 27] = "msgSelTransLang";
    MessageId[MessageId["msgTransLangInvalid"] = 28] = "msgTransLangInvalid";
    MessageId[MessageId["msgQryStrInvalid"] = 29] = "msgQryStrInvalid";
    MessageId[MessageId["msgRemoveChildFirst"] = 30] = "msgRemoveChildFirst";
    MessageId[MessageId["msgExpiredOrder"] = 31] = "msgExpiredOrder";
    MessageId[MessageId["msgNoPreview"] = 32] = "msgNoPreview";
    MessageId[MessageId["msgErrorNotice"] = 33] = "msgErrorNotice";
    MessageId[MessageId["msgCreateFail"] = 40] = "msgCreateFail";
    MessageId[MessageId["msgCreateSucc"] = 41] = "msgCreateSucc";
    MessageId[MessageId["msgUpdateFail"] = 42] = "msgUpdateFail";
    MessageId[MessageId["msgUpdateSucc"] = 43] = "msgUpdateSucc";
    MessageId[MessageId["msgDeleteFail"] = 44] = "msgDeleteFail";
    MessageId[MessageId["msgDeleteSucc"] = 45] = "msgDeleteSucc";
    MessageId[MessageId["msgNothingFound"] = 50] = "msgNothingFound";
    MessageId[MessageId["msgResourceKeyReq"] = 61] = "msgResourceKeyReq";
    MessageId[MessageId["msgForceAttempt"] = 62] = "msgForceAttempt";
})(MessageId || (MessageId = {}));
var MyMessage = (function () {
    function MyMessage() {
    }
    MyMessage.GetMessageText = function (id) {
        return id == MessageId.msgUnAuthUser ? MyMessage.SetMessageText(" User is Unauthorized or Undefined ", " ইউজার হয় অনুমতি প্রাপ্ত নয় অথবা অনির্ণীত ")
            : id == MessageId.msgReqInputErr ? MyMessage.SetMessageText(" Required input(s) missing! : ", " আবশ্যক ইনপুট সমূহ পাইনি! ঃ ")
                : id == MessageId.msgInvalidInput ? MyMessage.SetMessageText(" Invalid input! : ", " ইনপুট যুক্তিসিদ্ধ নয়! ঃ ")
                    : id == MessageId.msgInputMinErr ? MyMessage.SetMessageText(" Minimum value is : ", " সর্বনিম্ন মান হচ্ছে ঃ ")
                        : id == MessageId.msgInputMaxErr ? MyMessage.SetMessageText(" Maximum value is : ", " সর্বচ্চ মান হচ্ছে ঃ ")
                            : id == MessageId.msgNoChangeDetect ? MyMessage.SetMessageText(" No change detected! ", " পরিবর্তন পরিলক্ষিত হয়নি! ")
                                : id == MessageId.msgConfirmDelete ? MyMessage.SetMessageText(" Are you certain to remove this? ", "আপনি কি নিশ্চিত যে এটি রিমুভ করবেন?")
                                    : id == MessageId.msgExistItemId ? MyMessage.SetMessageText(" An item existed with same ID! ", "একই আইডি এর একটি আইটেম বিদ্যমান!")
                                        : id == MessageId.msgServPathReq ? MyMessage.SetMessageText(' Server path is required! ', 'সার্ভার পাথ আবশ্যক।')
                                            : id == MessageId.msgSelPathReq ? MyMessage.SetMessageText(' Select path value to be removed! ', 'পাথ মান টি রিমুভ এর জন্য নির্বাচন করুন।')
                                                : id == MessageId.msgSelListEmpty ? MyMessage.SetMessageText('Selection list is empty!', 'নির্বাচিত তালিকা খালি!')
                                                    : id == MessageId.msgRemoveChildFirst ? MyMessage.SetMessageText(' Please, remove dependant first and then ', ' অনুগ্রহ করে প্রথমে অধীন রিমুভ করুন এবং তারপর ')
                                                        : id == MessageId.msgSelItemSize ? MyMessage.SetMessageText('Please, select an item and size.!', 'অনুগ্রহ করে আইটেম এবং সাইজ নির্বাচিত করুন! ')
                                                            : id == MessageId.msgSelTransLang ? MyMessage.SetMessageText(' Select a translate language first! ', ' প্রথমে একটি অনুবাদ ভাষা নির্বাচিত করুন! ')
                                                                : id == MessageId.msgTransLangInvalid ? MyMessage.SetMessageText('Translate to language is not appropriate!', 'যে ভাষায় অনুবাদ করা হবে সেটি যথাযথ নয়!')
                                                                    : id == MessageId.msgQryStrInvalid ? MyMessage.SetMessageText('Query string is not valid!', 'অনুসন্ধান স্ট্রিং যুক্তিসিদ্ধ নয়!')
                                                                        : id == MessageId.msgTryAgain ? MyMessage.SetMessageText('. Please try again.', '. আবার চেষ্টা করুন। ')
                                                                            : id == MessageId.msgErrorUnknown ? MyMessage.SetMessageText(" Unknown error occurred ", " অজানা অশুদ্ধতা রয়েছে ")
                                                                                : id == MessageId.msgNoSourceFound ? MyMessage.SetMessageText(" No sources found for file operation! ", " ফাইল অপারেশান এর জন্য কোন সোর্স পাইনি! ")
                                                                                    : id == MessageId.msgExpiredOrder ? MyMessage.SetMessageText(" Following order id: expired. An unpaid order history recorded for you. ", "ঊল্লেখিত অর্ডার আইডি: মেয়াদোত্তীর্ণ হয়েছে। আপনার জন্যে একটি অপরিশোধিত অর্ডার হিস্ট্রি রেকর্ড করা হয়েছে।")
                                                                                        : id == MessageId.msgNoPreview ? MyMessage.SetMessageText(" Nothing to Preview ", " প্রিভিউ এর মত কিছু নেই ")
                                                                                            : id == MessageId.msgErrorNotice ? MyMessage.SetMessageText("Following error(s) occurred: ", " উল্লেখিত অশুদ্ধতা ঘটেছেঃ ")
                                                                                                : id == MessageId.msgSuccessReq ? MyMessage.SetMessageText(" Successfully completed the request ", " রিকুয়েস্ট সাফল্যের সহিত সম্পন্ন হয়েছে ")
                                                                                                    : id == MessageId.msgFailedReq ? MyMessage.SetMessageText(" Failed to completed the request ", " রিকুয়েস্ট সম্পন্ন করতে ব্যর্থ হই ")
                                                                                                        : id == MessageId.msgSkuIdReq ? MyMessage.SetMessageText(" SKU id required ", " SKU আইডি আবশ্যক ")
                                                                                                            : id == MessageId.msgCreateSucc ? MyMessage.SetMessageText(" Successfully created for ", " ক্রিয়েট করতে সফল হই এর জন্য ")
                                                                                                                : id == MessageId.msgCreateFail ? MyMessage.SetMessageText(" Failed to create for ", " ক্রিয়েট করতে অসমর্থ হই এর জন্য ")
                                                                                                                    : id == MessageId.msgUpdateFail ? MyMessage.SetMessageText(" Failed to update for ", " আপডেট করতে অসমর্থ হই এর জন্য ")
                                                                                                                        : id == MessageId.msgUpdateSucc ? MyMessage.SetMessageText(" Successfully updated for ", " আপডেট করতে সফল হই এর জন্য ")
                                                                                                                            : id == MessageId.msgDeleteFail ? MyMessage.SetMessageText(" Failed to delete for ", " রিমুভ করতে অসমর্থ হই এর জন্য ")
                                                                                                                                : id == MessageId.msgDeleteSucc ? MyMessage.SetMessageText(" Successfully deleted for ", " রিমুভ করতে সফল হই এর জন্য ")
                                                                                                                                    : id == MessageId.msgNothingFound ? MyMessage.SetMessageText(" Nothing found for query ", " অনুসন্ধান এর জন্য কিছুই পাইনি ")
                                                                                                                                        : id == MessageId.msgResourceKeyReq ? MyMessage.SetMessageText(' Resource Key is required! ', ' রিসোর্স কী আবশ্যক।')
                                                                                                                                            : id == MessageId.msgForceAttempt ? MyMessage.SetMessageText(' Try to force to complete the task? ', ' কঠিন প্রচেষ্টায় অর্পিত কর্মভার সম্পন্ন করুন? ')
                                                                                                                                                : "";
    };
    MyMessage.SetMessageText = function (msg, transMsg) {
        switch (MyMessage.Locale) {
            case 'en-US':
                return msg;
            case 'bn-BD':
                if (transMsg) {
                    return transMsg;
                }
                else {
                    return msg;
                }
            default:
                return msg;
        }
    };
    MyMessage.MessageSection = function (msg, _type, _auto, _notify, _delay, _live) {
        var _index = MyMessage.$MessageBox.length || 0;
        var $messageClose = $('<a class="btn-dismiss" onclick="MyMessage.DismissMessage(this,' + _index + ')"><i style="width: 25px; height: 25px;" class="btn-img btn-close"></i></a>');
        MyMessage.$MessageBox[_index] = $('<div class="panel-footer zoom-in"><span class="message-type"><i style="width: 25px; height: 25px;" class="fa ' + MyMessage.GetMessageType(_type) + '"></i></span></div>');
        MyMessage.$Message[_index] = $('<div></div>');
        MyMessage.$MessageBox[_index].append(MyMessage.$Message[_index]).append($messageClose);
        MyMessage.$Message[_index].append('<span class="message-text text-success">' + msg + '</span>');
        MyMessage.$MessageSection.css({ 'color': 'red' }).append(MyMessage.$MessageBox[_index ? _index : 0]);
        if (_auto && !_live) {
            MyMessage.AutoDismiss(MyMessage.$Message[_index], _notify, _delay, _index);
        }
        if (_live) {
            MyMessage.TextAnimation(_index);
        }
    };
    MyMessage.GetMessageType = function (_type) {
        switch (_type) {
            case MessageType.top_priority:
                return 'fa-top-priority';
            case MessageType.extreme:
                return 'fa-extreme';
            case MessageType.urgent:
                return 'fa-urgent';
            case MessageType.very_important:
                return 'fa-very-important';
            case MessageType.important:
                return 'fa-important';
            case MessageType.danger:
                return 'fa-danger';
            case MessageType.warn:
                return 'fa-warning';
            case MessageType.info:
            default:
                return 'fa-info';
        }
    };
    MyMessage.AutoDismiss = function (obj, _notify, _delay, _index) {
        var $message1 = $(obj);
        var _html = $message1.html() + '&nbsp;<span class="text-warning"><i class="fa fa-warning"></i>&nbsp;' + (_notify || 'Please, keep note!...') + '</span>';
        var _i = _delay || 60;
        if (_i <= 500) {
            var counter_1 = setInterval(function (event) {
                $message1.html(_html + --_i);
            }, 1000);
            var countForCodeShown_1 = setTimeout(function (event) {
                MyMessage.DismissMessage($message1, _index);
                clearInterval(counter_1);
                clearTimeout(countForCodeShown_1);
            }, _i * 1000);
        }
        else {
            $message1.html(_html);
        }
    };
    MyMessage.DismissMessage = function (obj, _index) {
        var $this = $(obj);
        $('.message-section.live-message').removeClass('live-message');
        $this.parent().removeClass('zoom-in').addClass('zoom-out');
        var _timer1 = setTimeout(function (event) {
            $this.parent().remove();
            clearInterval(MyMessage.$LiveTimer[_index ? _index : 0]);
            clearInterval(MyMessage.$LiveTimer[_index ? _index + 1 : 0]);
            clearTimeout(_timer1);
        }, 1000);
    };
    MyMessage.LiveMessage = function (index) {
        var $liveObj = MyMessage.$MessageBox[index].find('span.message-text');
        var _direction = 'right';
        $liveObj.parent().parent().parent().addClass('live-message');
        var _margin = 0;
        MyMessage.$LiveTimer[index] = setInterval(function (event) {
            _margin = parseFloat($liveObj.css('margin-left').split('p')[0]);
            switch (_direction) {
                case 'right':
                    $liveObj.css({ 'margin-left': '+=1px' });
                    if (!(($liveObj.parent().parent().parent().width() || 0) > _margin)) {
                        _direction = 'left';
                    }
                    break;
                case 'left':
                    $liveObj.css({ 'margin-left': '-=1px' });
                    if (_margin < 0) {
                        _direction = 'right';
                    }
                    break;
                default:
                    break;
            }
        }, 30);
    };
    MyMessage.TextAnimation = function (index) {
        var $liveObj = MyMessage.$MessageBox[index].find('span.message-text');
        var _direction = 'right';
        var _index = 0;
        var _textChar = Array.from($liveObj.text());
        var _activeText = [];
        var $span = $('<i class="letter zoom-out"></i>');
        var _interval = 100;
        $liveObj.html('');
        for (var i = 0; i < _textChar.length; i++) {
            $liveObj.append($('<i class="letter zoom-out">' + _textChar[i] + '</i>'));
        }
        $liveObj.append('<i class="fa light fa-pencil fa-shake zoom-out"></i>');
        var _ifNew = true;
        var _break = 5;
        var _ifBreak = false;
        var _objArray = Array.from($liveObj.find('i.letter'));
        var _i = 0;
        var _offset = { top: 0, left: 0 };
        var _duration = 0;
        var _eoa = false;
        MyMessage.$LiveTimer[index] = setInterval(function (event) {
            if (_ifBreak) {
                if (_i >= (_objArray.length - 1)) {
                    _break = 0;
                    _ifBreak = false;
                }
                else {
                    if (!_eoa) {
                        _eoa = true;
                        var _offset1 = $(_objArray[_i]).offset();
                        $liveObj.parent().find('i.light.fa-eraser').animate({
                            left: _offset1 && _offset1.left + (_offset.left * 2),
                            top: ((_offset1 && _offset1.top || 0) - _offset.top) + 8,
                        }, _duration * 90, function () {
                            _i += _duration;
                            _eoa = false;
                        });
                    }
                }
            }
            if (_ifNew) {
                $liveObj.parent().find('i.light.fa-pencil').removeClass('zoom-out').addClass('zoom-in');
                $liveObj.find('i.light.fa-pencil').animate({
                    'margin-left': (-($liveObj.width() || 0)) + 'px'
                }, _break * 100, function () {
                    _break = 0;
                });
                _ifNew = false;
            }
            if (_break <= 0) {
                switch (_direction) {
                    case 'right':
                        $liveObj.find('i.letter.zoom-out').first().removeClass('zoom-out').addClass('zoom-in');
                        _index += 1;
                        if (_index >= _textChar.length) {
                            $liveObj.find('i.light.fa-pencil').removeClass('zoom-in').addClass('zoom-out');
                            $liveObj.prepend('<i class="fa light fa-eraser"></i>');
                            _ifBreak = true;
                            _break = 50;
                            _index = _textChar.length - 1;
                            _direction = 'left';
                            _offset = $liveObj.parent().find('i.light.fa-eraser').offset() || { top: 0, left: 0 };
                            _duration = parseInt(((_break * 100) / (_objArray.length > 0 ? _objArray.length : 1)).toString());
                            _i = _duration;
                        }
                        break;
                    case 'left':
                        $liveObj.find('i.letter.zoom-in').last().removeClass('zoom-in').addClass('zoom-out');
                        var _offset1 = $liveObj.find('i.letter.zoom-out').first().offset();
                        var _offset2 = $liveObj.parent().find('i.light.fa-eraser').offset();
                        $liveObj.parent().find('i.light.fa-eraser').animate({
                            left: _offset1 && _offset1.left,
                            top: ((_offset1 && _offset1.top || 0) - (_offset2 && _offset2.top || 0)) + 8,
                        }, 80, function () {
                        });
                        _index -= 1;
                        if (_index < 0) {
                            $liveObj.parent().find('i.light.fa-eraser').remove();
                            _ifNew = true;
                            _break = 5;
                            _index = 0;
                            _direction = 'right';
                        }
                        break;
                    default:
                        break;
                }
            }
        }, _interval, _interval);
    };
    MyMessage.$MessageSection = $('.message-section');
    MyMessage.$MessageBox = [];
    MyMessage.$Message = [];
    MyMessage.$LiveTimer = [];
    MyMessage.Locale = $('#selectLanguage select').val();
    return MyMessage;
}());
