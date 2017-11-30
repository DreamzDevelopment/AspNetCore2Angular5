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
var TimerCounterOption = (function () {
    function TimerCounterOption(model, _selectorObj, _counterObj) {
        this.selectorObj = _selectorObj || (model && model.selectorObj);
        this.counterObj = _counterObj || (model && model.counterObj);
    }
    return TimerCounterOption;
}());
var TimerCounter = (function () {
    function TimerCounter() {
        this.options = new TimerCounterOption();
        this.options = new TimerCounterOption();
    }
    TimerCounter.prototype.CountDayHourMinSec = function (_selectorObj, _counterObj, _days, _hours, _mins, _secs, callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, TimerCounter.CountDayHourMinSec(_selectorObj, _counterObj, _days, _hours, _mins, _secs, callBackFunc)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    TimerCounter.CountDayHourMinSec = function (_selectorObj, _counterObj, _days, _hours, _mins, _secs, callBackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var secsObj, secCounter, minsObj, hoursObj, daysObj, totalSecs;
            return __generator(this, function (_a) {
                secsObj = $(_selectorObj).find('.secs-time') || $(_selectorObj + ' .secs-time');
                secCounter = _secs < 0 ? 0 : _secs;
                _mins = _mins < 0 ? 0 : _mins;
                _hours = _hours < 0 ? 0 : _hours;
                _days = _days < 0 ? 0 : _days;
                $(secsObj).text(FormatterExtension.FormatterTime.format(secCounter - 1) + MyMessage.SetMessageText(' Sec', ' সেকেন্ড'));
                minsObj = $(_selectorObj).find('.mins-time') || $(_selectorObj + ' .mins-time');
                $(minsObj).text(FormatterExtension.FormatterTime.format(_mins) + MyMessage.SetMessageText(' Min', ' মিনিট'));
                hoursObj = $(_selectorObj).find('.hours-time') || $(_selectorObj + ' .hours-time');
                $(hoursObj).text(FormatterExtension.FormatterTime.format(_hours) + MyMessage.SetMessageText(' Hour', ' ঘণ্টা'));
                daysObj = $(_selectorObj).find('.days-time') || $(_selectorObj + ' .days-time');
                $(daysObj).text(FormatterExtension.FormatterTime.format(_days) + MyMessage.SetMessageText(' Day', ' দিন'));
                totalSecs = _days * 24 * 60 * 60 + _hours * 60 * 60 + _mins * 60 + _secs;
                _counterObj = setInterval(function (e) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                secCounter -= 1;
                                if (secCounter <= 0) {
                                    secCounter = 0;
                                }
                                $(secsObj).text(FormatterExtension.FormatterTime.format(secCounter) + MyMessage.SetMessageText(' Sec', ' সেকেন্ড'));
                                if (!(secCounter <= 0)) return [3, 4];
                                if (!(_mins <= 0)) return [3, 3];
                                secCounter = 0;
                                if (!(secCounter <= 0 && _mins <= 0 && _hours <= 0 && _days <= 0)) return [3, 2];
                                clearInterval(_counterObj);
                                if (!(typeof (callBackFunc) === 'function')) return [3, 2];
                                return [4, callBackFunc(true)];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2: return [3, 4];
                            case 3:
                                secCounter = 60;
                                _mins -= 1;
                                $(minsObj).text(FormatterExtension.FormatterTime.format(_mins) + MyMessage.SetMessageText(' Min', ' মিনিট'));
                                if (_mins <= 0) {
                                    if (_hours <= 0) {
                                        _mins = 0;
                                    }
                                    else {
                                        _mins = 60;
                                        _hours -= 1;
                                        $(hoursObj).text(FormatterExtension.FormatterTime.format(_hours) + MyMessage.SetMessageText(' Hour', ' ঘণ্টা'));
                                        if (_hours <= 0) {
                                            if (_days <= 0) {
                                                _hours = 0;
                                            }
                                            else {
                                                _hours = 24;
                                                _days -= 1;
                                                $(daysObj).text(FormatterExtension.FormatterTime.format(_days) + MyMessage.SetMessageText(' Day', ' দিন'));
                                                if (_days <= 0) {
                                                    _days = 0;
                                                }
                                            }
                                        }
                                    }
                                }
                                _a.label = 4;
                            case 4: return [2];
                        }
                    });
                }); }, 1000);
                return [2, _counterObj];
            });
        });
    };
    return TimerCounter;
}());
