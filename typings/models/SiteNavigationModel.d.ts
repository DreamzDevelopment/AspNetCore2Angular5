declare enum MenuItemType {
    Default = 0,
    PictureBox = 1,
    Gradient = 2,
}
interface ISiteNavigationModel {
    selectorBase: string;
    selectedTemplate: number;
    menuTemplates: IMenuTemplate[];
    menuItems: IMenuItem[];
}
declare class SiteNavigationModel implements ISiteNavigationModel {
    selectorBase: string;
    selectedTemplate: number;
    menuTemplates: IMenuTemplate[];
    menuItems: IMenuItem[];
    constructor(model?: ISiteNavigationModel | any);
}
interface IMenuControlOption {
    menuLevel: number;
    elementSelector: string;
    btnSelector: string;
    targetSelector: string;
}
declare class MenuControlOption implements IMenuControlOption {
    menuLevel: number;
    elementSelector: string;
    btnSelector: string;
    targetSelector: string;
    constructor(model?: IMenuControlOption | any);
}
interface IMenuHtml {
    id: number;
    title: string;
    selector: string;
    selectorImg: string;
    selectorBtn: string;
    html: string;
    createBy: string;
    createDate: Date;
    updateBy: string;
    updateDate?: Date;
}
declare class MenuHtml implements IMenuHtml {
    id: number;
    title: string;
    selector: string;
    selectorImg: string;
    selectorBtn: string;
    html: string;
    createBy: string;
    createDate: Date;
    updateBy: string;
    updateDate?: Date;
    constructor(model?: IMenuHtml | any);
}
interface IMenuTemplate {
    id: number;
    title: string;
    description: string;
    rootId: number;
    rootElement: IMenuHtml;
    childId: number;
    childElement: IMenuHtml;
    createBy: string;
    createDate: Date;
    updateBy: string;
    updateDate?: Date;
}
declare class MenuTemplate implements IMenuTemplate {
    id: number;
    title: string;
    description: string;
    rootId: number;
    rootElement: IMenuHtml;
    childId: number;
    childElement: IMenuHtml;
    createBy: string;
    createDate: Date;
    updateBy: string;
    updateDate?: Date;
    constructor(model?: IMenuTemplate | any);
}
interface IMenuItem {
    id: number;
    title: string;
    description: string;
    target: string;
    iconHtml: string;
    iconUrl: string;
    imageUrl: string;
    parentId?: number;
    menuItems: string;
    createBy: string;
    createDate: Date;
    updateBy: string;
    updateDate?: Date;
}
declare class MenuItem implements IMenuItem {
    id: number;
    title: string;
    description: string;
    target: string;
    iconHtml: string;
    iconUrl: string;
    imageUrl: string;
    parentId?: number;
    menuItems: string;
    createBy: string;
    createDate: Date;
    updateBy: string;
    updateDate?: Date;
    constructor(model?: IMenuItem | any);
}
