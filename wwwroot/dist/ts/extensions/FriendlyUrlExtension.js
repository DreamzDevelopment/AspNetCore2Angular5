"use strict";
var FriendlyUrlExtension = (function () {
    function FriendlyUrlExtension() {
    }
    FriendlyUrlExtension.GetFriendlyTitle = function (title, _remapToAscii, _maxlength, _alphaCharOnly, _toLower, options) {
        if (_remapToAscii === void 0) { _remapToAscii = true; }
        if (_toLower === void 0) { _toLower = true; }
        if (!title) {
            return '';
        }
        var remapToAscii = _remapToAscii || (options && options.remapToAscii) || true;
        var maxlength = _maxlength || (options && options.alphaCharOnly) || undefined;
        var alphaCharOnly = _alphaCharOnly || (options && options) || undefined;
        var toLower = _toLower || (options && options.toLower) || true;
        var rawAsArray = options && options.rawAsArray || undefined;
        var rawAsString = options && options.rawAsString || undefined;
        title = (!rawAsArray && !rawAsString) ? title.trim() : title;
        var length = title.length;
        var prevdash = false;
        var stringBuilder = [];
        var c;
        for (var i = 0; i < length; ++i) {
            c = title[i];
            if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
                stringBuilder.push(c);
                prevdash = false;
            }
            else if (c >= 'A' && c <= 'Z') {
                if (toLower) {
                    stringBuilder.push(String.fromCharCode(c.charCodeAt(0) | 32));
                }
                else {
                    stringBuilder.push(c);
                }
                prevdash = false;
            }
            else if ((c == ' ') || (c == ',') || (c == '.') || (c == '/') || (c == '\\') || (c == '-') || (c == '_') || (c == '=')) {
                if (!prevdash && (stringBuilder.toString().length > 0)) {
                    stringBuilder.push('-');
                    prevdash = true;
                }
            }
            else if (!(alphaCharOnly) && (c.charCodeAt(0) >= 128)) {
                var previousLength = stringBuilder.toString().length;
                if (remapToAscii) {
                    stringBuilder.push(FriendlyUrlExtension.RemapInternationalCharToAscii(c));
                }
                else {
                    stringBuilder.push(c);
                }
                if (previousLength != stringBuilder.toString().length) {
                    prevdash = false;
                }
            }
            if (i == maxlength) {
                break;
            }
        }
        if (prevdash) {
            return stringBuilder.join('').toString().substring(0, stringBuilder.toString().length - 1);
        }
        else {
            return stringBuilder.join('').toString();
        }
    };
    FriendlyUrlExtension.GetOriginalTitle = function (friendlyTitle) {
        if (!friendlyTitle) {
            return '';
        }
        return friendlyTitle.replace(/-/gi, ' ');
    };
    FriendlyUrlExtension.GetTitleCase = function (str) {
        var tokens = str.split(' ');
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (token.trim()) {
                tokens[i] = token.substring(0, 1).toUpperCase() + token.substring(1).toLowerCase();
            }
        }
        return tokens.join(' ');
    };
    FriendlyUrlExtension.GetCamelCase = function (str, trim) {
        if (trim === void 0) { trim = false; }
        var camelStr = '';
        var prevdash = false;
        for (var i = 0; i < str.length; i++) {
            var c = str[i];
            if (c == ' ') {
                if (prevdash == true && trim) {
                    c = '';
                }
                prevdash = true;
            }
            camelStr += (c && (prevdash || (c >= 'A' && c <= 'Z'))) ? (i == 0) ? c.toLowerCase() : c.toUpperCase() : c.toLowerCase();
        }
        return camelStr;
    };
    FriendlyUrlExtension.RemapInternationalCharToAscii = function (character) {
        var s = character.toString().toLowerCase();
        if ("àåáâäãåąā".search(s) >= 0) {
            return "a";
        }
        else if ("èéêëę".search(s) >= 0) {
            return "e";
        }
        else if ("ìíîïı".search(s) >= 0) {
            return "i";
        }
        else if ("òóôõöøőð".search(s) >= 0) {
            return "o";
        }
        else if ("ùúûüŭů".search(s) >= 0) {
            return "u";
        }
        else if ("çćčĉ".search(s) >= 0) {
            return "c";
        }
        else if ("żźž".search(s) >= 0) {
            return "z";
        }
        else if ("śşšŝ".search(s) >= 0) {
            return "s";
        }
        else if ("ñń".search(s) >= 0) {
            return "n";
        }
        else if ("ýÿ".search(s) >= 0) {
            return "y";
        }
        else if ("ğĝ".search(s) >= 0) {
            return "g";
        }
        else if (character == 'ř') {
            return "r";
        }
        else if (character == 'ł') {
            return "l";
        }
        else if (character == 'đ') {
            return "d";
        }
        else if (character == 'ß') {
            return "ss";
        }
        else if (character == 'Þ') {
            return "th";
        }
        else if (character == 'ĥ') {
            return "h";
        }
        else if (character == 'ĵ') {
            return "j";
        }
        else {
            return '';
        }
    };
    return FriendlyUrlExtension;
}());
