/// <reference path="../../models/SiteNavigationModel.d.ts" />
/// <reference path="../toolbar/Toolbar.d.ts" />
/// <reference path="../timer-counter/TimerCounter.d.ts" />
/// <reference path="../ApiCallService.d.ts" />
interface INavMenuTool {
    flag: boolean;
    control: string;
    $control: JQuery | HTMLElement | any;
    inputControl: string;
    $inputControl: JQuery | HTMLElement | any;
}
declare class NavMenuTool implements INavMenuTool {
    flag: boolean;
    control: string;
    $control: any;
    inputControl: string;
    $inputControl: JQuery | HTMLElement | any;
    constructor(model?: INavMenuTool, flag?: boolean, control?: string, inputControl?: string);
}
interface INavMenuOptions {
    elements: string;
    target: string;
    $target: JQuery | HTMLElement | any;
    parent: string;
    $parent: JQuery | HTMLElement | any;
    autoClose: INavMenuTool;
    fullScreen: INavMenuTool;
    $controls: JQuery[] | HTMLElement[] | any[];
    toolbarOptions: IToolbarOptions;
    timerCounter: ITimerCounter;
}
declare class NavMenuOptions implements INavMenuOptions {
    elements: string;
    target: string;
    $target: JQuery | HTMLElement | any;
    parent: string;
    $parent: JQuery | HTMLElement | any;
    autoClose: INavMenuTool;
    fullScreen: INavMenuTool;
    $controls: JQuery[] | HTMLElement[] | any[];
    toolbarOptions: IToolbarOptions;
    timerCounter: ITimerCounter;
    constructor();
}
interface INavMenu {
    InitializeMenu: () => Promise<void>;
    RenderMenuItem: (menuItems?: IMenuItem[]) => Promise<void>;
    CreateMenuItem: (element: IMenuItem, parentElm?: IMenuItem) => Promise<void>;
    ShowHideChildSection: (event: Event | any) => Promise<void>;
    RenderModification: () => Promise<void>;
    ToggleNav: (event?: Event) => Promise<void>;
    OpenNav: (event?: Event | any, target?: JQuery | HTMLElement | any) => Promise<void>;
    InitToolbar: (event?: Event | any, target?: JQuery | HTMLElement | any, parent?: JQuery | HTMLElement | any) => Promise<void>;
    InitTools: (navOptions?: INavMenuOptions, callback?: (options: INavMenuOptions) => void) => Promise<void>;
    AutoClose: (event?: Event | any, target?: JQuery | HTMLElement | any, parent?: JQuery | HTMLElement | any) => Promise<void>;
    CloseNav: (event?: Event | any, target?: JQuery | HTMLElement | any, parent?: JQuery | HTMLElement | any) => Promise<void>;
    CloseOnEvent: (event: Event | any) => Promise<void>;
    CloseOnOptions: (options: INavMenuOptions) => Promise<void>;
    SetAutoClose: (event?: Event | any, _options?: INavMenuOptions) => Promise<void>;
    SetFullScreen: (event?: Event | any, _options?: INavMenuOptions) => Promise<void>;
}
declare class NavMenu implements INavMenu {
    private static IsInitialized;
    protected static SiteNavigationModel: ISiteNavigationModel;
    protected static SelectedTemplate: IMenuTemplate;
    protected static MenuItemsRendered: IMenuItem[];
    protected static MenuItemsNonRendered: IMenuItem[];
    protected static MenuMaxLevel: number;
    constructor();
    static Initialize(): Promise<void>;
    InitializeMenu(): Promise<void>;
    static InitializeMenu(): Promise<void>;
    RenderMenuItem(menuItems?: IMenuItem[]): Promise<void>;
    static RenderMenuItem(_menuItems?: IMenuItem[]): Promise<void>;
    CreateMenuItem(element: IMenuItem, parentElm?: IMenuItem): Promise<void>;
    static CreateMenuItem(element: IMenuItem, parentElm?: IMenuItem): Promise<void>;
    ShowHideChildSection(event: Event | any): Promise<void>;
    static ShowHideChildSection(event: Event | any): Promise<void>;
    RenderModification(): Promise<void>;
    static RenderModification(): Promise<void>;
    ToggleNav(event?: Event): Promise<void>;
    static ToggleNav(event?: Event | any): Promise<void>;
    OpenNav(event?: Event | any, target?: JQuery | HTMLElement | any): Promise<void>;
    static OpenNav(event?: Event | any, target?: JQuery | HTMLElement | any): Promise<void>;
    InitToolbar(event?: Event | any, target?: JQuery | HTMLElement | any, parent?: JQuery | HTMLElement | any): Promise<void>;
    static InitToolbar(event?: Event | any, target?: JQuery | HTMLElement | any, parent?: JQuery | HTMLElement | any): Promise<void>;
    InitTools(navOptions?: INavMenuOptions, callback?: (options: INavMenuOptions) => void): Promise<void>;
    static InitTools(navOptions?: INavMenuOptions, callback?: (options: INavMenuOptions) => void): Promise<void>;
    AutoClose(event?: Event | any, target?: JQuery | HTMLElement | any, parent?: JQuery | HTMLElement | any): Promise<void>;
    static AutoClose(event?: Event | any, target?: JQuery | HTMLElement | any, parent?: JQuery | HTMLElement | any): Promise<void>;
    CloseNav(event?: Event | any, target?: JQuery | HTMLElement | any, parent?: JQuery | HTMLElement | any): Promise<void>;
    static CloseNav(event?: Event | any, target?: JQuery | HTMLElement | any, parent?: JQuery | HTMLElement | any): Promise<void>;
    CloseOnEvent(event: Event | any): Promise<void>;
    static CloseOnEvent(event: Event | any): Promise<void>;
    CloseOnOptions(options: INavMenuOptions): Promise<void>;
    static CloseOnOptions(options: INavMenuOptions): Promise<void>;
    SetAutoClose(event?: Event | any, _options?: INavMenuOptions): Promise<void>;
    static SetAutoClose(event?: Event | any, _options?: INavMenuOptions): Promise<void>;
    SetFullScreen(event?: Event | any, _options?: INavMenuOptions): Promise<void>;
    static SetFullScreen(event?: Event | any, _options?: INavMenuOptions): Promise<void>;
}
declare module NavMenu {
}
