"use strict";
var MenuItemType;
(function (MenuItemType) {
    MenuItemType[MenuItemType["Default"] = 0] = "Default";
    MenuItemType[MenuItemType["PictureBox"] = 1] = "PictureBox";
    MenuItemType[MenuItemType["Gradient"] = 2] = "Gradient";
})(MenuItemType || (MenuItemType = {}));
var SiteNavigationModel = (function () {
    function SiteNavigationModel(model) {
        this.menuItems = [];
        this.selectorBase = model && model.selectorBase || '';
        this.selectedTemplate = model && model.selectedTemplate || -1;
        this.menuTemplates = model && model.menuTemplates || [];
        this.menuItems = model && model.menuItems || [];
    }
    return SiteNavigationModel;
}());
var MenuControlOption = (function () {
    function MenuControlOption(model) {
        this.menuLevel = model && model.menuLevel || 0;
        this.elementSelector = model && model.elementSelector || '';
        this.btnSelector = model && model.btnSelector || '';
        this.targetSelector = model && model.targetSelector || '';
    }
    return MenuControlOption;
}());
var MenuHtml = (function () {
    function MenuHtml(model) {
        this.createDate = new Date();
        this.updateDate = new Date();
        this.selector = model && model.selector || '';
        this.title = model && model.title || '';
        this.selectorImg = model && model.selectorImg || '';
        this.selectorBtn = model && model.selectorBtn || '';
        this.html = model && model.html || '';
        this.createBy = model && model.createBy || '';
        this.createDate = model && model.createDate || new Date();
        this.updateBy = model && model.updateBy || '';
        this.updateDate = model && model.updateDate || new Date();
    }
    return MenuHtml;
}());
var MenuTemplate = (function () {
    function MenuTemplate(model) {
        this.createDate = new Date();
        this.updateDate = new Date();
        this.id = model && model.id || -1;
        this.title = model && model.title || '';
        this.description = model && model.description || '';
        this.rootId = model && model.rootId || -1;
        this.rootElement = model && model.rootElement || new MenuHtml();
        this.childId = model && model.childId || -1;
        this.childElement = model && model.childElement || new MenuHtml();
        this.createBy = model && model.createBy || '';
        this.createDate = model && model.createDate || new Date();
        this.updateBy = model && model.updateBy || '';
        this.updateDate = model && model.updateDate || new Date();
    }
    return MenuTemplate;
}());
var MenuItem = (function () {
    function MenuItem(model) {
        this.createDate = new Date();
        this.updateDate = new Date();
        this.id = model && model.id || -1;
        this.title = model && model.title || '';
        this.description = model && model.description || '';
        this.target = model && model.target || '';
        this.iconHtml = model && model.iconHtml || '';
        this.iconUrl = model && model.iconUrl || '';
        this.imageUrl = model && model.imageUrl || '';
        this.parentId = model && model.parentId || undefined;
        this.menuItems = model && model.menuItems || [];
        this.createBy = model && model.createBy || '';
        this.createDate = model && model.createDate || new Date();
        this.updateBy = model && model.updateBy || '';
        this.updateDate = model && model.updateDate || new Date();
    }
    return MenuItem;
}());
