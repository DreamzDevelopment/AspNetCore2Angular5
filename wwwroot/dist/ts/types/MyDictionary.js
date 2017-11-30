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
var KeyValuePair = (function () {
    function KeyValuePair(key, value) {
        this.Key = key;
        this.Value = value;
    }
    return KeyValuePair;
}());
var MyDictionary = (function () {
    function MyDictionary() {
        var _this = this;
        this.Keys = [];
        this.Values = [];
        this.response = new MyResponse();
        this.length = function () { return +(_this.Keys.length == _this.Values.length ? _this.Keys.length : -1); };
        this.Keys = [];
        this.Values = [];
    }
    MyDictionary.prototype.Get = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var kvp, _key, index;
            return __generator(this, function (_a) {
                kvp = null;
                if (key || key >= 0) {
                    _key = typeof (key) == 'string' ? key.toLowerCase() : key;
                    index = this.Keys.indexOf(_key);
                    index = index >= 0 ? index : typeof (key) == 'number' ? key : -1;
                    if (index >= 0 && (index < this.Keys.length)) {
                        kvp = new KeyValuePair(this.Keys[index], this.Values[index]);
                    }
                }
                return [2, kvp];
            });
        });
    };
    MyDictionary.prototype.Add = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var _key, index;
            return __generator(this, function (_a) {
                this.response = new MyResponse();
                if (key) {
                    _key = typeof (key) == 'string' ? key.toLowerCase() : key;
                    if (this.Keys.indexOf(_key) < 0) {
                        index = this.Keys.push(_key);
                        this.Values[index - 1] = value;
                        this.response.result = true;
                        this.response.message = MyMessage.GetMessageText(MessageId.msgCreateSucc) + '"' + key + '"';
                    }
                    else {
                        this.response.message = MyMessage.GetMessageText(MessageId.msgExistItemId) + '"' + key + '"';
                    }
                }
                else {
                    this.response.message = MyMessage.GetMessageText(MessageId.msgReqInputErr) + '"Key"';
                }
                return [2, this.response];
            });
        });
    };
    MyDictionary.prototype.Update = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var _key, index;
            return __generator(this, function (_a) {
                this.response = new MyResponse();
                if (key) {
                    _key = typeof (key) == 'string' ? key.toLowerCase() : key;
                    index = this.Keys.indexOf(_key);
                    if (index >= 0) {
                        this.Values[index] = value;
                        this.response.result = true;
                        this.response.message = MyMessage.GetMessageText(MessageId.msgUpdateSucc) + '"' + key + '"';
                    }
                    else {
                        this.response.message = MyMessage.GetMessageText(MessageId.msgNothingFound) + '"' + key + '"';
                    }
                }
                else {
                    this.response.message = MyMessage.GetMessageText(MessageId.msgReqInputErr) + '"Key"';
                }
                return [2, this.response];
            });
        });
    };
    MyDictionary.prototype.Remove = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _key, index;
            return __generator(this, function (_a) {
                this.response = new MyResponse();
                if (key) {
                    _key = typeof (key) == 'string' ? key.toLowerCase() : key;
                    index = this.Keys.indexOf(_key);
                    if (index >= 0) {
                        if ((index + 1) == this.Keys.length) {
                            this.Keys.pop();
                            this.Values.pop();
                        }
                        else {
                            this.Keys[index] = this.Keys.pop();
                            this.Values[index] = this.Values.pop();
                        }
                        this.response.result = true;
                        this.response.message = MyMessage.GetMessageText(MessageId.msgDeleteSucc) + '"' + key + '"';
                    }
                    else {
                        this.response.message = MyMessage.GetMessageText(MessageId.msgNothingFound) + '"' + key + '"';
                    }
                }
                else {
                    this.response.message = MyMessage.GetMessageText(MessageId.msgReqInputErr) + '"Key"';
                }
                return [2, this.response];
            });
        });
    };
    MyDictionary.prototype.GetNames = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.Keys];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MyDictionary.prototype.GetValues = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.Values];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MyDictionary.prototype.ForEach = function (callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            var _length, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _length = this && +this.length();
                        if (!(_length > 0)) return [3, 4];
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index < _length)) return [3, 4];
                        return [4, callBackFunc(new KeyValuePair(this.Keys[index], this.Values[index]), index, index >= _length - 1)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        index++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        });
    };
    return MyDictionary;
}());
