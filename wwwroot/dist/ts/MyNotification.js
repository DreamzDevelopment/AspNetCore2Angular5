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
