interface IModalMount {
    modalContainerId: string;
    selector: string;
    modalId: string;
    formContainerId: string;
    formSelector: string;
    formId: string;
    autoClose: boolean;
    viewTime: number;
    forceHideTarget: boolean;
}
declare class ModalMount implements IModalMount {
    modalContainerId: string;
    modalId: string;
    selector: string;
    formContainerId: string;
    formSelector: string;
    formId: string;
    autoClose: boolean;
    viewTime: number;
    forceHideTarget: boolean;
    constructor(model?: IModalMount, modalContainerId?: string, modalId?: string, selector?: string, autoClose?: boolean, viewTime?: number, forceHideTarget?: boolean);
}
interface ITimerInfo {
    counter: any;
    timer: any;
    counterFunc: any;
    timerFunc: any;
}
declare class TimerInfo implements ITimerInfo {
    counter: any;
    timer: any;
    counterFunc: any;
    timerFunc: any;
    constructor(model?: ITimerInfo | any, counter?: any, timer?: any, counterFunc?: any, timerFunc?: any);
}
interface IDimensionInfo {
    top: number | string;
    left: number | string;
    width: number | string;
    height: number | string;
    forceDimension: boolean;
}
declare class DimensionInfo implements IDimensionInfo {
    top: string | number;
    left: string | number;
    width: string | number;
    height: string | number;
    forceDimension: boolean;
    constructor(model?: IDimensionInfo | any, top?: number | string, left?: number | string, width?: number | string, height?: number | string, forceDimension?: boolean);
}
interface IModalInfo {
    modalMount: IModalMount;
    dimensionInfo: IDimensionInfo;
    timerInfo: ITimerInfo;
}
declare class ModalInfo implements IModalInfo {
    modalMount: IModalMount;
    dimensionInfo: IDimensionInfo;
    timerInfo: ITimerInfo;
    constructor(modalInfo?: IModalInfo | any, modalMount?: IModalMount, dimensionInfo?: IDimensionInfo, timerInfo?: ITimerInfo);
}
interface IMyModal {
}
declare class MyModal implements IMyModal {
    protected static ModalInfo: IModalInfo;
    protected static $Modal: JQuery | HTMLElement;
    protected static $TimerCounter: JQuery | HTMLElement;
    static GetModal(modalSelector?: string, modalId?: string): any;
    static SetModal(modal?: HTMLElement | JQuery | any, id?: string): any;
    static GetForm(formInfo?: string, formId?: string): any;
    static SetForm(form?: HTMLElement | JQuery | any, id?: string): any;
    static GetActiveForm(modalInfo?: string, modalId?: string): any;
    static InitModal(modal: HTMLElement | JQuery, modalInfo: IModalInfo): void;
    static UpdateModalInfo(modal: HTMLElement | JQuery | any, modalInfo: IModalInfo, clearFunc?: boolean): void;
    static GetModalInfo(modal: HTMLElement | JQuery | any): ModalInfo;
    static ShowModalForm(target: HTMLElement | JQuery | any, modal: HTMLElement | JQuery | any, top?: number | string, left?: number | string, width?: number | string, height?: number | string): void;
    static SetModalForm(modal: HTMLElement | JQuery | any, form: HTMLElement | JQuery | any, withEvent?: boolean, deepCopy?: boolean): void;
    static CloseModal(modal: HTMLElement | JQuery | any, event?: Event, target?: HTMLElement | JQuery | any, counter?: any, timer?: any): Promise<void>;
}
