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
var MyCurrencyList = (function () {
    function MyCurrencyList() {
    }
    MyCurrencyList.GetCurrency = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.ISOCurrency[id]];
            });
        });
    };
    MyCurrencyList.ISOCurrency = {
        'AED': { 'symbol': 'د.إ', 'numericCode': '784', 'minorUnit': 2, 'postfix': true },
        'AFN': { 'symbol': '؋', 'numericCode': '971', 'minorUnit': 2, 'postfix': true },
        'ALL': { 'symbol': 'Lek', 'numericCode': '008', 'minorUnit': 2 },
        'AMD': { 'symbol': 'AMD', 'numericCode': '051', 'minorUnit': 2 },
        'ANG': { 'symbol': 'ƒ', 'numericCode': '532', 'minorUnit': 2 },
        'AOA': { 'symbol': 'Kz', 'numericCode': '973', 'minorUnit': 2 },
        'ARS': { 'symbol': '$', 'numericCode': '032', 'minorUnit': 2 },
        'AUD': { 'symbol': '$', 'numericCode': '036', 'minorUnit': 2 },
        'AWG': { 'symbol': 'ƒ', 'numericCode': '533', 'minorUnit': 2 },
        'AZN': { 'symbol': 'ман', 'numericCode': '944', 'minorUnit': 2 },
        'BAM': { 'symbol': 'KM', 'numericCode': '977', 'minorUnit': 2 },
        'BBD': { 'symbol': '$', 'numericCode': '052', 'minorUnit': 2 },
        'BDT': { 'symbol': '৳', 'numericCode': '050', 'minorUnit': 2 },
        'BGN': { 'symbol': 'лв', 'numericCode': '975', 'minorUnit': 2 },
        'BHD': { 'symbol': 'BD', 'numericCode': '048', 'minorUnit': 3 },
        'BIF': { 'symbol': 'BIF', 'numericCode': '108', 'minorUnit': 0 },
        'BMD': { 'symbol': '$', 'numericCode': '060', 'minorUnit': 2 },
        'BND': { 'symbol': '$', 'numericCode': '096', 'minorUnit': 2 },
        'BOB': { 'symbol': '$b', 'numericCode': '068', 'minorUnit': 2 },
        'BOV': { 'symbol': '$b', 'numericCode': '984', 'minorUnit': 2 },
        'BRL': { 'symbol': 'R$', 'numericCode': '986', 'minorUnit': 2 },
        'BSD': { 'symbol': '$', 'numericCode': '044', 'minorUnit': 2 },
        'BTN': { 'symbol': 'Nu', 'numericCode': '064', 'minorUnit': 2 },
        'BWP': { 'symbol': 'P', 'numericCode': '072', 'minorUnit': 2 },
        'BYR': { 'symbol': 'p.', 'numericCode': '974', 'minorUnit': 0 },
        'BZD': { 'symbol': 'BZ$', 'numericCode': '084', 'minorUnit': 2 },
        'CAD': { 'symbol': '$', 'numericCode': '124', 'minorUnit': 2 },
        'CDF': { 'symbol': 'FC', 'numericCode': '976', 'minorUnit': 2 },
        'CHE': { 'symbol': '€', 'numericCode': '947', 'minorUnit': 2 },
        'CHF': { 'symbol': 'CHF', 'numericCode': '756', 'minorUnit': 2 },
        'CHW': { 'symbol': 'CHW', 'numericCode': '948', 'minorUnit': 2 },
        'CLF': { 'symbol': 'UF', 'numericCode': '990', 'minorUnit': 4 },
        'CLP': { 'symbol': '$', 'numericCode': '152', 'minorUnit': 0 },
        'CNY': { 'symbol': '¥', 'numericCode': '156', 'minorUnit': 2 },
        'COP': { 'symbol': '$', 'numericCode': '170', 'minorUnit': 2 },
        'COU': { 'symbol': 'UVR', 'numericCode': '970', 'minorUnit': 2 },
        'CRC': { 'symbol': '₡', 'numericCode': '188', 'minorUnit': 2 },
        'CUC': { 'symbol': 'CUC$', 'numericCode': '931', 'minorUnit': 2 },
        'CUP': { 'symbol': '₱', 'numericCode': '192', 'minorUnit': 2 },
        'CVE': { 'symbol': '$', 'numericCode': '132', 'minorUnit': 2 },
        'CZK': { 'symbol': 'Kč', 'numericCode': '203', 'minorUnit': 2, 'postfix': true },
        'DJF': { 'symbol': 'Fdj', 'numericCode': '262', 'minorUnit': 0, 'postfix': true },
        'DKK': { 'symbol': 'kr', 'numericCode': '208', 'minorUnit': 2 },
        'DOP': { 'symbol': 'RD$', 'numericCode': '214', 'minorUnit': 2 },
        'DZD': { 'symbol': 'DA', 'numericCode': '012', 'minorUnit': 2, 'postfix': true },
        'EGP': { 'symbol': '£', 'numericCode': '818', 'minorUnit': 2 },
        'ERN': { 'symbol': 'Nfk', 'numericCode': '232', 'minorUnit': 2 },
        'ETB': { 'symbol': 'Br', 'numericCode': '230', 'minorUnit': 2 },
        'EUR': { 'symbol': '€', 'numericCode': '978', 'minorUnit': 2 },
        'FJD': { 'symbol': '$', 'numericCode': '242', 'minorUnit': 2 },
        'FKP': { 'symbol': '£', 'numericCode': '238', 'minorUnit': 2 },
        'GBP': { 'symbol': '£', 'numericCode': '826', 'minorUnit': 2 },
        'GEL': { 'symbol': 'GEL', 'numericCode': '981', 'minorUnit': 2 },
        'GHS': { 'symbol': 'GH¢', 'numericCode': '936', 'minorUnit': 2 },
        'GIP': { 'symbol': '£', 'numericCode': '292', 'minorUnit': 2 },
        'GMD': { 'symbol': 'GMD', 'numericCode': '270', 'minorUnit': 2 },
        'GNF': { 'symbol': 'FG', 'numericCode': '324', 'minorUnit': 0 },
        'GTQ': { 'symbol': 'Q', 'numericCode': '320', 'minorUnit': 2 },
        'GYD': { 'symbol': '$', 'numericCode': '328', 'minorUnit': 2 },
        'HKD': { 'symbol': 'HK$', 'numericCode': '344', 'minorUnit': 2 },
        'HNL': { 'symbol': 'L', 'numericCode': '340', 'minorUnit': 2 },
        'HRK': { 'symbol': 'kn', 'numericCode': '191', 'minorUnit': 2 },
        'HTG': { 'symbol': 'G', 'numericCode': '332', 'minorUnit': 2 },
        'HUF': { 'symbol': 'Ft', 'numericCode': '348', 'minorUnit': 2 },
        'IDR': { 'symbol': 'Rp', 'numericCode': '360', 'minorUnit': 2 },
        'ILS': { 'symbol': '₪', 'numericCode': '376', 'minorUnit': 2 },
        'INR': { 'symbol': '₹', 'numericCode': '356', 'minorUnit': 2 },
        'IQD': { 'symbol': 'د.ع', 'numericCode': '368', 'minorUnit': 3, 'postfix': true },
        'IRR': { 'symbol': '﷼', 'numericCode': '364', 'minorUnit': 2, 'postfix': true },
        'ISK': { 'symbol': 'kr', 'numericCode': '352', 'minorUnit': 0 },
        'JMD': { 'symbol': 'J$', 'numericCode': '388', 'minorUnit': 2 },
        'JOD': { 'symbol': 'JOD', 'numericCode': '400', 'minorUnit': 3 },
        'JPY': { 'symbol': '¥', 'numericCode': '392', 'minorUnit': 0 },
        'KES': { 'symbol': 'KSh', 'numericCode': '404', 'minorUnit': 2 },
        'KGS': { 'symbol': 'лв', 'numericCode': '417', 'minorUnit': 2 },
        'KHR': { 'symbol': '៛', 'numericCode': '116', 'minorUnit': 2 },
        'KMF': { 'symbol': 'CF', 'numericCode': '174', 'minorUnit': 0 },
        'KPW': { 'symbol': '₩', 'numericCode': '408', 'minorUnit': 2 },
        'KRW': { 'symbol': '₩', 'numericCode': '410', 'minorUnit': 0 },
        'KWD': { 'symbol': 'ك', 'numericCode': '414', 'minorUnit': 3, 'postfix': true },
        'KYD': { 'symbol': '$', 'numericCode': '136', 'minorUnit': 2 },
        'KZT': { 'symbol': '₸', 'numericCode': '398', 'minorUnit': 2 },
        'LAK': { 'symbol': '₭', 'numericCode': '418', 'minorUnit': 2 },
        'LBP': { 'symbol': 'ل.ل', 'numericCode': '422', 'minorUnit': 2, 'postfix': true },
        'LKR': { 'symbol': '₨', 'numericCode': '144', 'minorUnit': 2 },
        'LRD': { 'symbol': '$', 'numericCode': '430', 'minorUnit': 2 },
        'LSL': { 'symbol': 'LSL', 'numericCode': '426', 'minorUnit': 2 },
        'LYD': { 'symbol': 'LD', 'numericCode': '434', 'minorUnit': 3 },
        'MAD': { 'symbol': 'د.م.', 'numericCode': '504', 'minorUnit': 2 },
        'MDL': { 'symbol': 'MDL', 'numericCode': '498', 'minorUnit': 2 },
        'MGA': { 'symbol': 'Ar', 'numericCode': '969', 'minorUnit': 2 },
        'MKD': { 'symbol': 'ден', 'numericCode': '807', 'minorUnit': 2 },
        'MMK': { 'symbol': 'K', 'numericCode': '104', 'minorUnit': 2 },
        'MNT': { 'symbol': '₮', 'numericCode': '496', 'minorUnit': 2 },
        'MOP': { 'symbol': 'MOP$', 'numericCode': '446', 'minorUnit': 2 },
        'MRO': { 'symbol': 'UM', 'numericCode': '478', 'minorUnit': 2 },
        'MUR': { 'symbol': '₨', 'numericCode': '480', 'minorUnit': 2 },
        'MVR': { 'symbol': 'Rf', 'numericCode': '462', 'minorUnit': 2 },
        'MWK': { 'symbol': 'MK', 'numericCode': '454', 'minorUnit': 2 },
        'MXN': { 'symbol': '$', 'numericCode': '484', 'minorUnit': 2 },
        'MXV': { 'symbol': '$', 'numericCode': '979', 'minorUnit': 2 },
        'MYR': { 'symbol': 'RM', 'numericCode': '458', 'minorUnit': 2 },
        'MZN': { 'symbol': 'MT', 'numericCode': '943', 'minorUnit': 2 },
        'NAD': { 'symbol': '$', 'numericCode': '516', 'minorUnit': 2 },
        'NGN': { 'symbol': '₦', 'numericCode': '566', 'minorUnit': 2 },
        'NIO': { 'symbol': 'C$', 'numericCode': '558', 'minorUnit': 2 },
        'NOK': { 'symbol': 'kr', 'numericCode': '578', 'minorUnit': 2 },
        'NPR': { 'symbol': '₨', 'numericCode': '524', 'minorUnit': 2 },
        'NZD': { 'symbol': '$', 'numericCode': '554', 'minorUnit': 2 },
        'OMR': { 'symbol': '﷼', 'numericCode': '512', 'minorUnit': 3, 'postfix': true },
        'PAB': { 'symbol': 'B/.', 'numericCode': '590', 'minorUnit': 2 },
        'PEN': { 'symbol': 'S/.', 'numericCode': '604', 'minorUnit': 2 },
        'PGK': { 'symbol': 'K', 'numericCode': '598', 'minorUnit': 2 },
        'PHP': { 'symbol': '₱', 'numericCode': '608', 'minorUnit': 2 },
        'PKR': { 'symbol': '₨', 'numericCode': '586', 'minorUnit': 2 },
        'PLN': { 'symbol': 'zł', 'numericCode': '985', 'minorUnit': 2 },
        'PYG': { 'symbol': 'Gs', 'numericCode': '600', 'minorUnit': 0 },
        'QAR': { 'symbol': '﷼', 'numericCode': '634', 'minorUnit': 2, 'postfix': true },
        'RON': { 'symbol': 'lei', 'numericCode': '946', 'minorUnit': 2 },
        'RSD': { 'symbol': 'РСД', 'numericCode': '941', 'minorUnit': 2 },
        'RUB': { 'symbol': 'руб', 'numericCode': '643', 'minorUnit': 2 },
        'RWF': { 'symbol': 'FRw', 'numericCode': '646', 'minorUnit': 0 },
        'SAR': { 'symbol': '﷼', 'numericCode': '682', 'minorUnit': 2, 'postfix': true },
        'SBD': { 'symbol': '$', 'numericCode': '090', 'minorUnit': 2 },
        'SCR': { 'symbol': '₨', 'numericCode': '690', 'minorUnit': 2 },
        'SDG': { 'symbol': 'ج.س.', 'numericCode': '938', 'minorUnit': 2, 'postfix': true },
        'SEK': { 'symbol': 'kr', 'numericCode': '752', 'minorUnit': 2 },
        'SGD': { 'symbol': '$', 'numericCode': '702', 'minorUnit': 2 },
        'SHP': { 'symbol': '£', 'numericCode': '654', 'minorUnit': 2 },
        'SLL': { 'symbol': 'Le', 'numericCode': '694', 'minorUnit': 2 },
        'SOS': { 'symbol': 'S', 'numericCode': '706', 'minorUnit': 2 },
        'SRD': { 'symbol': '$', 'numericCode': '968', 'minorUnit': 2 },
        'SSP': { 'symbol': 'CHF', 'numericCode': '728', 'minorUnit': 2 },
        'STD': { 'symbol': 'Db', 'numericCode': '678', 'minorUnit': 2 },
        'SVC': { 'symbol': '$', 'numericCode': '222', 'minorUnit': 2 },
        'SYP': { 'symbol': '£', 'numericCode': '760', 'minorUnit': 2 },
        'SZL': { 'symbol': 'E', 'numericCode': '748', 'minorUnit': 2 },
        'THB': { 'symbol': '฿', 'numericCode': '764', 'minorUnit': 2 },
        'TJS': { 'symbol': 'TJS', 'numericCode': '972', 'minorUnit': 2 },
        'TMT': { 'symbol': 'T', 'numericCode': '934', 'minorUnit': 2 },
        'TND': { 'symbol': 'DT', 'numericCode': '788', 'minorUnit': 3 },
        'TOP': { 'symbol': 'T$', 'numericCode': '776', 'minorUnit': 2 },
        'TRY': { 'symbol': '₺', 'numericCode': '949', 'minorUnit': 2 },
        'TTD': { 'symbol': 'TT$', 'numericCode': '780', 'minorUnit': 2 },
        'TWD': { 'symbol': 'NT$', 'numericCode': '901', 'minorUnit': 2 },
        'TZS': { 'symbol': '/=', 'numericCode': '834', 'minorUnit': 2, 'postfix': true },
        'UAH': { 'symbol': '₴', 'numericCode': '980', 'minorUnit': 2 },
        'UGX': { 'symbol': 'UGX', 'numericCode': '800', 'minorUnit': 0 },
        'USD': { 'symbol': '$', 'numericCode': '840', 'minorUnit': 2 },
        'USN': { 'symbol': '$', 'numericCode': '997', 'minorUnit': 2 },
        'UYI': { 'symbol': '$U', 'numericCode': '940', 'minorUnit': 0 },
        'UYU': { 'symbol': '$U', 'numericCode': '858', 'minorUnit': 2 },
        'UZS': { 'symbol': 'лв', 'numericCode': '860', 'minorUnit': 2 },
        'VEF': { 'symbol': 'Bs.', 'numericCode': '937', 'minorUnit': 2 },
        'VND': { 'symbol': '₫', 'numericCode': '704', 'minorUnit': 0 },
        'VUV': { 'symbol': 'VT', 'numericCode': '548', 'minorUnit': 0, 'postfix': true },
        'WST': { 'symbol': '$', 'numericCode': '882', 'minorUnit': 2 },
        'XAF': { 'symbol': 'FCFA', 'numericCode': '950', 'minorUnit': 0 },
        'XAG': { 'symbol': 'XAG', 'numericCode': '961', 'minorUnit': 0 },
        'XAU': { 'symbol': 'XAU', 'numericCode': '959', 'minorUnit': 0 },
        'XBA': { 'symbol': 'XBA', 'numericCode': '955', 'minorUnit': 0 },
        'XBB': { 'symbol': 'XBB', 'numericCode': '956', 'minorUnit': 0 },
        'XBC': { 'symbol': 'XBC', 'numericCode': '957', 'minorUnit': 0 },
        'XBD': { 'symbol': 'XBD', 'numericCode': '958', 'minorUnit': 0 },
        'XCD': { 'symbol': '$', 'numericCode': '951', 'minorUnit': 2 },
        'XDR': { 'symbol': 'XDR', 'numericCode': '960', 'minorUnit': 0 },
        'XOF': { 'symbol': 'CFA', 'numericCode': '952', 'minorUnit': 0 },
        'XPD': { 'symbol': 'XPD', 'numericCode': '964', 'minorUnit': 0 },
        'XPF': { 'symbol': 'F', 'numericCode': '953', 'minorUnit': 0 },
        'XPT': { 'symbol': 'XPT', 'numericCode': '962', 'minorUnit': 0 },
        'XSU': { 'symbol': 'XSU', 'numericCode': '994', 'minorUnit': 0 },
        'XTS': { 'symbol': 'XTS', 'numericCode': '963', 'minorUnit': 0 },
        'XUA': { 'symbol': 'XUA', 'numericCode': '965', 'minorUnit': 0 },
        'XXX': { 'symbol': 'XXX', 'numericCode': '999', 'minorUnit': 0 },
        'YER': { 'symbol': '﷼', 'numericCode': '886', 'minorUnit': 2, 'postfix': true },
        'ZAR': { 'symbol': 'R', 'numericCode': '710', 'minorUnit': 2 },
        'ZMW': { 'symbol': 'ZK', 'numericCode': '967', 'minorUnit': 2 },
        'ZWL': { 'symbol': 'Z$', 'numericCode': '932', 'minorUnit': 2 }
    };
    return MyCurrencyList;
}());
