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
