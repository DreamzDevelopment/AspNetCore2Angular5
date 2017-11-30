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
var FormatFor;
(function (FormatFor) {
    FormatFor[FormatFor["All"] = 0] = "All";
    FormatFor[FormatFor["Text"] = 1] = "Text";
    FormatFor[FormatFor["Value"] = 2] = "Value";
    FormatFor[FormatFor["Title"] = 3] = "Title";
})(FormatFor || (FormatFor = {}));
var FormatterExtension = (function () {
    function FormatterExtension() {
    }
    FormatterExtension.ResolvedNumber = function (val, callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = FormatterExtension.Locale;
                        switch (_a) {
                            case 'bn-BD': return [3, 1];
                        }
                        return [3, 3];
                    case 1:
                        try {
                            val = val.replace(/[০১২৩৪৫৬৭৮৯]/gi, function (e) {
                                if (FormatterExtension.BanglaNumber.indexOf(e)) {
                                    return FormatterExtension.BanglaNumber.indexOf(e);
                                }
                                else {
                                    return e;
                                }
                            });
                        }
                        catch (error) {
                            console.log("Translating: after:error", error);
                        }
                        return [4, callBackFunc(val)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [4, callBackFunc(val)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [2];
                }
            });
        });
    };
    FormatterExtension.FormatCurrency = function (val, callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var value;
            return __generator(this, function (_a) {
                value = '0';
                return [2, FormatterExtension.ResolvedNumber(val, function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var obj;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!response) return [3, 4];
                                    value = response;
                                    value = value.replace(/[^[0-9.]/g, '');
                                    if (value) {
                                        try {
                                            value = parseFloat(value);
                                        }
                                        catch (error) {
                                            console.log("Parse Float Error:", error);
                                        }
                                    }
                                    else {
                                        value = 0.0;
                                    }
                                    return [4, MyCurrencyList.GetCurrency(FormatterExtension.Currency)];
                                case 1:
                                    obj = _a.sent();
                                    if (!obj) return [3, 3];
                                    value = ((obj.postfix == true) ? (FormatterExtension.Formatter.format(value) + obj.symbol) : (obj.symbol + FormatterExtension.Formatter.format(value)));
                                    return [4, callBackFunc(value.toString())];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [3, 6];
                                case 4: return [4, callBackFunc(FormatterExtension.Formatter.format(value).toString())];
                                case 5:
                                    _a.sent();
                                    _a.label = 6;
                                case 6: return [2];
                            }
                        });
                    }); })];
            });
        });
    };
    FormatterExtension.FormatPercent = function (val, callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var value;
            return __generator(this, function (_a) {
                value = '0';
                return [2, FormatterExtension.ResolvedNumber(val, function (response) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!response) return [3, 2];
                                    value = response;
                                    value = value.replace(/[^[0-9.]/g, '');
                                    if (value) {
                                        try {
                                            value = Number(value);
                                        }
                                        catch (error) {
                                            console.log("Parse Number Error: ", error);
                                        }
                                    }
                                    else {
                                        value = 0;
                                    }
                                    value = FormatterExtension.Default.format(value);
                                    return [4, callBackFunc(value.toString() + '%')];
                                case 1:
                                    _a.sent();
                                    return [3, 4];
                                case 2: return [4, callBackFunc(FormatterExtension.Default.format(value).toString() + '%')];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4: return [2];
                            }
                        });
                    }); })];
            });
        });
    };
    FormatterExtension.ToLocalDateTime = function (val) {
        return FormatterExtension.FormatterDate.format(new Date(val));
    };
    FormatterExtension.FormatNumber = function (element, formatFor, options) {
        return __awaiter(this, void 0, void 0, function () {
            var formatter, _a, _b, _c, _d, _e, _f, value;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _b = (_a = Intl.NumberFormat).bind;
                        _c = [void 0, FormatterExtension.Locale];
                        _e = (_d = Object).assign;
                        _f = [options];
                        return [4, FormatterExtension.ExtractOptions(element)];
                    case 1:
                        formatter = new (_b.apply(_a, _c.concat([_e.apply(_d, _f.concat([_g.sent()]))])))();
                        value = '';
                        switch (formatFor) {
                            case FormatFor.Text:
                                value = $(element).text();
                                $(element).text(formatter.format(+value));
                                break;
                            case FormatFor.Value:
                                value = $(element).val();
                                $(element).val(formatter.format(+value));
                                break;
                            case FormatFor.Title:
                                value = $(element).attr('title');
                                $(element).attr({ 'title': formatter.format(+value) });
                                break;
                            case FormatFor.All:
                            default:
                                value = $(element).attr('title');
                                $(element).attr({ 'title': formatter.format(+value) });
                                value = $(element).val();
                                $(element).val(formatter.format(+value));
                                value = $(element).text();
                                $(element).text(formatter.format(+value));
                                break;
                        }
                        return [2];
                }
            });
        });
    };
    FormatterExtension.FormatPhone = function (element, formatFor, options) {
        return __awaiter(this, void 0, void 0, function () {
            var formatter, _a, _b, _c, _d, _e, _f, value, values, i, ch, i, ch, i, ch, i, ch, i, ch, i, ch;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _b = (_a = Intl.NumberFormat).bind;
                        _c = [void 0, FormatterExtension.Locale];
                        _e = (_d = Object).assign;
                        _f = [options];
                        return [4, FormatterExtension.ExtractOptions(element)];
                    case 1:
                        formatter = new (_b.apply(_a, _c.concat([_e.apply(_d, _f.concat([_g.sent()]))])))();
                        value = '';
                        values = [];
                        switch (formatFor) {
                            case FormatFor.Text:
                                value = $(element).text();
                                for (i = 0; i < value.length; i++) {
                                    ch = value[i];
                                    if (FormatterExtension.EnglishNumber.indexOf(ch) >= 0) {
                                        values.push(formatter.format(+ch));
                                    }
                                    else {
                                        values.push(ch);
                                    }
                                }
                                $(element).text(values.join(''));
                                break;
                            case FormatFor.Value:
                                value = $(element).val();
                                for (i = 0; i < value.length; i++) {
                                    ch = value[i];
                                    if (FormatterExtension.EnglishNumber.indexOf(ch) >= 0) {
                                        values.push(formatter.format(+ch));
                                    }
                                    else {
                                        values.push(ch);
                                    }
                                }
                                $(element).val(values.join(''));
                                break;
                            case FormatFor.Title:
                                value = $(element).attr('title');
                                for (i = 0; i < value.length; i++) {
                                    ch = value[i];
                                    if (FormatterExtension.EnglishNumber.indexOf(ch) >= 0) {
                                        values.push(formatter.format(+ch));
                                    }
                                    else {
                                        values.push(ch);
                                    }
                                }
                                $(element).attr({ 'title': values.join('') });
                                break;
                            case FormatFor.All:
                            default:
                                value = $(element).attr('title');
                                values = [];
                                for (i = 0; i < value.length; i++) {
                                    ch = value[i];
                                    if (FormatterExtension.EnglishNumber.indexOf(ch) >= 0) {
                                        values.push(formatter.format(+ch));
                                    }
                                    else {
                                        values.push(ch);
                                    }
                                }
                                $(element).attr({ 'title': values.join('') });
                                value = $(element).val();
                                values = [];
                                for (i = 0; i < value.length; i++) {
                                    ch = value[i];
                                    if (FormatterExtension.EnglishNumber.indexOf(ch) >= 0) {
                                        values.push(formatter.format(+ch));
                                    }
                                    else {
                                        values.push(ch);
                                    }
                                }
                                $(element).val(values.join(''));
                                value = $(element).text();
                                values = [];
                                for (i = 0; i < value.length; i++) {
                                    ch = value[i];
                                    if (FormatterExtension.EnglishNumber.indexOf(ch) >= 0) {
                                        values.push(formatter.format(+ch));
                                    }
                                    else {
                                        values.push(ch);
                                    }
                                }
                                $(element).text(values.join(''));
                                break;
                        }
                        return [2];
                }
            });
        });
    };
    FormatterExtension.prototype.ExtractOptions = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, FormatterExtension.ExtractOptions(element)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    FormatterExtension.ExtractOptions = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var options, optionString;
            return __generator(this, function (_a) {
                optionString = $(element).data('options') || '';
                optionString = optionString && optionString.toString().replace(/\'/g, '\"');
                if (optionString && optionString.length > 2) {
                    try {
                        options = JSON.parse(optionString);
                        return [2, options];
                    }
                    catch (e) {
                        console.log(e);
                        return [2, options];
                    }
                }
                else {
                    return [2, options];
                }
                return [2];
            });
        });
    };
    FormatterExtension.Locale = $('#selectLanguage select').val();
    FormatterExtension.Currency = 'BDT';
    FormatterExtension.EnglishNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    FormatterExtension.BanglaNumber = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    FormatterExtension.Default = new Intl.NumberFormat(FormatterExtension.Locale);
    FormatterExtension.Formatter = new Intl.NumberFormat(FormatterExtension.Locale, {
        style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2, minimumIntegerDigits: 2
    });
    FormatterExtension.FormatterInt = new Intl.NumberFormat(FormatterExtension.Locale, {
        style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0, minimumIntegerDigits: 1,
    });
    FormatterExtension.FormatterTime = new Intl.NumberFormat(FormatterExtension.Locale, {
        style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0, minimumIntegerDigits: 2
    });
    FormatterExtension.FormatterDate = new Intl.DateTimeFormat(FormatterExtension.Locale, {
        formatMatcher: 'basic', hour12: true, year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", second: "2-digit"
    });
    return FormatterExtension;
}());
