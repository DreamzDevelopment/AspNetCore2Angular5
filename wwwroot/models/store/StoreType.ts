
class StoreType {
    
    createBy: string;
    createDate: Date;
    updateBy: string;
    updateDate?: Date;

    storeId: number;

    storeTitle: string;
    /**
     * Image icon url for store, to identically set an icon for store type
     * @type {string}
     * @memberof StoreType
     */
    storeIconUrl: string;
    /**
     * StoreType description, what task means by a particular StoreType value for different StoreTypes.
     * @type {string}
     * @memberof StoreType
     */
    description: string;
    // Navigation
    parentCategories: Array<ParentCategory>;
    constructor() {
        
    }
}


