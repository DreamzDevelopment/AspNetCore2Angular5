interface IToolbarOptions {
    draggable: boolean;
    withinBoundary: boolean;
    dragSelector: string;
    $dragSelector: JQuery | HTMLElement | any;
    target: string;
    $target: JQuery | HTMLElement | any;
    body: string;
    $body: JQuery | HTMLElement | any;
    container: string;
    $container: JQuery | HTMLElement | any;
    startCOOR: {
        X: number;
        Y: number;
    };
    endCOOR: {
        X: number;
        Y: number;
    };
}
declare class ToolbarOptions implements IToolbarOptions {
    draggable: boolean;
    withinBoundary: boolean;
    dragSelector: string;
    $dragSelector: JQuery | HTMLElement | any;
    target: string;
    $target: JQuery | HTMLElement | any;
    body: string;
    $body: JQuery | HTMLElement | any;
    container: string;
    $container: JQuery | HTMLElement | any;
    startCOOR: {
        X: number;
        Y: number;
    };
    endCOOR: {
        X: number;
        Y: number;
    };
    constructor();
}
interface IToolbar {
    InitToolbar: (options?: IToolbarOptions, callback?: (options: IToolbarOptions) => void) => Promise<void>;
    CreateToolbar: (options: IToolbarOptions, callback?: (options: IToolbarOptions) => void) => Promise<void>;
    SetCoordinate: (_options: IToolbarOptions, callback?: (options: IToolbarOptions) => void) => Promise<void>;
    DragElement: (options: IToolbarOptions, callback?: (options: IToolbarOptions) => void) => Promise<void>;
    DragMouseDown: (event: Event | any, options: IToolbarOptions, callback?: (options: IToolbarOptions) => void) => Promise<void>;
    ElementDrag: (event: Event | any, options: IToolbarOptions, callback?: (options: IToolbarOptions) => void) => Promise<void>;
    CloseDragElement: (event: Event | any, options: IToolbarOptions, callback?: (options: IToolbarOptions) => void) => Promise<void>;
}
declare class Toolbar implements IToolbar {
    constructor();
    InitToolbar(options?: IToolbarOptions, callback?: (options: IToolbarOptions) => void): Promise<void>;
    static InitToolbar(options?: IToolbarOptions, callback?: (options: IToolbarOptions) => void): Promise<void>;
    CreateToolbar(options: IToolbarOptions, callback?: (options: IToolbarOptions) => void): Promise<void>;
    static CreateToolbar(options: IToolbarOptions, callback?: (options: IToolbarOptions) => void): Promise<void>;
    SetCoordinate(_options: IToolbarOptions, callback?: (options: IToolbarOptions) => void): Promise<void>;
    static SetCoordinate(_options: IToolbarOptions, callback?: (options: IToolbarOptions) => void): Promise<void>;
    DragElement(options: IToolbarOptions, callback?: (options: IToolbarOptions) => void): Promise<void>;
    static DragElement(options: IToolbarOptions, callback?: (options: IToolbarOptions) => void): Promise<void>;
    DragMouseDown(event: Event | any, options: IToolbarOptions, callback?: (options: IToolbarOptions) => void): Promise<void>;
    static DragMouseDown(event: Event | any, options: IToolbarOptions, callback?: (options: IToolbarOptions) => void): Promise<void>;
    ElementDrag(event: Event | any, options: IToolbarOptions, callback?: (options: IToolbarOptions) => void): Promise<void>;
    static ElementDrag(event: Event | any, options: IToolbarOptions, callback?: (options: IToolbarOptions) => void): Promise<void>;
    CloseDragElement(event: Event | any, options: IToolbarOptions, callback?: (options: IToolbarOptions) => void): Promise<void>;
    static CloseDragElement(event: Event | any, options: IToolbarOptions, callback?: (options: IToolbarOptions) => void): Promise<void>;
}
