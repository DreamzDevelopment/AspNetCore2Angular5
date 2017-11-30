declare class StoreType {
    createBy: string;
    createDate: Date;
    updateBy: string;
    updateDate?: Date;
    storeId: number;
    storeTitle: string;
    storeIconUrl: string;
    description: string;
    parentCategories: Array<ParentCategory>;
    constructor();
}
