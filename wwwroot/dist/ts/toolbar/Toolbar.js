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
