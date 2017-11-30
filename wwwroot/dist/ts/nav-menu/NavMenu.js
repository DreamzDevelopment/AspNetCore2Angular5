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
