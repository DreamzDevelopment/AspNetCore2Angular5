"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MyValidator = (function () {
    function MyValidator() {
    }
    MyValidator.prototype.FormValidator = function (form, callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, MyValidator.FormValidator(form, callBackFunc)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MyValidator.prototype.UserNameValidator = function (value, callBackFunc, elm) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, MyValidator.UserNameValidator(value, callBackFunc, elm)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MyValidator.prototype.EmailValidator = function (value, callBackFunc, elm) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, MyValidator.EmailValidator(value, callBackFunc, elm)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MyValidator.prototype.PhoneValidator = function (value, callBackFunc, elm) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, MyValidator.PhoneValidator(value, callBackFunc, elm)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MyValidator.prototype.ValidateReqMinMax = function (transAmount, msg, callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, MyValidator.ValidateReqMinMax(transAmount, msg, callBackFunc)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MyValidator.prototype.ValidateReqminLengthmaxLength = function (transElem, msg, callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, MyValidator.ValidateReqminLengthmaxLength(transElem, msg, callBackFunc)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MyValidator.prototype.NumKeyOnly = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, MyValidator.NumKeyOnly(event)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MyValidator.prototype.NumDecimalOnly = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, MyValidator.NumDecimalOnly(event)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MyValidator.prototype.AlphaNumAndNumOnly = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, MyValidator.AlphaNumAndNumOnly(event)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MyValidator.prototype.NoSpaceAllowed = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, MyValidator.NoSpaceAllowed(event)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MyValidator.FormValidator = function (form, callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            var $form, response, errorControls, $container;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $form = $(form);
                        response = { result: false, message: '' };
                        errorControls = $form.find('.input-validation-error');
                        if (!(errorControls.length > 0)) return [3, 2];
                        response.result = false;
                        response.message = MyMessage.GetMessageText(MessageId.msgInvalidInput);
                        errorControls.first().focusin();
                        $container = $form.parents('.modal');
                        MyAnimation.ScrollTo(errorControls.first(), $form.find('.submit'), $form);
                        if ($container && $container.length > 0) {
                            errorControls.first().focus();
                        }
                        else {
                        }
                        return [4, callBackFunc(response)];
                    case 1:
                        _a.sent();
                        return [3, 4];
                    case 2:
                        response.result = true;
                        return [4, callBackFunc(response)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    MyValidator.UserNameValidator = function (value, callBackFunc, elm) {
        return __awaiter(this, void 0, void 0, function () {
            var validUserName;
            return __generator(this, function (_a) {
                validUserName = value.replace(/^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/, '0');
                if (validUserName && validUserName.length == 1) {
                    $(elm).removeClass('input-validation-error').addClass('valid');
                    $(elm).next('span').removeClass('field-validation-error').addClass('field-validation-valid').html('');
                    callBackFunc(true);
                }
                else {
                    $(elm).removeClass('valid').addClass('input-validation-error');
                    $(elm).next('span').removeClass('field-validation-valid').addClass('field-validation-error')
                        .html('<span id="' + $(elm).attr('id') + '-error">Username is not valid!</span>');
                    callBackFunc(false);
                }
                return [2];
            });
        });
    };
    MyValidator.EmailValidator = function (value, callBackFunc, elm) {
        return __awaiter(this, void 0, void 0, function () {
            var validEmail;
            return __generator(this, function (_a) {
                validEmail = value.replace(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/, '0');
                if (validEmail && validEmail.length == 1) {
                    $(elm).removeClass('input-validation-error').addClass('valid');
                    $(elm).next('span').removeClass('field-validation-error').addClass('field-validation-valid').html('');
                    callBackFunc(true);
                }
                else {
                    $(elm).removeClass('valid').addClass('input-validation-error');
                    $(elm).next('span').removeClass('field-validation-valid').addClass('field-validation-error')
                        .html('<span id="' + $(elm).attr('id') + '-error">Email is not valid!</span>');
                    callBackFunc(false);
                }
                return [2];
            });
        });
    };
    MyValidator.PhoneValidator = function (value, callBackFunc, elm) {
        return __awaiter(this, void 0, void 0, function () {
            var validPhone;
            return __generator(this, function (_a) {
                validPhone = value.replace(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, '0');
                if (validPhone && validPhone.length == 1) {
                    $(elm).removeClass('input-validation-error').addClass('valid');
                    $(elm).next('span').removeClass('field-validation-error').addClass('field-validation-valid').html('');
                    callBackFunc(true);
                }
                else {
                    $(elm).removeClass('valid').addClass('input-validation-error');
                    $(elm).next('span').removeClass('field-validation-valid').addClass('field-validation-error')
                        .html('<span id="' + $(elm).attr('id') + '-error">Phone number is not valid!</span>');
                    callBackFunc(false);
                }
                return [2];
            });
        });
    };
    MyValidator.ValidateReqMinMax = function (transAmount, msg, callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            var $transAmount, result1, result2, result3;
            return __generator(this, function (_a) {
                $transAmount = $(transAmount);
                result1 = false, result2 = false, result3 = false;
                if ($transAmount.val()) {
                    result1 = true;
                }
                else {
                    $transAmount.removeClass('valid').addClass('input-validation-error');
                    callBackFunc(result1);
                    MyMessage.MessageSection(MyMessage.GetMessageText(MessageId.msgReqInputErr) + msg, MessageType.warn, true, ' ', 5);
                }
                if ($transAmount.attr('min')) {
                    if (+($transAmount.val() || 0) < +($transAmount.attr('min') || 0)) {
                        $transAmount.removeClass('valid').addClass('input-validation-error');
                        callBackFunc(result2);
                        MyMessage.MessageSection(MyMessage.GetMessageText(MessageId.msgInputMinErr) + parseFloat($transAmount.attr('min')) + msg, MessageType.warn, true, ' ', 5);
                    }
                    else {
                        result2 = true;
                    }
                }
                if ($transAmount.attr('max')) {
                    if (+($transAmount.val() || 0) > +($transAmount.attr('max') || 0)) {
                        $transAmount.removeClass('valid').addClass('input-validation-error');
                        callBackFunc(result3);
                        MyMessage.MessageSection(MyMessage.GetMessageText(MessageId.msgInputMaxErr) + parseFloat($transAmount.attr('max')) + msg, MessageType.warn, true, ' ', 5);
                    }
                    else {
                        result3 = true;
                    }
                }
                if (result1 && result2 && result3) {
                    $transAmount.removeClass('input-validation-error').addClass('valid');
                    callBackFunc(true);
                }
                else {
                    $transAmount.removeClass('valid').addClass('input-validation-error');
                    callBackFunc(false);
                }
                return [2];
            });
        });
    };
    MyValidator.ValidateReqminLengthmaxLength = function (transElem, msg, callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            var $transElem, result1, result2, result3;
            return __generator(this, function (_a) {
                $transElem = $(transElem);
                result1 = false, result2 = false, result3 = false;
                if ($transElem.val()) {
                    result1 = true;
                }
                else {
                    $transElem.removeClass('valid').addClass('input-validation-error');
                    callBackFunc(result1);
                    MyMessage.MessageSection(MyMessage.GetMessageText(MessageId.msgReqInputErr) + msg, MessageType.warn, true, ' ', 5);
                }
                if ($transElem.attr('minLength')) {
                    if (+($transElem.val() || 0) < +($transElem.attr('minLength') || 0)) {
                        $transElem.removeClass('valid').addClass('input-validation-error');
                        callBackFunc(result2);
                        MyMessage.MessageSection(MyMessage.GetMessageText(MessageId.msgInputMinErr) + parseFloat($transElem.attr('minLength')) + msg, MessageType.warn, true, ' ', 5);
                    }
                    else {
                        result2 = true;
                    }
                }
                if ($transElem.attr('maxLength')) {
                    if (+($transElem.val() || 0) > +($transElem.attr('maxLength') || 0)) {
                        $transElem.removeClass('valid').addClass('input-validation-error');
                        callBackFunc(result3);
                        MyMessage.MessageSection(MyMessage.GetMessageText(MessageId.msgInputMaxErr) + parseFloat($transElem.attr('maxLength')) + msg, MessageType.warn, true, ' ', 5);
                    }
                    else {
                        result3 = true;
                    }
                }
                if (result1 && result2 && result3) {
                    $transElem.removeClass('input-validation-error').addClass('valid');
                    callBackFunc(true);
                }
                else {
                    $transElem.removeClass('valid').addClass('input-validation-error');
                    callBackFunc(false);
                }
                return [2];
            });
        });
    };
    MyValidator.NumKeyOnly = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var key_code;
            return __generator(this, function (_a) {
                key_code = event.which || event.keyCode;
                if (key_code == 8) {
                    event.target.value = $.trim(event.target.value);
                }
                if (!(key_code >= 48 && key_code <= 57) && !((key_code == 8) || (key_code == 46)) && !(key_code >= 37 && key_code <= 40) && !(key_code >= 96 && key_code <= 105)) {
                    event.preventDefault();
                }
                return [2];
            });
        });
    };
    MyValidator.NumDecimalOnly = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var key_code, _value;
            return __generator(this, function (_a) {
                key_code = event.which || event.keyCode;
                _value = $(event.target).val();
                if (key_code == 8) {
                    event.target.value = $.trim(_value && _value.toString() || '') || '';
                }
                if (!(_value && _value.toString().indexOf('.') >= 0)) {
                    MyValidator.IsDecimalAvailable = true;
                }
                else {
                    MyValidator.IsDecimalAvailable = false;
                }
                if (!(key_code >= 48 && key_code <= 57) && !((key_code == 8) || (key_code == 46)) && !(key_code >= 37 && key_code <= 40) && !(key_code >= 96 && key_code <= 105)
                    && !((key_code == 110 || key_code == 46 || key_code == 190) && MyValidator.IsDecimalAvailable)) {
                    event.preventDefault();
                }
                return [2];
            });
        });
    };
    MyValidator.AlphaNumAndNumOnly = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var key_code;
            return __generator(this, function (_a) {
                key_code = event.which || event.keyCode;
                if (key_code == 8) {
                    event.target.value = $.trim(event.target.value);
                }
                if (!(key_code >= 48 && key_code <= 57) && !((key_code == 8) || (key_code == 46)) && !(key_code >= 37 && key_code <= 40)) {
                }
                return [2];
            });
        });
    };
    MyValidator.NoSpaceAllowed = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var key_code;
            return __generator(this, function (_a) {
                key_code = event.which || event.keyCode;
                if (key_code == 32) {
                    event.preventDefault();
                }
                else {
                    return [2];
                }
                return [2];
            });
        });
    };
    MyValidator.IsDecimalAvailable = true;
    return MyValidator;
}());
