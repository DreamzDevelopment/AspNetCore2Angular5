interface IMyValidator {
    FormValidator: (form: HTMLFormElement, callBackFunc: (response: IMyResponse) => void) => Promise<void>;
    UserNameValidator: (value: string, callBackFunc: (result: boolean) => void, elm?: JQuery | HTMLElement) => Promise<void>;
    EmailValidator: (value: string, callBackFunc: (result: boolean) => void, elm?: JQuery | HTMLElement) => Promise<void>;
    PhoneValidator: (value: string, callBackFunc: (result: boolean) => void, elm?: JQuery | HTMLElement) => Promise<void>;
    ValidateReqMinMax: (transAmount: JQuery | HTMLElement, msg: string, callBackFunc: (result: boolean) => void) => Promise<void>;
    ValidateReqminLengthmaxLength: (transElem: JQuery | HTMLElement, msg: string, callBackFunc: (result: boolean) => void) => Promise<void>;
    NumKeyOnly: (event: Event) => Promise<void>;
    NumDecimalOnly: (event: Event) => Promise<void>;
    AlphaNumAndNumOnly: (event: Event) => Promise<void>;
    NoSpaceAllowed: (event: Event) => Promise<void>;
}
declare class MyValidator implements IMyValidator {
    protected static IsDecimalAvailable: boolean;
    constructor();
    FormValidator(form: HTMLFormElement, callBackFunc: (response: IMyResponse) => void): Promise<void>;
    UserNameValidator(value: string, callBackFunc: (result: boolean) => void, elm?: JQuery | HTMLElement): Promise<void>;
    EmailValidator(value: string, callBackFunc: (result: boolean) => void, elm?: JQuery | HTMLElement): Promise<void>;
    PhoneValidator(value: string, callBackFunc: (result: boolean) => void, elm?: JQuery | HTMLElement): Promise<void>;
    ValidateReqMinMax(transAmount: JQuery | HTMLElement, msg: string, callBackFunc: (result: boolean) => void): Promise<void>;
    ValidateReqminLengthmaxLength(transElem: JQuery | HTMLElement, msg: string, callBackFunc: (result: boolean) => void): Promise<void>;
    NumKeyOnly(event: Event): Promise<void>;
    NumDecimalOnly(event: Event): Promise<void>;
    AlphaNumAndNumOnly(event: Event): Promise<void>;
    NoSpaceAllowed(event: Event): Promise<void>;
    static FormValidator(form: HTMLFormElement, callBackFunc: (response: IMyResponse) => void): Promise<void>;
    static UserNameValidator(value: string, callBackFunc: (result: boolean) => void, elm?: JQuery | HTMLElement | any): Promise<void>;
    static EmailValidator(value: string, callBackFunc: (result: boolean) => void, elm?: JQuery | HTMLElement | any): Promise<void>;
    static PhoneValidator(value: string, callBackFunc: (result: boolean) => void, elm?: JQuery | HTMLElement | any): Promise<void>;
    static ValidateReqMinMax(transAmount: JQuery | HTMLElement, msg: string, callBackFunc: (result: boolean) => void): Promise<void>;
    static ValidateReqminLengthmaxLength(transElem: JQuery | HTMLElement, msg: string, callBackFunc: (result: boolean) => void): Promise<void>;
    static NumKeyOnly(event: Event): Promise<void>;
    static NumDecimalOnly(event: Event): Promise<void>;
    static AlphaNumAndNumOnly(event: Event): Promise<void>;
    static NoSpaceAllowed(event: Event): Promise<void>;
}
