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
var ModalMount = (function () {
    function ModalMount(model, modalContainerId, modalId, selector, autoClose, viewTime, forceHideTarget) {
        this.modalContainerId = modalContainerId || (model && model.modalContainerId) || '';
        this.modalId = modalId || (model && model.modalId) || '';
        this.selector = selector || (model && model.selector) || '';
        this.autoClose = autoClose || (model && model.autoClose) || true;
        this.viewTime = viewTime || (model && model.viewTime) || +'';
        this.forceHideTarget = forceHideTarget || (model && model.forceHideTarget) || true;
        this.formContainerId = (model && model.formContainerId) || '';
        this.formSelector = (model && model.formSelector) || '';
        this.formId = (model && model.formId) || '';
    }
    return ModalMount;
}());
var TimerInfo = (function () {
    function TimerInfo(model, counter, timer, counterFunc, timerFunc) {
        this.counter = counter || (model && model.counter);
        this.timer = timer || (model && model.timer);
        this.counterFunc = counterFunc || (model && model.counterFunc);
        this.timerFunc = timerFunc || (model && model.timerFunc);
    }
    return TimerInfo;
}());
var DimensionInfo = (function () {
    function DimensionInfo(model, top, left, width, height, forceDimension) {
        this.top = top || (model && model.top);
        this.left = left || (model && model.left);
        this.width = width || (model && model.width);
        this.height = height || (model && model.height);
        this.forceDimension = forceDimension || (model && model.forceDimension);
    }
    return DimensionInfo;
}());
var ModalInfo = (function () {
    function ModalInfo(modalInfo, modalMount, dimensionInfo, timerInfo) {
        this.modalMount = modalMount || (modalInfo && modalInfo.modalMount) || new ModalMount();
        this.dimensionInfo = dimensionInfo || (modalInfo && modalInfo.dimensionInfo) || new DimensionInfo();
        this.timerInfo = timerInfo || (modalInfo && modalInfo.timerInfo) || new TimerInfo();
    }
    return ModalInfo;
}());
var MyModal = (function () {
    function MyModal() {
    }
    MyModal.GetModal = function (modalSelector, modalId) {
        var _modalId = modalId;
        if (!_modalId) {
            var $info = modalSelector ? $('#' + modalSelector) : $('#modalInfo');
            _modalId = $info ? $info.attr('data-modal-id') : '';
        }
        var modal = _modalId ? $('#' + _modalId) : this.SetModal();
        return modal;
    };
    MyModal.SetModal = function (modal, id) {
        var $modal = modal ? $(modal) : $('.modal').first();
        var _id = id ? id : 'My_Modal_' + Math.floor(Math.random() * 20);
        $modal.attr('id', _id);
        MyModal.$Modal = $modal;
        MyModal.$TimerCounter = MyModal.$Modal.find('.timer-counter');
        return MyModal.$Modal;
    };
    MyModal.GetForm = function (formInfo, formId) {
        var _formId = formId;
        if (!_formId) {
            var $info = formInfo ? $('#' + formInfo) : $('#formInfo') || $('#modalInfo');
            _formId = $info ? $info.attr('data-form-id') : '';
        }
        var $form = _formId ? $('#' + _formId) : this.SetForm();
        return $form;
    };
    MyModal.SetForm = function (form, id) {
        var $form = form ? $(form) : $('form').first();
        var _id = id ? id : 'My_Form_' + Math.floor(Math.random() * 20);
        $form.attr('id', _id);
        return $form;
    };
    MyModal.GetActiveForm = function (modalInfo, modalId) {
        var $modal = $(MyModal.GetModal(modalInfo, modalId));
        var $form = $modal.find('form');
        return $form;
    };
    MyModal.InitModal = function (modal, modalInfo) {
        MyModal.ModalInfo = new ModalInfo(modalInfo);
        modal.data('modal-info', MyModal.ModalInfo);
    };
    MyModal.UpdateModalInfo = function (modal, modalInfo, clearFunc) {
        if (clearFunc === void 0) { clearFunc = true; }
        if (clearFunc) {
            var _modalInfo = MyModal.GetModalInfo(modal);
            if (_modalInfo && _modalInfo.timerInfo && _modalInfo.timerInfo.timerFunc) {
                _modalInfo.timerInfo.timerFunc();
            }
        }
        modal.data('modal-info', modalInfo);
    };
    MyModal.GetModalInfo = function (modal) {
        return new ModalInfo(modal.data('modal-info'));
    };
    MyModal.ShowModalForm = function (target, modal, top, left, width, height) {
        var _this = this;
        var $modal = $(modal);
        var $target = $(target);
        var $counter = $modal.find('.timer-counter');
        var modalInfo = MyModal.GetModalInfo(modal);
        if (modalInfo && modalInfo.timerInfo && modalInfo.timerInfo.timerFunc) {
            modalInfo.timerInfo.timerFunc();
        }
        if (modalInfo.modalMount.forceHideTarget) {
            $target.removeClass('zoom-in').addClass('zoom-out');
        }
        if (top == 'window' || left == 'window') {
            $modal.addClass('window');
            $('html,body').css({ overflow: 'hidden' });
        }
        else {
            $modal.removeClass('window');
            var _offset = $target && $target.offset();
            var _top = (top ? +top : ((_offset && _offset.top || 0) <= 0 ? 0 : (_offset && _offset.top || 0)));
            var _left = (left ? +left : ((_offset && _offset.left || 0) <= 0 ? 0 : (_offset && _offset.left || 0)));
            var _width = (MyModal.ModalInfo &&
                (MyModal.ModalInfo.dimensionInfo && MyModal.ModalInfo.dimensionInfo.forceDimension)
                && width) ? +width :
                width ? (+(width) < 250) ? 250 : +(width) : 0;
            var _height = (MyModal.ModalInfo &&
                (MyModal.ModalInfo.dimensionInfo && MyModal.ModalInfo.dimensionInfo.forceDimension)
                && height) ? +height :
                height ? (+(height) < 300) ? 300 : +(height) : 0;
            _width = _width > window.innerWidth ? window.innerWidth : _width;
            _left = _left + (($target.width() || 0) / 2) - 18;
            _left = _left - (_width / 2) < 0 ? 0 : _left - (_width / 2);
            _top = _top + (($target.height() || 0) / 2) - 10;
            _top = _top - (_height / 2) < 0 ? 0 : _top - (_height / 2);
            $modal.css({ top: _top + 'px', left: (_left - 5) + 'px', width: _width + 'px', height: _height + 'px' });
        }
        $modal.removeClass('zoom-out').addClass('zoom-in');
        $modal.find('.btn-close, .cancel').on('click', function (event) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, MyModal.CloseModal($modal, undefined, $target, modalInfo && modalInfo.timerInfo && modalInfo.timerInfo.counter, modalInfo && modalInfo.timerInfo && modalInfo.timerInfo.timer)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        }); });
        if (modalInfo && modalInfo.modalMount.autoClose) {
            var i_1 = modalInfo.modalMount.viewTime || 5;
            modalInfo.timerInfo.counterFunc = function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    $counter.text(--i_1);
                    return [2];
                });
            }); };
            modalInfo.timerInfo.counter = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, modalInfo.timerInfo.counterFunc()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            }); }, 1 * 1000);
            modalInfo.timerInfo.timerFunc = function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            clearInterval(modalInfo.timerInfo.counter);
                            clearTimeout(modalInfo.timerInfo.timer);
                            $counter.text('');
                            return [4, MyModal.CloseModal($modal, undefined, $target)];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            }); };
            modalInfo.timerInfo.timer = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, modalInfo.timerInfo.timerFunc()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            }); }, i_1 * 1000);
            MyModal.UpdateModalInfo(modal, modalInfo, false);
        }
    };
    MyModal.SetModalForm = function (modal, form, withEvent, deepCopy) {
        var $modal = $(modal);
        var $form = $(form);
        var $body = $modal.find('.modal-content, .modal-body');
        $body.html(' ');
        $(form).clone(withEvent, deepCopy).removeClass('hidden').appendTo($body);
        $body.find('.input-validation-error').removeClass('input-validation-error');
    };
    MyModal.CloseModal = function (modal, event, target, counter, timer) {
        return __awaiter(this, void 0, void 0, function () {
            var $modal, $target;
            return __generator(this, function (_a) {
                $modal = $(modal);
                $target = event ? $(event.target) : target ? $(target) : null;
                $modal.removeClass('zoom-in').addClass('zoom-out');
                $target && $target.removeClass('zoom-out').addClass('zoom-in');
                $modal.find('.timer-counter').text('');
                $('html,body').css({ overflow: 'auto' });
                clearInterval(counter);
                clearTimeout(timer);
                return [2];
            });
        });
    };
    MyModal.ModalInfo = new ModalInfo();
    return MyModal;
}());
