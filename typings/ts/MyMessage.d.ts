declare enum MessageType {
    info = 0,
    warn = 1,
    danger = 2,
    important = 3,
    very_important = 4,
    urgent = 5,
    extreme = 6,
    top_priority = 7,
}
declare enum MessageId {
    msgUnAuthUser = 9,
    msgSelItemSize = 10,
    msgConfirmDelete = 11,
    msgExistItemId = 12,
    msgServPathReq = 13,
    msgSelPathReq = 14,
    msgSelListEmpty = 15,
    msgInvalidInput = 16,
    msgInputMinErr = 17,
    msgInputMaxErr = 18,
    msgReqInputErr = 19,
    msgSkuIdReq = 20,
    msgNoChangeDetect = 21,
    msgTryAgain = 22,
    msgErrorUnknown = 23,
    msgNoSourceFound = 24,
    msgSuccessReq = 25,
    msgFailedReq = 26,
    msgSelTransLang = 27,
    msgTransLangInvalid = 28,
    msgQryStrInvalid = 29,
    msgRemoveChildFirst = 30,
    msgExpiredOrder = 31,
    msgNoPreview = 32,
    msgErrorNotice = 33,
    msgCreateFail = 40,
    msgCreateSucc = 41,
    msgUpdateFail = 42,
    msgUpdateSucc = 43,
    msgDeleteFail = 44,
    msgDeleteSucc = 45,
    msgNothingFound = 50,
    msgResourceKeyReq = 61,
    msgForceAttempt = 62,
}
interface IMyMessage {
}
declare class MyMessage implements IMyMessage {
    protected static $MessageSection: HTMLElement | JQuery;
    protected static $MessageBox: any[];
    protected static $Message: any[];
    protected static $LiveTimer: any[];
    protected static Locale: string | any;
    static GetMessageText(id: MessageId): string;
    static SetMessageText(msg: string, transMsg: string): string;
    static MessageSection(msg: string, _type: MessageType, _auto: boolean, _notify?: string, _delay?: number, _live?: boolean): void;
    private static GetMessageType(_type);
    private static AutoDismiss(obj, _notify?, _delay?, _index?);
    static DismissMessage(obj: any, _index?: number): void;
    private static LiveMessage(index);
    private static TextAnimation(index);
}
