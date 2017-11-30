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
var ApiCallService = (function () {
    function ApiCallService() {
    }
    ApiCallService.prototype.HttpGetAsync = function (_url, _params, callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ApiCallService.HttpGetAsync(_url, _params, callBackFunc)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ApiCallService.prototype.HttpPostAsync = function (_url, _params, _xsrf, callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ApiCallService.HttpPostAsync(_url, _params, _xsrf, callBackFunc)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ApiCallService.HttpGetAsync = function (_url, _params, callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _response, https, settings;
            return __generator(this, function (_a) {
                _response = new MyResponse(undefined, false, MyMessage.GetMessageText(MessageId.msgFailedReq));
                settings = {};
                settings.type = 'get';
                settings.url = _url;
                settings.data = _params;
                settings.dataType = 'json';
                settings.cache = false;
                settings.async = true;
                settings.headers = {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                    'Content-Length': _params.length ? _params.length.toString() : null,
                    'Connection': 'close',
                };
                settings.success = function (response) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _response.result = true;
                                _response.message = MyMessage.GetMessageText(MessageId.msgSuccessReq);
                                _response.data = response;
                                return [4, callBackFunc(_response)];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); };
                settings.error = function (jqXHR, textStatus, errorThrown) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _response.message = jqXHR.statusText + " : " + jqXHR.responseText + " : " + MyMessage.GetMessageText(MessageId.msgTryAgain);
                                return [4, callBackFunc(_response)];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); };
                settings.complete = function (jqXHR, textStatus) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2];
                }); }); };
                $.ajax(settings);
                return [2];
            });
        });
    };
    ApiCallService.HttpPostAsync = function (_url, _params, _xsrf, callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _response, https, settings;
            return __generator(this, function (_a) {
                _response = new MyResponse(undefined, false, MyMessage.GetMessageText(MessageId.msgFailedReq));
                settings = {};
                settings.type = 'post';
                settings.url = _url;
                settings.data = _params;
                settings.dataType = 'json';
                settings.cache = false;
                settings.async = true;
                settings.headers = {
                    'RequestVerificationToken': _xsrf,
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
                    'Content-Length': _params.length ? _params.length.toString() : null,
                    'Connection': 'close',
                };
                settings.success = function (response) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _response = new MyResponse(response);
                                return [4, callBackFunc(_response)];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); };
                settings.error = function (jqXHR, textStatus, errorThrown) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _response.message = jqXHR.statusText + " : " + jqXHR.responseText + " : " + MyMessage.GetMessageText(MessageId.msgTryAgain);
                                return [4, callBackFunc(_response)];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); };
                settings.complete = function (jqXHR, textStatus) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2];
                }); }); };
                $.ajax(settings);
                return [2];
            });
        });
    };
    ApiCallService.MyFormSubmit = function (event, selector, callBackFunc) {
        if (selector === void 0) { selector = 'input,textarea,select'; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _response, $form, _action, _url, _params, _xsrf, _a, _b, _c, _d, _e, _f, _g, t1;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        _response = { result: false, message: MyMessage.GetMessageText(MessageId.msgFailedReq) };
                        event.preventDefault();
                        $form = event ? $(event.target) : null;
                        if (!(!$form || $form.length <= 0)) return [3, 2];
                        return [4, callBackFunc(_response)];
                    case 1:
                        _h.sent();
                        _h.label = 2;
                    case 2:
                        _action = $form.attr('method') ? $form.attr('method') : 'post';
                        _url = $form.attr('action') ? $form.attr('action') : null;
                        return [4, ApiCallService.GetModel(event.target, selector)];
                    case 3:
                        _params = _h.sent();
                        _xsrf = $form.attr('asp-anti-forgery') ? $form.attr('asp-anti-forgery') : null;
                        $form.find('.submit').removeClass('zoom-in').addClass('zoom-out');
                        $form.find('.submit').next('a.btn').removeClass('zoom-out').addClass('zoom-in');
                        _a = _action && _action.toLowerCase();
                        switch (_a) {
                            case 'get': return [3, 4];
                            case 'patch': return [3, 7];
                            case 'put': return [3, 7];
                            case 'delete': return [3, 7];
                            case 'post': return [3, 7];
                        }
                        return [3, 10];
                    case 4:
                        _c = (_b = ApiCallService).HttpGetAsync;
                        _d = [_url, _params];
                        return [4, callBackFunc];
                    case 5: return [4, _c.apply(_b, _d.concat([_h.sent()]))];
                    case 6:
                        _h.sent();
                        return [3, 12];
                    case 7:
                        _f = (_e = ApiCallService).HttpPostAsync;
                        _g = [_url, _params, _xsrf];
                        return [4, callBackFunc];
                    case 8: return [4, _f.apply(_e, _g.concat([_h.sent()]))];
                    case 9:
                        _h.sent();
                        return [3, 12];
                    case 10: return [4, callBackFunc(_response)];
                    case 11:
                        _h.sent();
                        return [3, 12];
                    case 12:
                        t1 = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                $form.find('.submit').next('a.btn').removeClass('zoom-in').addClass('zoom-out');
                                $form.find('.submit').removeClass('zoom-out').addClass('zoom-in');
                                clearTimeout(t1);
                                return [2];
                            });
                        }); }, 500);
                        return [2];
                }
            });
        });
    };
    ApiCallService.GetModel = function (form, selector, isIdName) {
        if (selector === void 0) { selector = 'input,textarea,select'; }
        if (isIdName === void 0) { isIdName = true; }
        return __awaiter(this, void 0, void 0, function () {
            var $form, formControls, _id, _name, _value, model, key, elm;
            return __generator(this, function (_a) {
                $form = $(form);
                formControls = Array.from($form.find(selector ? selector : 'input,textarea,select'));
                _id = '';
                _name = '';
                _value = '';
                model = {};
                for (key in formControls) {
                    if (formControls.hasOwnProperty(key)) {
                        elm = formControls[key];
                        _id = elm ? $(elm).attr('id') ? $(elm).attr('id') : '' : '';
                        _id = _id ? _id.replace(/_/gi, '.') : '';
                        _name = elm ? $(elm).attr('name') ? $(elm).attr('name') : '' : '';
                        if (_id && _name && ((_id == _name) || !isIdName)) {
                            _value = $(elm).val();
                            model[_name] = _value;
                        }
                    }
                }
                return [2, model];
            });
        });
    };
    ApiCallService.TestFormSubmit = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var $form;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        $form = $(event.target);
                        return [4, MyValidator.FormValidator(event.target, function (response) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2];
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [4, MyValidator.FormValidator($form, function (response) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(response && response.result)) return [3, 2];
                                            return [4, ApiCallService.MyFormSubmit(event, 'input,textarea,select', function (response) {
                                                    if (response) {
                                                        MyMessage.MessageSection(response.message, MessageType.info, true, ' ', 10);
                                                    }
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3, 3];
                                        case 2:
                                            MyMessage.MessageSection(response.message, MessageType.warn, true, ' ', 5);
                                            _a.label = 3;
                                        case 3: return [2];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ApiCallService.CallGoogleApi = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(event.target);
                return [2];
            });
        });
    };
    return ApiCallService;
}());
