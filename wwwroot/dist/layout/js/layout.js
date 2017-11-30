"use strict";
var MenuItemType;
(function (MenuItemType) {
    MenuItemType[MenuItemType["Default"] = 0] = "Default";
    MenuItemType[MenuItemType["PictureBox"] = 1] = "PictureBox";
    MenuItemType[MenuItemType["Gradient"] = 2] = "Gradient";
})(MenuItemType || (MenuItemType = {}));
var SiteNavigationModel = (function () {
    function SiteNavigationModel(model) {
        this.menuItems = [];
        this.selectorBase = model && model.selectorBase || '';
        this.selectedTemplate = model && model.selectedTemplate || -1;
        this.menuTemplates = model && model.menuTemplates || [];
        this.menuItems = model && model.menuItems || [];
    }
    return SiteNavigationModel;
}());
var MenuControlOption = (function () {
    function MenuControlOption(model) {
        this.menuLevel = model && model.menuLevel || 0;
        this.elementSelector = model && model.elementSelector || '';
        this.btnSelector = model && model.btnSelector || '';
        this.targetSelector = model && model.targetSelector || '';
    }
    return MenuControlOption;
}());
var MenuHtml = (function () {
    function MenuHtml(model) {
        this.createDate = new Date();
        this.updateDate = new Date();
        this.selector = model && model.selector || '';
        this.title = model && model.title || '';
        this.selectorImg = model && model.selectorImg || '';
        this.selectorBtn = model && model.selectorBtn || '';
        this.html = model && model.html || '';
        this.createBy = model && model.createBy || '';
        this.createDate = model && model.createDate || new Date();
        this.updateBy = model && model.updateBy || '';
        this.updateDate = model && model.updateDate || new Date();
    }
    return MenuHtml;
}());
var MenuTemplate = (function () {
    function MenuTemplate(model) {
        this.createDate = new Date();
        this.updateDate = new Date();
        this.id = model && model.id || -1;
        this.title = model && model.title || '';
        this.description = model && model.description || '';
        this.rootId = model && model.rootId || -1;
        this.rootElement = model && model.rootElement || new MenuHtml();
        this.childId = model && model.childId || -1;
        this.childElement = model && model.childElement || new MenuHtml();
        this.createBy = model && model.createBy || '';
        this.createDate = model && model.createDate || new Date();
        this.updateBy = model && model.updateBy || '';
        this.updateDate = model && model.updateDate || new Date();
    }
    return MenuTemplate;
}());
var MenuItem = (function () {
    function MenuItem(model) {
        this.createDate = new Date();
        this.updateDate = new Date();
        this.id = model && model.id || -1;
        this.title = model && model.title || '';
        this.description = model && model.description || '';
        this.target = model && model.target || '';
        this.iconHtml = model && model.iconHtml || '';
        this.iconUrl = model && model.iconUrl || '';
        this.imageUrl = model && model.imageUrl || '';
        this.parentId = model && model.parentId || undefined;
        this.menuItems = model && model.menuItems || [];
        this.createBy = model && model.createBy || '';
        this.createDate = model && model.createDate || new Date();
        this.updateBy = model && model.updateBy || '';
        this.updateDate = model && model.updateDate || new Date();
    }
    return MenuItem;
}());

"use strict";
var AnimationControl = (function () {
    function AnimationControl() {
    }
    AnimationControl.whichAnimationEvent = function () {
        var t;
        var el = document.createElement("fakeelement");
        var animations = {
            "animation": "animationend",
            "OAnimation": "oAnimationEnd",
            "MozAnimation": "animationend",
            "WebkitAnimation": "webkitAnimationEnd"
        };
        for (t in animations) {
            var _elStyle = el.style[t];
            if (_elStyle !== undefined) {
                var result = animations[t];
                return result;
            }
        }
    };
    return AnimationControl;
}());
$(".button").on('click', function (event) {
    $(event.target).addClass("animate");
    var animationName = AnimationControl.whichAnimationEvent();
});
$(function (event) {
    var $animated = $('.animated');
    $animated.addClass('to-left');
    var animationName = AnimationControl.whichAnimationEvent();
    $animated.on(animationName, function (event) {
        if ($animated.hasClass('to-left') == true) {
            $animated.addClass('to-left-end');
        }
        if ($animated.hasClass('to-top') == true) {
            $animated.addClass('to-top-end');
        }
        if ($animated.hasClass('to-right') == true) {
            $animated.addClass('to-right-end');
        }
        if ($animated.hasClass('to-bottom') == true) {
            $animated.addClass('to-bottom-end');
        }
        var t1 = setTimeout(function (event) {
            if ($animated.hasClass('to-left') == true) {
                $animated.removeClass('to-left-end');
                $animated.removeClass('to-left');
                $animated.addClass('to-top');
            }
            else if ($animated.hasClass('to-top') == true) {
                $animated.removeClass('to-top-end');
                $animated.removeClass('to-top');
                $animated.addClass('to-right');
            }
            else if ($animated.hasClass('to-right') == true) {
                $animated.removeClass('to-right-end');
                $animated.removeClass('to-right');
                $animated.addClass('to-bottom');
            }
            else if ($animated.hasClass('to-bottom') == true) {
                $animated.removeClass('to-bottom-end');
                $animated.removeClass('to-bottom');
                $animated.addClass('to-left');
            }
            clearTimeout(t1);
        }, 5 * 1000);
    });
});

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
var NavMenuTool = (function () {
    function NavMenuTool(model, flag, control, inputControl) {
        this.flag = flag || (model && model.flag) || false;
        this.control = control || (model && model.control) || '';
        this.$control = (model && model.$control) || undefined;
        this.inputControl = inputControl || (model && model.inputControl) || '';
        this.$inputControl = (model && model.$inputControl) || undefined;
    }
    return NavMenuTool;
}());
var NavMenuOptions = (function () {
    function NavMenuOptions() {
        this.timerCounter = new TimerCounter();
    }
    return NavMenuOptions;
}());
var NavMenu = (function () {
    function NavMenu() {
    }
    NavMenu.Initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var t0_1;
            return __generator(this, function (_a) {
                if (!this.IsInitialized) {
                    t0_1 = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, NavMenu.InitializeMenu()];
                                case 1:
                                    _a.sent();
                                    clearTimeout(t0_1);
                                    return [2];
                            }
                        });
                    }); }, 1 * 1000);
                }
                this.IsInitialized = true;
                return [2];
            });
        });
    };
    NavMenu.prototype.InitializeMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, NavMenu.InitializeMenu()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NavMenu.InitializeMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _url, _params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!NavMenu.SiteNavigationModel) return [3, 2];
                        return [4, NavMenu.RenderMenuItem()];
                    case 1:
                        _a.sent();
                        return [3, 4];
                    case 2:
                        _url = '/api/apiNavigation/GetNavigationMenu';
                        _params = ['template=' + 'Picture Box'].join('&');
                        return [4, ApiCallService.HttpGetAsync(_url, _params, function (response) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!response) return [3, 3];
                                            if (!response.data) return [3, 3];
                                            NavMenu.SiteNavigationModel = response.data;
                                            NavMenu.SelectedTemplate = NavMenu.SiteNavigationModel.menuTemplates.find(function (mt) { return mt.id == NavMenu.SiteNavigationModel.selectedTemplate; }) || new MenuTemplate();
                                            console.log(NavMenu.SiteNavigationModel);
                                            return [4, NavMenu.RenderMenuItem()];
                                        case 1:
                                            _a.sent();
                                            return [4, NavMenu.RenderModification()];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3: return [2];
                                    }
                                });
                            }); })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    NavMenu.prototype.RenderMenuItem = function (menuItems) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, NavMenu.RenderMenuItem(menuItems)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NavMenu.RenderMenuItem = function (_menuItems) {
        return __awaiter(this, void 0, void 0, function () {
            var menuItems, parentElm_1, implemented, _loop_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!NavMenu.SiteNavigationModel) return [3, 6];
                        menuItems = _menuItems || NavMenu.SiteNavigationModel.menuItems;
                        parentElm_1 = new MenuItem();
                        implemented = -1;
                        NavMenu.MenuItemsNonRendered = [];
                        _loop_1 = function (i) {
                            var element;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        element = menuItems[i];
                                        if (!element) return [3, 7];
                                        if (!(element.parentId <= 0)) return [3, 3];
                                        implemented = NavMenu.MenuItemsRendered.findIndex(function (mi) { return mi.id == element.id; });
                                        if (!(implemented < 0)) return [3, 2];
                                        return [4, NavMenu.CreateMenuItem(element)];
                                    case 1:
                                        _a.sent();
                                        NavMenu.MenuItemsRendered.push(element);
                                        _a.label = 2;
                                    case 2: return [3, 7];
                                    case 3:
                                        parentElm_1 = NavMenu.MenuItemsRendered.find(function (mi) { return mi.id == element.parentId; }) || new MenuItem();
                                        if (!(!parentElm_1 || parentElm_1.id <= 0)) return [3, 4];
                                        parentElm_1 = menuItems.find(function (mi) { return mi.id == element.parentId; }) || new MenuItem();
                                        if (parentElm_1 && parentElm_1.id > 0) {
                                            implemented = NavMenu.MenuItemsNonRendered.findIndex(function (mi) { return mi.id == parentElm_1.id; });
                                            if (implemented < 0) {
                                                NavMenu.MenuItemsNonRendered.push(parentElm_1);
                                            }
                                            implemented = NavMenu.MenuItemsNonRendered.findIndex(function (mi) { return mi.id == element.id; });
                                            if (implemented < 0) {
                                                NavMenu.MenuItemsNonRendered.push(element);
                                            }
                                        }
                                        return [3, 7];
                                    case 4:
                                        if (!parentElm_1) return [3, 7];
                                        implemented = NavMenu.MenuItemsRendered.findIndex(function (mi) { return mi.id == element.id; });
                                        if (!(implemented < 0)) return [3, 6];
                                        return [4, NavMenu.CreateMenuItem(element, parentElm_1)];
                                    case 5:
                                        _a.sent();
                                        NavMenu.MenuItemsRendered.push(element);
                                        _a.label = 6;
                                    case 6: return [3, 7];
                                    case 7: return [2];
                                }
                            });
                        };
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < menuItems.length)) return [3, 4];
                        return [5, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4:
                        if (!(NavMenu.MenuItemsNonRendered.length > 0)) return [3, 6];
                        return [4, NavMenu.RenderMenuItem(NavMenu.MenuItemsNonRendered)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2];
                }
            });
        });
    };
    NavMenu.prototype.CreateMenuItem = function (element, parentElm) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, NavMenu.CreateMenuItem(element, parentElm)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NavMenu.CreateMenuItem = function (element, parentElm) {
        return __awaiter(this, void 0, void 0, function () {
            var elementId, $image, $btn, $elm, parentId, lastChild, firstChild, $childCaret, _menuControlOption, _a, _b, _c, _d, $childSection, lastChild_1, firstChild_1, lastChild, firstChild, $childCaret, _menuControlOption, _e, _f, _g, _h, $childSection, lastChild_2, firstChild_2;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (!(element && NavMenu.SelectedTemplate && NavMenu.SelectedTemplate.id > 0)) return [3, 7];
                        elementId = 'menu_item_' + (element.parentId && element.parentId >= 0 ? element.parentId : '0') + '_' + element.id;
                        $image = void 0;
                        $btn = void 0;
                        $elm = void 0;
                        if (!parentElm) return [3, 4];
                        parentId = 'menu_item_' + (parentElm.parentId && parentElm.parentId >= 0 ? parentElm.parentId : '0') + '_' + parentElm.id;
                        $elm = $.parseHTML(NavMenu.SelectedTemplate.childElement.html);
                        $elm[0].setAttribute('id', elementId);
                        lastChild = $('#' + parentId + '_child_section').find('#' + parentId + '_child_section' + '-last-child');
                        firstChild = $('#' + parentId + '_child_section').find('#' + parentId + '_child_section' + '-first-child');
                        if (!firstChild || firstChild.length <= 0) {
                            $('#' + parentId + '_child_section').append('<i id="' + parentId + '_child_section' + '-first-child" class="first-child" >first child</i>');
                        }
                        if (!lastChild || lastChild.length <= 0) {
                            $('#' + parentId + '_child_section').append('<i id="' + parentId + '_child_section' + '-last-child" class="last-child" >last child</i>');
                        }
                        $($elm).insertAfter($('#' + parentId + '_child_section').find('#' + parentId + '_child_section' + '-first-child'));
                        $('#' + elementId).data('level', $('#' + parentId).data('level') + 1);
                        NavMenu.MenuMaxLevel = NavMenu.MenuMaxLevel > $('#' + elementId).data('level') ? NavMenu.MenuMaxLevel : $('#' + elementId).data('level');
                        $btn = $('#' + elementId).find(NavMenu.SelectedTemplate.childElement.selectorBtn);
                        $btn.attr({ 'id': elementId + '_child_control', 'title': element.description, 'href': element.target })
                            .addClass('anchor-' + $('#' + elementId).data('level')).addClass('gradient-animation');
                        if (element.iconHtml) {
                            $btn.find('span:first-of-type').html(element.iconHtml + '&nbsp;&nbsp;');
                        }
                        else if (element.iconUrl) {
                            $btn.find('span:first-of-type').html('<i class="fa-img fa-generic" style="background-image: url(/images/icons/success.svg);" ></i>' + '&nbsp;&nbsp;');
                        }
                        $btn.find('span:last-of-type').text(element.title);
                        $image = $('#' + elementId).find('.img-box');
                        $image.append('<img class="img-responsive" src="/images/icons/loading_animation.gif" />');
                        if (element.imageUrl) {
                            $image.find('img').attr('src', element.imageUrl);
                        }
                        if (!(element.menuItems && element.menuItems.length >= 1)) return [3, 3];
                        $childCaret = $('#' + elementId + '_child_caret');
                        if (!($childCaret.length <= 0)) return [3, 2];
                        $childCaret = $('<i class="fa fa-caret-right child-caret" ></i>');
                        $('#' + elementId).find(NavMenu.SelectedTemplate.childElement.selectorBtn).append($childCaret);
                        _menuControlOption = new MenuControlOption();
                        _menuControlOption.menuLevel = $('#' + elementId).data('level');
                        _menuControlOption.elementSelector = '#' + $('#' + parentId + '_child_section').attr('id');
                        _menuControlOption.btnSelector = '#' + elementId + '_child_control';
                        _menuControlOption.targetSelector = '#' + elementId + '_child_section';
                        _b = (_a = $childCaret).on;
                        _c = ['click'];
                        _d = { data: _menuControlOption };
                        return [4, NavMenu.ShowHideChildSection];
                    case 1:
                        _b.apply(_a, _c.concat([(_d.handler = _j.sent(), _d)]));
                        _j.label = 2;
                    case 2:
                        $childSection = $('#' + elementId + '_child_section');
                        if ($childSection.length <= 0) {
                            $childSection = $('<div class="child-section collapse in" ></div>');
                            $childSection.attr('id', elementId + '_child_section').addClass('level-' + $('#' + elementId).data('level'));
                            lastChild_1 = $('#' + parentId + '_child_section').find('#' + parentId + '_child_section' + '-last-child');
                            firstChild_1 = $('#' + parentId + '_child_section').find('#' + parentId + '_child_section' + '-first-child');
                            if (!firstChild_1 || firstChild_1.length <= 0) {
                                $('#' + parentId + '_child_section').append('<i id="' + parentId + '_child_section' + '-first-child" class="first-child" >first child</i>');
                            }
                            if (!lastChild_1 || lastChild_1.length <= 0) {
                                $('#' + parentId + '_child_section').append('<i id="' + parentId + '_child_section' + '-last-child" class="last-child" >last child</i>');
                            }
                            $childSection.insertBefore($('#' + parentId + '_child_section').find('#' + parentId + '_child_section' + '-last-child'));
                        }
                        _j.label = 3;
                    case 3: return [3, 7];
                    case 4:
                        $elm = $.parseHTML(NavMenu.SelectedTemplate.rootElement.html);
                        $elm[0].setAttribute('id', elementId);
                        lastChild = $(NavMenu.SiteNavigationModel.selectorBase).find('#selectorBase-last-child');
                        firstChild = $(NavMenu.SiteNavigationModel.selectorBase).find('#selectorBase-first-child');
                        if (!firstChild || firstChild.length <= 0) {
                            $(NavMenu.SiteNavigationModel.selectorBase).append('<i id="selectorBase-first-child" class="first-child" >first child</i>');
                        }
                        if (!lastChild || lastChild.length <= 0) {
                            $(NavMenu.SiteNavigationModel.selectorBase).append('<i id="selectorBase-last-child" class="last-child" >last child</i>');
                        }
                        $($elm).insertAfter($(NavMenu.SiteNavigationModel.selectorBase).find('#selectorBase-first-child'));
                        $('#' + elementId).data('level', 0);
                        NavMenu.MenuMaxLevel = NavMenu.MenuMaxLevel > $('#' + elementId).data('level') ? NavMenu.MenuMaxLevel : $('#' + elementId).data('level');
                        $btn = $('#' + elementId).find(NavMenu.SelectedTemplate.rootElement.selectorBtn);
                        $btn.attr({ 'id': elementId + '_child_control', 'title': element.description, 'href': element.target }).addClass('opened').addClass('anchor-' + $('#' + elementId).data('level'));
                        if (element.iconHtml) {
                            $btn.find('span:first-of-type').html(element.iconHtml + '&nbsp;&nbsp;').addClass('span-item');
                        }
                        else if (element.iconUrl) {
                            $btn.find('span:first-of-type').html('<i class="fa-img fa-generic" style="background-image: url(' + element.iconUrl + ');" ></i>' + '&nbsp;&nbsp;')
                                .addClass('span-item');
                        }
                        $btn.find('span:last-of-type').text(element.title).addClass('span-item');
                        if (!(element.menuItems && element.menuItems.length >= 1)) return [3, 7];
                        $childCaret = $('#' + elementId + '_child_caret');
                        if (!($childCaret.length <= 0)) return [3, 6];
                        $childCaret = $('<i class="fa fa-caret-right child-caret" ></i>');
                        $childCaret.addClass('span-item');
                        $('#' + elementId).find(NavMenu.SelectedTemplate.rootElement.selectorBtn).append($childCaret);
                        _menuControlOption = new MenuControlOption();
                        _menuControlOption.menuLevel = $('#' + elementId).data('level');
                        _menuControlOption.elementSelector = '#' + elementId;
                        _menuControlOption.btnSelector = '#' + elementId + '_child_control';
                        _menuControlOption.targetSelector = '#' + elementId + '_child_section';
                        _f = (_e = $childCaret).on;
                        _g = ['click'];
                        _h = { data: _menuControlOption };
                        return [4, NavMenu.ShowHideChildSection];
                    case 5:
                        _f.apply(_e, _g.concat([(_h.handler = _j.sent(), _h)]));
                        _j.label = 6;
                    case 6:
                        $childSection = $('#' + elementId + '_child_section');
                        if ($childSection.length <= 0) {
                            $childSection = $('<div class="child-section collapse" ></div>');
                            $childSection.attr('id', elementId + '_child_section').addClass('level-' + $('#' + elementId).data('level'));
                            lastChild_2 = $('#' + elementId).find('#' + elementId + '-last-child');
                            firstChild_2 = $('#' + elementId).find('#' + elementId + '-first-child');
                            if (!firstChild_2 || firstChild_2.length <= 0) {
                                $('#' + elementId).append('<i id="' + elementId + '-first-child" class="first-child" >first child</i>');
                            }
                            if (!lastChild_2 || lastChild_2.length <= 0) {
                                $('#' + elementId).append('<i id="' + elementId + '-last-child" class="last-child" >last child</i>');
                            }
                            $childSection.insertBefore($('#' + elementId).find('#' + elementId + '-last-child'));
                        }
                        _j.label = 7;
                    case 7: return [2];
                }
            });
        });
    };
    NavMenu.prototype.ShowHideChildSection = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, NavMenu.ShowHideChildSection(event)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NavMenu.ShowHideChildSection = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _menuControlOption, ifExpanded, i;
            return __generator(this, function (_a) {
                event ? event.preventDefault() : "";
                if (event.data) {
                    _menuControlOption = new MenuControlOption(event.data);
                    if (_menuControlOption.elementSelector && _menuControlOption.btnSelector) {
                        ifExpanded = $(_menuControlOption.elementSelector).find(_menuControlOption.btnSelector).hasClass('opened');
                        if (ifExpanded) {
                            for (i = NavMenu.MenuMaxLevel; i >= 0; i--) {
                                if (i >= _menuControlOption.menuLevel) {
                                    $(_menuControlOption.elementSelector).find('.level-' + i).removeClass('in').addClass('in');
                                    $(_menuControlOption.elementSelector).find('.anchor-' + i).removeClass('opened gradient-animation-light').addClass('gradient-animation')
                                        .find('span,i').removeClass('span-item');
                                }
                            }
                        }
                        else {
                            if (_menuControlOption.targetSelector) {
                                $(_menuControlOption.targetSelector).siblings('.level-' + _menuControlOption.menuLevel).removeClass('in').addClass('in');
                                $(_menuControlOption.targetSelector).removeClass('in');
                                $(_menuControlOption.elementSelector).find('.anchor-' + _menuControlOption.menuLevel)
                                    .removeClass('opened gradient-animation-light').addClass('gradient-animation')
                                    .find('span,i').removeClass('span-item');
                                $(_menuControlOption.elementSelector).find(_menuControlOption.btnSelector)
                                    .removeClass('gradient-animation').addClass('opened gradient-animation-light')
                                    .find('span,i').addClass('span-item');
                            }
                        }
                    }
                }
                return [2];
            });
        });
    };
    NavMenu.prototype.RenderModification = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, NavMenu.RenderModification()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NavMenu.RenderModification = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (NavMenu.MenuMaxLevel > 0) {
                }
                return [2];
            });
        });
    };
    NavMenu.prototype.ToggleNav = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, NavMenu.ToggleNav(event)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NavMenu.ToggleNav = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var $this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $this = event ? $(event.target) : undefined;
                        $this = $this.is('.span-item') ? $this : $this.find('.span-item');
                        if (!($this && $this.length > 0)) return [3, 4];
                        if (!($this.text() === '☰' || !$this.data('expanded'))) return [3, 2];
                        return [4, NavMenu.OpenNav(undefined, $this)];
                    case 1:
                        _a.sent();
                        return [3, 4];
                    case 2: return [4, NavMenu.CloseNav(undefined, $this, undefined)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    NavMenu.prototype.OpenNav = function (event, target) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, NavMenu.OpenNav(event, target)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NavMenu.OpenNav = function (event, target) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var $this, $parent_1, options_1, optionString, elms, i, $elm, t0_2;
            return __generator(this, function (_a) {
                $this = event ? $(event.target) : target ? $(target) : undefined;
                if ($this && $this.length > 0) {
                    $parent_1 = $this.data('$parent') || $($this.data('parent')) || undefined;
                    if ($parent_1 && $parent_1.length > 0) {
                        options_1 = ($parent_1.data('options')) || undefined;
                        if (!options_1 || typeof (options_1) === 'string') {
                            optionString = $parent_1.data('options') || '';
                            optionString = optionString && optionString.toString().replace(/\'/g, '\"');
                            try {
                                options_1 = JSON.parse(optionString);
                            }
                            catch (e) {
                                console.log(e);
                                return [2];
                            }
                        }
                        if (options_1.elements && options_1.elements.length > 2) {
                            elms = options_1.elements.split(',');
                            for (i = 0; i < elms.length; i++) {
                                $elm = $parent_1.find(elms[i]);
                                if ($elm && $elm.length > 0) {
                                    $elm.addClass('active');
                                }
                            }
                        }
                        options_1.$target = $('.' + $parent_1.attr('id'));
                        options_1.$parent = $parent_1;
                        options_1.$target.data({ '$parent': $parent_1, 'expanded': true }).text('X');
                        $parent_1.data('options', options_1);
                        t0_2 = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!$parent_1.hasClass('in')) {
                                            $parent_1.attr({ 'aria-expanded': true }).addClass('in');
                                        }
                                        if (options_1.fullScreen && options_1.fullScreen.flag) {
                                            $('body').css('overflow', 'hidden');
                                        }
                                        return [4, NavMenu.InitToolbar(undefined, undefined, options_1.$parent)];
                                    case 1:
                                        _a.sent();
                                        return [4, NavMenu.AutoClose(undefined, undefined, options_1.$parent)];
                                    case 2:
                                        _a.sent();
                                        clearTimeout(t0_2);
                                        return [2];
                                }
                            });
                        }); }, 500);
                    }
                }
                return [2];
            });
        });
    };
    NavMenu.prototype.InitToolbar = function (event, target, parent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, NavMenu.InitToolbar(event, target, parent)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NavMenu.InitToolbar = function (event, target, parent) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var $parent, $this, navOptions, _options_1, _id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $parent = $(parent);
                        if (!$parent || $parent.length <= 0) {
                            $this = event ? $(event.target) : target ? $(target) : undefined;
                            if (!$this || $this.length <= 0) {
                                return [2];
                            }
                            $parent = $this.data('$parent') || $($this.data('parent')) || undefined;
                        }
                        navOptions = $parent.data('options');
                        if (!navOptions) return [3, 4];
                        if (!navOptions.toolbarOptions) return [3, 2];
                        return [4, Toolbar.SetCoordinate(navOptions.toolbarOptions, function (resultOptions) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    navOptions.toolbarOptions = resultOptions;
                                    $parent.data({ 'options': navOptions });
                                    return [2];
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3, 4];
                    case 2:
                        _options_1 = new ToolbarOptions();
                        _options_1.$container = $(navOptions.$parent);
                        _options_1.draggable = true;
                        _options_1.withinBoundary = true;
                        _id = _options_1.$container.attr('id') || 'my-' + Math.floor(Math.random() * 20);
                        _options_1.target = '#toolbar-' + _id;
                        _options_1.$target = $('<div id="' + _options_1.target + '" class="nav-toolbar active" ></div>');
                        _options_1.body = '#body-' + _id;
                        _options_1.$body = $('<div id="' + _options_1.body + '" class="toolbar-body" ></div>');
                        _options_1.dragSelector = '#drag-selector-' + _id;
                        _options_1.$dragSelector = $('<div id="' + _options_1.dragSelector + '" class="toolbar-drag-selector" >' +
                            '<i class="fa fa fa-arrows" aria-hidden="true"></i></div>');
                        return [4, NavMenu.InitTools(navOptions, function (navOptions1) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var i, $control, _a, _b, _c;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            if (!(navOptions1 && navOptions1 != undefined)) return [3, 3];
                                            navOptions = navOptions1;
                                            for (i = 0; i < navOptions.$controls.length; i++) {
                                                $(navOptions.$controls[i]).appendTo(_options_1.$body);
                                            }
                                            return [4, Toolbar.InitToolbar(_options_1, function (resultOptions) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        navOptions ? navOptions.toolbarOptions = resultOptions : '';
                                                        return [2];
                                                    });
                                                }); })];
                                        case 1:
                                            _d.sent();
                                            navOptions.elements += ',.nav-toolbar';
                                            navOptions.$parent.data({ 'options': navOptions });
                                            $control = $('<div class="control toolbar-base">+</div>');
                                            _b = (_a = $control.attr({ title: 'Click to view toolbar' })
                                                .data({ 'parent': navOptions.parent, '$parent': navOptions.$parent })).on;
                                            _c = ['click'];
                                            return [4, NavMenu.InitToolbar];
                                        case 2:
                                            _b.apply(_a, _c.concat([_d.sent()]));
                                            $control.prependTo($(navOptions.$parent).find('nav'));
                                            _d.label = 3;
                                        case 3: return [2];
                                    }
                                });
                            }); })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    NavMenu.prototype.InitTools = function (navOptions, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, NavMenu.InitTools(navOptions)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NavMenu.InitTools = function (navOptions, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var $navTool, _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!navOptions) return [3, 6];
                        if (!(navOptions.$controls && navOptions.$controls.length > 0)) return [3, 1];
                        return [3, 4];
                    case 1:
                        navOptions.$controls = [];
                        $navTool = new NavMenuTool(undefined, true, '#auto-close', '#delay-secs');
                        $navTool.$control = $('<div id="' + $navTool.control.toString().replace('#', '') + '" class="control"></div>');
                        _b = (_a = $navTool.$control.attr({ title: 'Auto Close Menu?' })
                            .data({ 'parent': navOptions.parent, '$parent': navOptions.$parent })).on;
                        _c = ['click'];
                        return [4, NavMenu.SetAutoClose];
                    case 2:
                        _b.apply(_a, _c.concat([_g.sent()]));
                        $('<i class="fa" aria-hidden="true"></i>').addClass($navTool && ($navTool.flag === true) ? ' fa-unlock' : ' fa-lock')
                            .appendTo($navTool.$control);
                        navOptions.$controls.push($navTool.$control);
                        $navTool.$inputControl = $('<div id="' + $navTool.inputControl.toString().replace('#', '') + '" class="control"></div>');
                        $('<input type="tel" class="fa" />').attr({ title: 'Set null/empty to remove timer', maxLength: 2, max: 99 })
                            .data({ 'parent': navOptions.parent, '$parent': navOptions.$parent })
                            .val(9).prop('disabled', !$navTool.flag).appendTo($navTool.$inputControl);
                        navOptions.$controls.push($navTool.$inputControl);
                        navOptions.autoClose = $navTool;
                        $navTool = new NavMenuTool(undefined, false, '#full-screen');
                        $navTool.$control = $('<div id="' + ''.toString().replace('#', '') + '" class="control"></div>');
                        _e = (_d = $navTool.$control.attr({ title: 'FullScreen ? Restore' })
                            .data({ 'parent': navOptions.parent, '$parent': navOptions.$parent })).on;
                        _f = ['click'];
                        return [4, NavMenu.SetFullScreen];
                    case 3:
                        _e.apply(_d, _f.concat([_g.sent()]));
                        $('<i class="fa" aria-hidden="true"></i>').addClass($navTool && ($navTool.flag === true) ? ' fa-window-restore' : ' fa-arrows-alt')
                            .appendTo($navTool.$control);
                        navOptions.$controls.push($navTool.$control);
                        navOptions.fullScreen = $navTool;
                        _g.label = 4;
                    case 4:
                        if (!(typeof (callback) === 'function')) return [3, 6];
                        return [4, callback(navOptions)];
                    case 5:
                        _g.sent();
                        _g.label = 6;
                    case 6: return [2];
                }
            });
        });
    };
    NavMenu.prototype.AutoClose = function (event, target, parent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, NavMenu.AutoClose(event, target, parent)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NavMenu.AutoClose = function (event, target, parent) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var $parent, $this, options, delaySecs, _a, $counter, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        $parent = $(parent);
                        if (!$parent || $parent.length <= 0) {
                            $this = event ? $(event.target) : target ? $(target) : undefined;
                            if (!$this || $this.length <= 0) {
                                return [2];
                            }
                            $parent = $this.data('$parent') || $($this.data('parent')) || undefined;
                        }
                        options = $parent.data('options');
                        if (!options) return [3, 7];
                        if (!(options.autoClose && options.autoClose.flag === true)) return [3, 7];
                        delaySecs = options.autoClose.$inputControl ? options.autoClose.$inputControl.find('input').val() : 0;
                        if (!(delaySecs && +delaySecs > 0)) return [3, 5];
                        if (!(options.timerCounter && options.timerCounter.options)) return [3, 2];
                        _a = options.timerCounter.options;
                        return [4, options.timerCounter.CountDayHourMinSec(options.timerCounter.options.selectorObj, options.timerCounter.options.counterObj, 0, 0, 0, +delaySecs, function (response) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!response) return [3, 2];
                                            return [4, NavMenu.CloseNav(undefined, undefined, $parent)];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.activeCounterId = _f.sent();
                        $parent.data({ 'options': options });
                        return [3, 4];
                    case 2:
                        options.timerCounter = new TimerCounter();
                        options.timerCounter.options.counterObj = 'Counter_' + options.parent.replace(/\#/, '');
                        $counter = $('<i class="counter-on-nav zoom-out"></i>');
                        $('<i class="secs-time"></i>').appendTo($counter);
                        $counter.attr({ id: options.timerCounter.options.counterObj, title: 'NavMenu will close automatically in...' })
                            .removeClass('zoom-out').addClass('zoom-in').appendTo($(options.$parent).find('nav'));
                        options.timerCounter.options.selectorObj = $counter;
                        _b = options.timerCounter.options;
                        return [4, options.timerCounter.CountDayHourMinSec(options.timerCounter.options.selectorObj, options.timerCounter.options.counterObj, 0, 0, 0, +delaySecs, function (response) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!response) return [3, 2];
                                            return [4, NavMenu.CloseNav(undefined, undefined, $parent)];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2];
                                    }
                                });
                            }); })];
                    case 3:
                        _b.activeCounterId = _f.sent();
                        $parent.data({ 'options': options });
                        _f.label = 4;
                    case 4: return [3, 7];
                    case 5:
                        _d = (_c = $(document)).one;
                        _e = ['click', { '$parent': $parent }];
                        return [4, NavMenu.CloseNav];
                    case 6:
                        _d.apply(_c, _e.concat([_f.sent()]));
                        _f.label = 7;
                    case 7: return [2];
                }
            });
        });
    };
    NavMenu.prototype.CloseNav = function (event, target, parent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, NavMenu.CloseNav(event, target, parent)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NavMenu.CloseNav = function (event, target, parent) {
        return __awaiter(this, void 0, void 0, function () {
            var $parent, $this, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!event) return [3, 2];
                        return [4, NavMenu.CloseOnEvent(event)];
                    case 1:
                        _a.sent();
                        return [3, 4];
                    case 2:
                        $parent = $(parent);
                        if (!$parent || $parent.length <= 0) {
                            $this = target ? $(target) : undefined;
                            if (!$this || $this.length <= 0) {
                                return [2];
                            }
                            $parent = $this.data('$parent') || $($this.data('parent')) || undefined;
                        }
                        options = $parent && $parent.data('options');
                        return [4, NavMenu.CloseOnOptions(options)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    NavMenu.prototype.CloseOnEvent = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, NavMenu.CloseOnEvent(event)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NavMenu.CloseOnEvent = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var $this, $parent, $parent_2, options, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!event) return [3, 4];
                        $this = $(event.target) || undefined;
                        if (!($this && $this.length > 0)) return [3, 4];
                        if (!(event && event.data)) return [3, 4];
                        $parent = $this.parents('.nav-body');
                        if (!(!$parent || $parent.length <= 0)) return [3, 2];
                        $parent_2 = event.data.$parent || $(event.data.parent);
                        if (!$parent_2 || $parent_2.length <= 0) {
                            $parent_2 = $this.data('$parent') || $($this.data('parent')) || undefined;
                        }
                        options = $parent_2 && $parent_2.data('options');
                        return [4, NavMenu.CloseOnOptions(options)];
                    case 1:
                        _d.sent();
                        return [3, 4];
                    case 2:
                        _b = (_a = $(document)).one;
                        _c = ['click', event && event.data];
                        return [4, NavMenu.CloseNav];
                    case 3:
                        _b.apply(_a, _c.concat([_d.sent()]));
                        _d.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    NavMenu.prototype.CloseOnOptions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, NavMenu.CloseOnOptions(options)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NavMenu.CloseOnOptions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var $this, $parent_3, t0_3;
            return __generator(this, function (_a) {
                if (options) {
                    $this = $(options.$target) || undefined;
                    if ($this && $this.length > 0) {
                        $parent_3 = $(options.$parent) || undefined;
                        if ($parent_3 && $parent_3.length > 0) {
                            $this.data({ 'expanded': false }).text('☰');
                            $parent_3.find('.active').removeClass('active');
                            t0_3 = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    if ($parent_3.hasClass('in')) {
                                        $parent_3.removeClass('in').attr({ 'aria-expanded': false });
                                    }
                                    if (options.fullScreen && options.fullScreen.flag === true) {
                                        $('body').css('overflowY', 'auto');
                                    }
                                    clearTimeout(t0_3);
                                    return [2];
                                });
                            }); }, 500);
                            if (options.timerCounter && options.timerCounter.options) {
                                clearInterval(options.timerCounter.options.activeCounterId);
                                $(options.timerCounter.options.selectorObj).children('[class$="-time"]').text('');
                            }
                        }
                    }
                }
                return [2];
            });
        });
    };
    NavMenu.prototype.SetAutoClose = function (event, _options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, NavMenu.SetAutoClose(event, _options)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NavMenu.SetAutoClose = function (event, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var $this, $parent;
            return __generator(this, function (_a) {
                $this = event ? $(event.target) : undefined;
                $this = $this.is('.control') ? $this : $this.parent('.control') || $this.find('.control');
                if ($this && $this.length > 0) {
                    $parent = $this.data('$parent') || $($this.data('parent')) ||
                        $this.parents('.nav-body') || undefined;
                    if ($parent && $parent.length > 0) {
                        if (_options) {
                        }
                        else {
                            _options = ($parent.data('options'));
                        }
                        if (_options) {
                            if (_options.autoClose) {
                                if (_options.autoClose.flag) {
                                    _options.autoClose.$control.find('i').removeClass('fa-unlock').addClass('fa-lock');
                                }
                                else {
                                    _options.autoClose.$control.find('i').removeClass('fa-lock').addClass('fa-unlock');
                                }
                                _options.autoClose.flag = !(_options.autoClose.flag);
                                $parent.data({ 'options': _options });
                                $this.data({ '$parent': $parent });
                            }
                        }
                    }
                }
                return [2];
            });
        });
    };
    NavMenu.prototype.SetFullScreen = function (event, _options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, NavMenu.SetFullScreen(event, _options)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NavMenu.SetFullScreen = function (event, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var $this, $parent;
            return __generator(this, function (_a) {
                $this = event ? $(event.target) : undefined;
                $this = $this.is('.control') ? $this : $this.parent('.control') || $this.find('.control');
                if ($this && $this.length > 0) {
                    $parent = $this.data('$parent') || $($this.data('parent')) ||
                        $this.parents('.nav-body') || undefined;
                    if ($parent && $parent.length > 0) {
                        if (_options) {
                        }
                        else {
                            _options = ($parent.data('options'));
                        }
                        if (_options) {
                            if (_options.fullScreen) {
                                if (_options.fullScreen.flag === false) {
                                    _options.fullScreen.$control.find('i').removeClass('fa-arrows-alt').addClass('fa-window-restore');
                                    $parent.addClass('full-screen');
                                    $('body').css('overflow', 'hidden');
                                    _options.fullScreen.flag = true;
                                }
                                else {
                                    $('body').css('overflowY', 'auto');
                                    _options.fullScreen.$control.find('i').removeClass('fa-window-restore').addClass('fa-arrows-alt');
                                    $parent.removeClass('full-screen');
                                    _options.fullScreen.flag = false;
                                }
                                $parent.data({ 'options': _options });
                                $this.data({ '$parent': $parent });
                            }
                        }
                    }
                }
                return [2];
            });
        });
    };
    NavMenu.IsInitialized = false;
    NavMenu.MenuItemsRendered = [];
    NavMenu.MenuItemsNonRendered = [];
    NavMenu.MenuMaxLevel = 0;
    return NavMenu;
}());
(function (NavMenu) {
    NavMenu.Initialize();
})(NavMenu || (NavMenu = {}));

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
var ToolbarOptions = (function () {
    function ToolbarOptions() {
    }
    return ToolbarOptions;
}());
var Toolbar = (function () {
    function Toolbar() {
    }
    Toolbar.prototype.InitToolbar = function (options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Toolbar.InitToolbar(options, callback)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Toolbar.InitToolbar = function (options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (options) {
                            _options = options;
                        }
                        else {
                            _options = new ToolbarOptions();
                            _options.draggable = true;
                            _options.container = 'body';
                            _options.$container = $('body');
                            _options.target = '#my-toolbar';
                            _options.$target = $('<div id="my-toolbar" class="my-toolbar" ></div>');
                            _options.body = '#my-body';
                            _options.$body = $('<div id="my-body" class="my-body" ></div>');
                            _options.dragSelector = '#my-drag-selector';
                            _options.$dragSelector = $('<div id="my-drag-selector" class="my-drag-selector" ><i class="fa fa-home" aria-hidden="true"></i></div>');
                        }
                        return [4, Toolbar.CreateToolbar(_options, function (resultOptions) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4, Toolbar.SetCoordinate(resultOptions)];
                                        case 1:
                                            _a.sent();
                                            return [4, Toolbar.DragElement(resultOptions, function (resultOptions1) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                if (!(typeof (callback) === 'function')) return [3, 2];
                                                                return [4, callback(resultOptions1)];
                                                            case 1:
                                                                _a.sent();
                                                                _a.label = 2;
                                                            case 2: return [2];
                                                        }
                                                    });
                                                }); })];
                                        case 2:
                                            _a.sent();
                                            return [2];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Toolbar.prototype.CreateToolbar = function (options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Toolbar.CreateToolbar(options, callback)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Toolbar.CreateToolbar = function (options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!options) return [3, 2];
                        options.draggable && options.$dragSelector.appendTo(options.$target);
                        options.$body.appendTo(options.$target);
                        options.$target.appendTo(options.$container);
                        if (!(typeof (callback) === 'function')) return [3, 2];
                        return [4, callback(options)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    Toolbar.prototype.SetCoordinate = function (_options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Toolbar.SetCoordinate(_options, callback)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Toolbar.SetCoordinate = function (_options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var target_offset, container_offset, container_W, container_H, target_W, target_H;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_options) return [3, 3];
                        target_offset = _options.$target.offset() || { top: 0, left: 0 };
                        if (_options.withinBoundary) {
                            container_offset = $(_options.$container).offset() || { top: 0, left: 0 };
                            container_W = $(_options.$container).width() || 0;
                            container_H = $(_options.$container).height() || 0;
                            target_W = $(_options.$target).width() || 0;
                            target_H = $(_options.$target).height() || 0;
                            if (target_offset.top < container_offset.top) {
                                target_offset.top = container_offset.top;
                            }
                            else if ((target_offset.top + target_H) > (container_offset.top + container_H)) {
                                target_offset.top = (container_offset.top + container_H) - target_H;
                            }
                            if (target_offset.left < container_offset.left) {
                                target_offset.left = container_offset.left;
                            }
                            else if ((target_offset.left + target_W) > (container_offset.left + container_W)) {
                                target_offset.left = (container_offset.left + container_W) - target_W;
                            }
                            _options.$target.css({
                                top: target_offset.top.toString() + 'px', left: target_offset.left.toString() + 'px'
                            });
                        }
                        if (!(typeof (callback) === 'function')) return [3, 2];
                        return [4, callback(_options)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [3, 5];
                    case 3:
                        if (!(typeof (callback) === 'function')) return [3, 5];
                        return [4, callback(new ToolbarOptions())];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2];
                }
            });
        });
    };
    Toolbar.prototype.DragElement = function (options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Toolbar.DragElement(options, callback)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Toolbar.DragElement = function (options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        options.startCOOR = { X: 0, Y: 0 };
                        options.endCOOR = { X: 0, Y: 0 };
                        if (!(options.$dragSelector && options.$dragSelector.length > 0)) return [3, 2];
                        _b = (_a = options.$dragSelector).on;
                        _c = ['mousedown', { options: options, callback: callback }];
                        return [4, Toolbar.DragMouseDown];
                    case 1:
                        _b.apply(_a, _c.concat([_g.sent()]));
                        return [3, 4];
                    case 2:
                        _e = (_d = options.$target).on;
                        _f = ['mousedown', { options: options, callback: callback }];
                        return [4, Toolbar.DragMouseDown];
                    case 3:
                        _e.apply(_d, _f.concat([_g.sent()]));
                        _g.label = 4;
                    case 4:
                        if (!(typeof (callback) === 'function')) return [3, 6];
                        return [4, callback(options)];
                    case 5:
                        _g.sent();
                        _g.label = 6;
                    case 6: return [2];
                }
            });
        });
    };
    Toolbar.prototype.DragMouseDown = function (event, options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Toolbar.DragMouseDown(event, options, callback)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Toolbar.DragMouseDown = function (event, options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _options, _callback, e, _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _options = options || event && event.data.options;
                        _callback = callback || event && event.data.callback;
                        e = event || window.event;
                        _options.startCOOR = { X: e.clientX, Y: e.clientY };
                        _b = (_a = $(document)).on;
                        _c = ['mouseup', { options: _options, callback: _callback }];
                        return [4, Toolbar.CloseDragElement];
                    case 1:
                        _b.apply(_a, _c.concat([_g.sent()]));
                        _e = (_d = $(document)).on;
                        _f = ['mousemove', { options: _options, callback: _callback }];
                        return [4, Toolbar.ElementDrag];
                    case 2:
                        _e.apply(_d, _f.concat([_g.sent()]));
                        return [2];
                }
            });
        });
    };
    Toolbar.prototype.ElementDrag = function (event, options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Toolbar.ElementDrag(event, options, callback)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Toolbar.ElementDrag = function (event, options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _options, _callback, e;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _options = options || event && event.data.options;
                        _callback = callback || event && event.data.callback;
                        e = event || window.event;
                        return [4, Toolbar.SetCoordinate(_options, function (resultOptions) { return __awaiter(_this, void 0, void 0, function () {
                                var target_offset;
                                return __generator(this, function (_a) {
                                    target_offset = resultOptions.$target.offset() || { top: 0, left: 0 };
                                    _options.endCOOR = { X: _options.startCOOR.X - e.clientX, Y: _options.startCOOR.Y - e.clientY };
                                    _options.startCOOR = { X: e.clientX, Y: e.clientY };
                                    _options.$target.css({
                                        top: (target_offset.top - _options.endCOOR.Y).toString() + 'px', left: (target_offset.left - _options.endCOOR.X).toString() + 'px'
                                    });
                                    return [2];
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Toolbar.prototype.CloseDragElement = function (event, options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Toolbar.CloseDragElement(event, options, callback)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Toolbar.CloseDragElement = function (event, options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _options, _callback, e;
            return __generator(this, function (_a) {
                _options = options || event && event.data.options;
                _callback = callback || event && event.data.callback;
                e = event || window.event;
                $(document).off('mouseup');
                $(document).off('mousemove');
                return [2];
            });
        });
    };
    return Toolbar;
}());

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

"use strict";
var MyNotification = (function () {
    function MyNotification() {
    }
    MyNotification.prototype.RelocateNotificationZone = function (elem) {
        return MyNotification.RelocateNotificationZone(elem);
    };
    MyNotification.RelocateNotificationZone = function (elem) {
        var $this = $(elem);
        var id = $this.attr('id');
        var name = $this.attr('name');
        var modalId = 'modal_' + (id ? '_' + id : name ? '_' + name : '_unknownID');
        var $notifyZone = $('#' + modalId);
        var _height = $notifyZone.height();
        _height = _height ? _height : 75;
        var _offset = $this && $this.offset();
        var _left = _offset && _offset.left;
        var _top = (_offset && _offset.top || 0) - _height - ($(window).scrollTop() || 0);
        $notifyZone.css({ left: _left, top: _top });
    };
    return MyNotification;
}());
$(function (e) {
    var _newTop;
    var _newHeight = 0;
    var _validationHeight;
    $(document).find('span.field-validation-valid, span.field-validation-error').addClass('hidden');
    $('.form-control, input, select').on('focus', function (e) {
        var $this = $(e.target);
        var id = $this.attr('id');
        var title = $this.attr('title');
        var placeholder = $this.attr('placeholder');
        var name = $this.attr('name');
        var type = $this.attr('type');
        var $validation = $('.field-validation-error').find('#' + id + '-error');
        title = title ? title : name ? name : placeholder ? placeholder : '';
        placeholder = placeholder ? placeholder : name ? name : title ? title : '';
        var modalId = 'modal_' + (id ? '_' + id : name ? '_' + name : '_unknownID');
        var $notifyZone = $('.form-control-modal');
        var $close = $notifyZone.find('.btn-close');
        var _width = $this.width();
        var _height = ($notifyZone.height() || 0) - (_newHeight ? _newHeight : 0);
        _width = ((_width || 0) < 200) ? 200 : ((_width || 0) + 26);
        _height = (_height > 75) ? _height : 75;
        var _offset = $this && $this.offset();
        var _left = _offset && _offset.left;
        var _top = (_offset && _offset.top || 0) - _height - ($(window).scrollTop() || 0);
        if ($notifyZone.length > 0) {
            $notifyZone.removeClass('zoom-in').addClass('zoom-out').remove();
        }
        $notifyZone = $('<div id="' + modalId + '" class="modal text-center form-control-modal zoom-in"' +
            'style="max-width:' + _width + 'px !important; padding: 0 !important;">' +
            '</div>');
        $close = $('<a class="pull-right btn-close"></a>');
        $notifyZone.append($close);
        $('<label class="form-control title" style="background: none !important; border: none !important;color: white"></label>').appendTo($notifyZone);
        $('<div class="text-danger validation" validation-for="' + id + '" style="background: none !important; color: red;"></div>').appendTo($notifyZone);
        $('<input type="text" class="form-control new-value" readonly="readonly" />').appendTo($notifyZone);
        $('.validation').text($('.field-validation-valid').text());
        $notifyZone.css({ left: _left, top: _top, 'height': _height, 'overflow': 'hidden' });
        $this.parent().prepend($notifyZone);
        $notifyZone.find('.new-value').attr('placeholder', placeholder);
        $notifyZone.find('.title').text(title);
        $notifyZone.find('.validation').html($validation.html());
        _validationHeight = $notifyZone.find('.validation').height();
        _newTop = _top - (_validationHeight ? _validationHeight : 0);
        _newHeight = _height + (_validationHeight ? _validationHeight : 0);
        $notifyZone.css({ top: _newTop ? _newTop : _top, height: _newHeight ? _newHeight : _height });
        $close.click(function (e) {
            $notifyZone.removeClass('zoom-in').addClass('zoom-out');
        });
        $this.on('blur', function (e) {
            $notifyZone.removeClass('zoom-in').addClass('zoom-out');
        });
        $this.parents().on('ontouchmove, scroll', function (e) {
            MyNotification.RelocateNotificationZone($this);
        });
        var t1 = setTimeout(function (e) {
            clearTimeout(t1);
            MyNotification.RelocateNotificationZone($this);
        }, 500);
    });
    document.onfullscreenchange = function (e) {
        MyNotification.RelocateNotificationZone($(document.activeElement));
    };
    document.ontouchmove = function (e) {
        MyNotification.RelocateNotificationZone($(document.activeElement));
    };
    if (document.activeElement) {
        var _offset = $(document.activeElement).offset();
        $('.form-control-modal').css({ top: (_offset && _offset.top || 0), left: (_offset && _offset.left || 0) });
    }
});

"use strict";
var MyResponse = (function () {
    function MyResponse(myResponse, result, message) {
        this.result = result ? true : (myResponse ? (myResponse.result ? true : false) : false);
        this.resultObj = (myResponse && myResponse.result) ? ((Object.keys(myResponse.result).length > 0) ?
            new JsonResultStatus(myResponse.result) : new JsonResultStatus()) : new JsonResultStatus();
        this.data = (myResponse && myResponse.data) ? ((Object.keys(myResponse.data).length > 0) ? myResponse.data : null) : null;
        this.message = message ? message : (myResponse ? (myResponse.result ? myResponse.result.message : null) : null);
    }
    return MyResponse;
}());
var JsonResultFlag;
(function (JsonResultFlag) {
    JsonResultFlag[JsonResultFlag["Succeeded"] = 0] = "Succeeded";
    JsonResultFlag[JsonResultFlag["Failed"] = 1] = "Failed";
    JsonResultFlag[JsonResultFlag["Error"] = 2] = "Error";
    JsonResultFlag[JsonResultFlag["NotFound"] = 3] = "NotFound";
    JsonResultFlag[JsonResultFlag["DbRetry"] = 4] = "DbRetry";
    JsonResultFlag[JsonResultFlag["Existed"] = 5] = "Existed";
    JsonResultFlag[JsonResultFlag["Forbidden"] = 6] = "Forbidden";
    JsonResultFlag[JsonResultFlag["Empty"] = 7] = "Empty";
    JsonResultFlag[JsonResultFlag["TaskCompleted"] = 8] = "TaskCompleted";
    JsonResultFlag[JsonResultFlag["Redirect"] = 9] = "Redirect";
})(JsonResultFlag || (JsonResultFlag = {}));
;
var JsonResultStatus = (function () {
    function JsonResultStatus(result) {
        this.result = result && result.result;
        this.message = result && result.message;
        this.redirectUrl = result && result.redirectUrl;
        this.successList = result && result.successList;
        this.nonSuccessList = result && result.nonSuccessList;
        this.notFoundList = result && result.notFoundList;
        this.paramList = result && result.paramList;
        this.objectId = result && result.objectId;
        this.resultObjectId = result && result.resultObjectId;
        this.resultObjectString = result && result.resultObjectString;
    }
    JsonResultStatus.prototype.GetResultObject = function (resultObject) {
        return resultObject.GetItem(this.resultObjectId);
    };
    JsonResultStatus.prototype.SetResultObject = function (resultObject, value) {
        resultObject.SetItem(this.resultObjectId, value);
    };
    return JsonResultStatus;
}());

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
