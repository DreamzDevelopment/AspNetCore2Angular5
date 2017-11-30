interface IFriendlyUrlOption {
    remapToAscii: boolean;
    maxlength?: number;
    alphaCharOnly?: boolean;
    toLower: boolean;
    rawAsArray?: boolean;
    rawAsString?: boolean;
}
interface IFriendlyUrlExtension {
}
declare class FriendlyUrlExtension implements IFriendlyUrlExtension {
    static GetFriendlyTitle(title: string, _remapToAscii?: boolean, _maxlength?: number, _alphaCharOnly?: boolean, _toLower?: boolean, options?: IFriendlyUrlOption): string;
    static GetOriginalTitle(friendlyTitle: string): string;
    static GetTitleCase(str: string): string;
    static GetCamelCase(str: string, trim?: boolean): string;
    private static RemapInternationalCharToAscii(character);
}
