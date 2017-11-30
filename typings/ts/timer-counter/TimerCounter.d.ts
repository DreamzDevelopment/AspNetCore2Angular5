interface ITimerCounterOption {
    selectorObj: JQuery | HTMLElement | any;
    counterObj: JQuery | HTMLElement | any;
    activeCounterId: number | string | any;
}
declare class TimerCounterOption implements ITimerCounterOption {
    selectorObj: JQuery | HTMLElement | any;
    counterObj: JQuery | HTMLElement | any;
    activeCounterId: number | string | any;
    constructor(model?: ITimerCounterOption, _selectorObj?: JQuery | HTMLElement | any, _counterObj?: JQuery | HTMLElement | any);
}
interface ITimerCounter {
    options: ITimerCounterOption;
    CountDayHourMinSec: (_selectorObj: JQuery | HTMLElement | any, _counterObj: JQuery | HTMLElement | any, _days: number, _hours: number, _mins: number, _secs: number, callBackFunc: (response: boolean) => void) => Promise<void>;
}
declare class TimerCounter implements ITimerCounter {
    options: ITimerCounterOption;
    constructor();
    CountDayHourMinSec(_selectorObj: JQuery | HTMLElement | any, _counterObj: JQuery | HTMLElement | any, _days: number, _hours: number, _mins: number, _secs: number, callBackFunc: (response: boolean) => void): Promise<void>;
    static CountDayHourMinSec(_selectorObj: JQuery | HTMLElement | any, _counterObj: JQuery | HTMLElement | any, _days: number, _hours: number, _mins: number, _secs: number, callBackFunc: (response: boolean) => void): Promise<void>;
}
