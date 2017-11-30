

    enum MenuItemType {
        Default = 0,
        PictureBox = 1,
        Gradient = 2,
    }
    interface ISiteNavigationModel {
        selectorBase: string,
        selectedTemplate: number;
        menuTemplates: IMenuTemplate[];
        menuItems: IMenuItem[];
    }

    class SiteNavigationModel implements ISiteNavigationModel {
        selectorBase: string;
        selectedTemplate: number;
        menuTemplates: IMenuTemplate[];
        menuItems: IMenuItem[] = [];
        public constructor(model?: ISiteNavigationModel | any) {
            this.selectorBase = model && model.selectorBase || '';
            this.selectedTemplate = model && model.selectedTemplate || -1;
            this.menuTemplates = model && model.menuTemplates || [];
            this.menuItems = model && model.menuItems || [];
        }
    }
    interface IMenuControlOption {
        /** 
         * What is level of current menu item, and whose child section to view or hide
         */
        menuLevel: number,
        /**
         * The element, which contains the Child Menu Section
         */
        elementSelector: string, 
        /**
         * The btn element, which contains the Menu Item Title, and Target to the Link the Menu item is for
         * Includes the caret, for controlling sub menu section's view and hide
         */
        btnSelector: string, 
        /**
         * Which child menu section to view or hide
         */
        targetSelector: string,
        
    }
    class MenuControlOption implements IMenuControlOption {
        /** 
         * What is level of current menu item, and whose child section to view or hide
         */
        menuLevel: number;
        /**
         * The element, which contains the Child Menu Section
         */
        elementSelector: string;
        /**
         * The btn element, which contains the Menu Item Title, and Target to the Link the Menu item is for
         * Includes the caret, for controlling sub menu section's view and hide
         */
        btnSelector: string;
        /**
         * Which child menu section to view or hide
         */
        targetSelector: string;
        constructor(model?: IMenuControlOption | any) {
            this.menuLevel = model && (<number>model.menuLevel) || 0 ;
            this.elementSelector = model && model.elementSelector || '';
            this.btnSelector = model && model.btnSelector || '';
            this.targetSelector = model && model.targetSelector || '';
        }
    }
    // <ul class="u-item my-row picture-box root-item" > // Root Menu Item
        // <a class="btn root-btn" >
        //     <span style="font-size:20px" class="span-item active">Know More</span>
        // </a><br> // Root Menu Item + Text
        // <li class="l-item col-md-3 col-xs-6 col-full-width child-item" > // Child Element
        //     <div class="img-box child-img" ></div>
        //     <a class="btn btn-block child-btn" href="#" title="About Us">
        //         <span class="btn-icon-left pull-left"><i class="fa fa-file-archive-o"></i>&nbsp;&nbsp;</span>&nbsp;&nbsp;About Us 1
        //     </a>
        // </li>
    // </ul>
        // selector: string; // such as '.root-item'
        // selectorImg: string; // such as '.root-img'
        // selectorBtn: string; // such as '.root-btn'
        
        // selectorChild: string; // such as '.child-item'
        // selectorChildImg: string; // such as '.child-img'
        // selectorChildBtn: string; // such as '.child-btn'
    /**
     * Html content of Navigation Menu Implementation
     * Contains, different controls selector [such selector '.class-name', '#id' etc.]
     * These controls selector will be used to replace appropriate section of html content, according
     * to the MenuItem information of that particular MenuItem
     * 
        * example html: root element
        * optional section inside of square bracket '[]'
        * 
        * <ul class="u-item my-row picture-box root-item" >
        * <a class="btn root-btn" >
        * [icon html: <span class="btn-icon-left pull-left"><i class="fa fa-file-archive-o"></i>&nbsp;&nbsp;</span>] - this will be replaced with 'MenuItem' -> iconHtml
        * <span style="font-size:20px" class="span-item active">Know More</span>
        * [expansion and collapse icon: html ]
        * </a><br>
        * </ul>
        * 
        * example html: child element
        * optional section inside of square bracket '[]'
        * 
        * <li class="l-item col-md-3 col-xs-6 col-full-width child-item" >
        * <div class="img-box child-img" ></div>
        * <a class="btn btn-block child-btn" href="#" title="About Us">
        * [icon html: <span class="btn-icon-left pull-left"><i class="fa fa-file-archive-o"></i>&nbsp;&nbsp;</span>] - this will be replaced with 'MenuItem' -> iconHtml
        * <span>About Us 1</span>
        * </a>
        * </li>
     */
    interface IMenuHtml {
        id: number; // 
        /**
         * Title of the Html block
         */
        title: string;
        /**
         * Root Selector Element
         */
        selector: string; // such as '.root-item'
        /**
         * Image container element, if 'img' element type, then 'src' attribute, otherwise background image
         */
        selectorImg: string; // such as '.root-img'
        /**
         * Button to include target [href] of the menu item
         */
        selectorBtn: string; // such as '.root-btn'
        /**
         * Complete html content of the menu item template
         */
        html: string;
        /** 
         * region  Create & Update information 
         */
            createBy: string;
            createDate: Date;
            updateBy: string;
            updateDate?: Date;
        /**
         * 
         */
    }

    class MenuHtml implements IMenuHtml {
        
        id: number; 
        /**
         * Title of the Html block
         */
        title: string;
        /**
         * Root Selector Element
         */
        selector: string;
        /**
         * Image container element, if 'img' element type, then 'src' attribute, otherwise background image
         */
        selectorImg: string;
        /**
         * Button to include target [href] of the menu item
         */
        selectorBtn: string;
        /**
         * Complete html content of the menu item template
         */
        html: string;
        /** 
             * region  Create & Update information 
             * */
                
            createBy: string;
            createDate: Date = new Date();
            updateBy: string;
            updateDate?: Date = new Date();
        /**
         * 
         */
        constructor(model?: IMenuHtml | any) {
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

    }
    interface IMenuTemplate {
        id: number;
        /**
         * Title of the Template
         */
        title: string;
        /**
         * Description of the Template
         */
        description: string;
        /**
         * Root Element, foreign Key
         */
        rootId: number;
        rootElement: IMenuHtml;
        /**
         * Child Element, foreign Key
         */
        childId: number;
        childElement: IMenuHtml;
        /** 
         * region  Create & Update information 
         * */
            createBy: string;
            createDate: Date;
            updateBy: string;
            updateDate?: Date;
        /**
         * 
         */
    }
        
        
    class MenuTemplate implements IMenuTemplate {
        id: number;
        /**
         * Title of the Template
         */
        title: string;
        /**
         * Description of the Template
         */
        description: string;
        /**
         * Root Element, foreign Key
         */
        rootId: number;
        rootElement: IMenuHtml;
        /**
         * Child Element, foreign Key
         */
        childId: number;
        childElement: IMenuHtml;
        /** 
         * region  Create & Update information 
         * */
            createBy: string;
            createDate: Date = new Date();
            updateBy: string;
            updateDate?: Date = new Date();
        /**
         * 
         */
        constructor(model?: IMenuTemplate | any) {
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
    }
    interface IMenuItem {
        id: number;
        /**
         * Title of the MenuItem
         */
        title: string;
        /**
         * Description of the MenuItem
         */
        description: string;
        /**
         * Target/Href of the MenuItem
         */
        target: string;
        /**
         * Html content of the Icon for the MenuItem
         */
        iconHtml: string;
        /**
         * Image Url of the Icon for the MenuItem
         */
        iconUrl: string;
        /**
         * Image Url of the Image of the MenuItem
         */
        imageUrl: string;
        /**
         * Parent Element Id, Foreign Key relation
         */
        parentId?: number;
        /**
         * Comma separated Ids of Child element(s)
         */
        menuItems: string;
        /** 
         * region  Create & Update information 
         * */
            createBy: string;
            createDate: Date;
            updateBy: string;
            updateDate?: Date;
        /**
         * 
         */
    }
    class MenuItem implements IMenuItem {
        id: number;
        /**
         * Title of the MenuItem
         */
        title: string;
        /**
         * Description of the MenuItem
         */
        description: string;
        /**
         * Target/Href of the MenuItem
         */
        target: string;
        /**
         * Html content of the Icon for the MenuItem
         */
        iconHtml: string;
        /**
         * Image Url of the Icon for the MenuItem
         */
        iconUrl: string;
        /**
         * Image Url of the Image of the MenuItem
         */
        imageUrl: string;
        /**
         * Parent Element Id, Foreign Key relation
         */
        parentId?: number;
        /**
         * Comma separated Ids of Child element(s)
         */
        menuItems: string;
        /** 
         * region  Create & Update information 
         * */
            createBy: string;
            createDate: Date = new Date();
            updateBy: string;
            updateDate?: Date = new Date();
        /**
         * 
         */
        public constructor(model?: IMenuItem | any) {
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
    }