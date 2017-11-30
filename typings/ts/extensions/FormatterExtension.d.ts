declare enum FormatFor {
    All = 0,
    Text = 1,
    Value = 2,
    Title = 3,
}
interface IFormatterExtension {
}
declare class FormatterExtension implements IFormatterExtension {
    constructor();
    private static Locale;
    private static Currency;
    private static EnglishNumber;
    private static BanglaNumber;
    static Default: Intl.NumberFormat | any;
    static Formatter: Intl.NumberFormat | any;
    static FormatterInt: Intl.NumberFormat | any;
    static FormatterTime: Intl.NumberFormat | any;
    static FormatterDate: Intl.DateTimeFormat | any;
    private static ResolvedNumber(val, callBackFunc);
    static FormatCurrency(val: string, callBackFunc: (response: string) => void): Promise<void>;
    static FormatPercent(val: string, callBackFunc: (response: string) => void): Promise<void>;
    static ToLocalDateTime(val: string | any): any;
    static FormatNumber(element: JQuery | HTMLElement | any, formatFor: FormatFor, options: Intl.NumberFormatOptions): Promise<void>;
    static FormatPhone(element: JQuery | HTMLElement | any, formatFor: FormatFor, options: Intl.NumberFormatOptions): Promise<void>;
    ExtractOptions(element: JQuery | HTMLElement | any): Promise<any>;
    static ExtractOptions(element: JQuery | HTMLElement | any): Promise<any>;
}
