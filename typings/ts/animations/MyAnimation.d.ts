interface IMyAnimation {
}
declare class MyAnimation implements IMyAnimation {
    static ScrollTo(target: any | number, base: any | number, container?: any, duration?: number): Promise<void>;
}
