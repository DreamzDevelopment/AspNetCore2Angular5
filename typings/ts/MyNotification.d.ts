interface IMyNotification {
    RelocateNotificationZone: (elem: any) => any;
}
declare class MyNotification implements IMyNotification {
    constructor();
    RelocateNotificationZone(elem: any): any;
    static RelocateNotificationZone(elem: any): void;
}
