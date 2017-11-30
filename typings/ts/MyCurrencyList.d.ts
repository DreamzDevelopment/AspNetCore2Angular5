interface ICurrencyList {
}
declare class MyCurrencyList implements ICurrencyList {
    constructor();
    static GetCurrency(id: string | any): Promise<any>;
    private static ISOCurrency;
}
