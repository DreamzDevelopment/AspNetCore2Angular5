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
var _this = this;
var GetReturnURL = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, encodeURIComponent(window.location.href)];
            case 1: return [2, _a.sent()];
        }
    });
}); };
var Loading = function (flag) { return __awaiter(_this, void 0, void 0, function () {
    var t1_1;
    return __generator(this, function (_a) {
        if (flag === true) {
            document.getElementById('documentState').innerHTML =
                '<img class="img-responsive" style="width: 20vw; margin-left: 40vw;margin-right: -40vw;" src="/images/icons/loading.gif" />';
            $('.documentState').removeClass('hidden').fadeIn();
        }
        else {
            $('.documentState').fadeOut();
            t1_1 = setTimeout(function () {
                $('.documentState').addClass('hidden');
                clearTimeout(t1_1);
            }, 1 * 1000);
        }
        return [2];
    });
}); };
document.onreadystatechange = function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    var returnUrl_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(document.readyState === 'interactive')) return [3, 2];
                return [4, Loading(true)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                if (!(document.readyState === 'complete')) return [3, 5];
                return [4, Loading(false)];
            case 3:
                _a.sent();
                return [4, GetReturnURL()];
            case 4:
                returnUrl_1 = _a.sent();
                Array.from($('.ToBeUpdateLink')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    var _a, updatedUrl;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = currentElement.tagName.toLowerCase();
                                switch (_a) {
                                    case 'a': return [3, 1];
                                    case 'input': return [3, 4];
                                }
                                return [3, 5];
                            case 1:
                                updatedUrl = currentElement.href;
                                updatedUrl = updatedUrl.substring(0, updatedUrl.search(/returnurl=/i) + 10) + returnUrl_1;
                                return [4, currentElement.removeAttribute('href')];
                            case 2:
                                _b.sent();
                                return [4, currentElement.setAttribute('href', updatedUrl)];
                            case 3:
                                _b.sent();
                                return [3, 6];
                            case 4:
                                $(currentElement).val(returnUrl_1);
                                return [3, 6];
                            case 5: return [3, 6];
                            case 6: return [2];
                        }
                    });
                }); });
                Array.from($('.ReturnLink')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        currentElement.onclick = function () {
                            history.back();
                        };
                        return [2];
                    });
                }); });
                Array.from($('.CurrencyText')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, FormatterExtension.FormatCurrency($(currentElement).text(), function (result) {
                                    if (result) {
                                        $(currentElement).text(result);
                                    }
                                    else {
                                    }
                                })];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
                Array.from($('.CurrencyValue')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, FormatterExtension.FormatCurrency($(currentElement).val(), function (result) {
                                    if (result) {
                                        $(currentElement).val(result);
                                    }
                                    else {
                                    }
                                })];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
                Array.from($('.CurrencyTitle')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, FormatterExtension.FormatCurrency($(currentElement).attr('title'), function (result) {
                                    if (result) {
                                        $(currentElement).attr('title', result);
                                    }
                                    else {
                                    }
                                })];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
                Array.from($('.PercentText')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, FormatterExtension.FormatPercent($(currentElement).text(), function (result) {
                                    if (result) {
                                        $(currentElement).text(result);
                                    }
                                    else {
                                        $(currentElement).text($(currentElement).text() + '%');
                                    }
                                })];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
                Array.from($('.PercentValue')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, FormatterExtension.FormatPercent($(currentElement).val(), function (result) {
                                    if (result) {
                                        $(currentElement).val(result);
                                    }
                                    else {
                                        $(currentElement).val($(currentElement).val() + '%');
                                    }
                                })];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
                Array.from($('.PercentTitle')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, FormatterExtension.FormatPercent($(currentElement).attr('title'), function (result) {
                                    if (result) {
                                        $(currentElement).attr('title', result);
                                    }
                                    else {
                                        $(currentElement).attr('title', $(currentElement).attr('title') + '%');
                                    }
                                })];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
                Array.from($('.NumberValue')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, FormatterExtension.FormatNumber(currentElement, FormatFor.Value, FormatterExtension.FormatterInt.resolvedOptions())];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
                Array.from($('.NumberText')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, FormatterExtension.FormatNumber(currentElement, FormatFor.Text, FormatterExtension.FormatterInt.resolvedOptions())];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
                Array.from($('.NumberTitle')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, FormatterExtension.FormatNumber(currentElement, FormatFor.Title, FormatterExtension.FormatterInt.resolvedOptions())];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
                Array.from($('.PhoneValue')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, FormatterExtension.FormatPhone(currentElement, FormatFor.Value, FormatterExtension.FormatterInt.resolvedOptions())];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
                Array.from($('.PhoneText')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, FormatterExtension.FormatPhone(currentElement, FormatFor.Text, FormatterExtension.FormatterInt.resolvedOptions())];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
                Array.from($('.PhoneTitle')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, FormatterExtension.FormatPhone(currentElement, FormatFor.Title, FormatterExtension.FormatterInt.resolvedOptions())];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
                Array.from($('.DateTimeValue')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = $(currentElement)).val;
                                return [4, FormatterExtension.FormatterDate.toLocalDateTime($(currentElement).val())];
                            case 1:
                                _b.apply(_a, [_c.sent()]);
                                return [2];
                        }
                    });
                }); });
                Array.from($('.DateTimeText')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = $(currentElement)).text;
                                return [4, FormatterExtension.FormatterDate.toLocalDateTime($(currentElement).text())];
                            case 1:
                                _b.apply(_a, [_c.sent()]);
                                return [2];
                        }
                    });
                }); });
                Array.from($('.DateTimeTitle')).forEach(function (currentElement) { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                _b = (_a = $(currentElement)).attr;
                                _c = ['title'];
                                return [4, FormatterExtension.FormatterDate.toLocalDateTime($(currentElement).attr('title'))];
                            case 1:
                                _b.apply(_a, _c.concat([_d.sent()]));
                                return [2];
                        }
                    });
                }); });
                _a.label = 5;
            case 5: return [2];
        }
    });
}); };
document.onscroll = function (event) {
    MyNotification.RelocateNotificationZone($(document.activeElement));
    var $si = $('.social-icons-wrapper');
    var fh = $('.footer-menu').innerHeight() || 0;
    var h = $(window).scrollTop() || 0;
    var dh = $(document).innerHeight() || 0;
    var s = $(window).innerHeight() || 0;
    var bh = $(window).height() || 0;
    var sh = (dh - bh) || 0;
    if (h >= sh / 3 && dh > (bh + fh)) {
        $('#btnScrollTop').parent().removeClass('slideDown').addClass('slideUp');
        ShowSocialIcons();
    }
    else {
        $('#btnScrollTop') && $('#btnScrollTop').parent().removeClass('slideUp').addClass('slideDown');
        HideSocialIcons();
    }
};
window.ontouchmove = function (event) {
    MyNotification.RelocateNotificationZone($(document.activeElement));
};
document.onmousemove = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var $this, docState;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event ? event.preventDefault() : '';
                $this = event ? $(event.target) : null;
                $this = $this.is('body') ? $this : $this.parents('body');
                if (!$this || $this.length <= 0) {
                    return [2];
                }
                docState = $this.find('.documentState');
                if (!!docState.hasClass('hidden')) return [3, 2];
                return [4, Loading(false)];
            case 1:
                _a.sent();
                return [3, 3];
            case 2: return [2];
            case 3: return [2];
        }
    });
}); };
document.ontouchmove = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var $this, docState;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event ? event.preventDefault() : '';
                $this = event ? $(event.target) : null;
                $this = $this.is('body') ? $this : $this.parents('body');
                if (!$this || $this.length <= 0) {
                    return [2];
                }
                docState = $this.find('.documentState');
                if (!!docState.hasClass('hidden')) return [3, 2];
                return [4, Loading(false)];
            case 1:
                _a.sent();
                return [3, 3];
            case 2: return [2];
            case 3: return [2];
        }
    });
}); };
$('#bannerCarousel').attr('data-interval', +($('#bannerDataInterval').val() || 0) >= 1000 ? +($('#bannerDataInterval').val() || 0) : 15000);
$('#imgCarousel').attr('data-interval', +($('#imageDataInterval').val() || 0) >= 1000 ? +($('#imageDataInterval').val() || 0) : 10000);
$('#dl-menu').dlmenu();
$('.back-to-top').on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
});
$('.social-icons-wrapper + div > a').on('click', function () {
    var hasCls = $('.social-icons-wrapper + div > a > i').hasClass('fa-caret-left');
    if (hasCls === true) {
        ShowSocialIcons();
    }
    else {
        HideSocialIcons();
    }
});
var ShowSocialIcons = function () {
    var $si = $('.social-icons-wrapper');
    $si.removeClass('hide-social').addClass('show-social');
    $('.social-icons-wrapper + div > a > i').removeClass('fa-caret-left').addClass('fa-caret-right').attr('title', 'Hide Social');
};
var HideSocialIcons = function () {
    var $si = $('.social-icons-wrapper');
    $si.removeClass('show-social').addClass('hide-social');
    $('.social-icons-wrapper + div > a > i').removeClass('fa-caret-right').addClass('fa-caret-left').attr('title', 'Show Social');
};
$('#selectLanguage select').on('change', function (event) {
    event ? event.preventDefault() : '';
    var $this = event ? $(event.target) : null;
    if (!$this || $this.length <= 0) {
        return;
    }
    $this.parent().submit();
});
var FooterTimer;
$('.footer').on('mouseover', function (event) {
    event ? event.preventDefault() : '';
    var $this = event ? $(event.target) : null;
    $this = !$this.is('.footer') ? $this.parents('.footer') : $this;
    if (!$this || $this.length <= 0) {
        return;
    }
    DisplayFooter(undefined, $this.get(0));
});
$('.footer').on('dblclick', function (event) {
    var $this = event ? $(event.target) : null;
    $this = !$this.is('.footer') ? $this.parents('.footer') : $this;
    if (!$this || $this.length <= 0) {
        return;
    }
    clearTimeout(FooterTimer);
    $this.removeClass('show-footer');
});
$('.footer .btn-close').on('click', function (event) {
    event ? event.preventDefault() : '';
    var $this = event ? $(event.target) : null;
    if (!$this || $this.length <= 0) {
        return;
    }
    clearTimeout(FooterTimer);
    $this.parents('.footer').removeClass('show-footer');
});
var DisplayFooter = function (event, target) {
    event ? event.preventDefault() : '';
    var $this = event ? $(event.target) : target ? $(target) : null;
    $this = !$this.is('.footer') ? $this.parents('.footer') : $this;
    if (!$this || $this.length <= 0) {
        return;
    }
    clearTimeout(FooterTimer);
    $this.addClass('show-footer');
    FooterTimer = setTimeout(function (ev) {
        $('.footer').removeClass('show-footer');
        clearTimeout(FooterTimer);
    }, 5 * 1000);
};
