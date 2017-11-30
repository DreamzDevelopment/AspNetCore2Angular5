interface IKeyValuePair<TKey, TValue> {
    Key: TKey;
    Value: TValue;
}
declare class KeyValuePair<TKey, TValue> implements IKeyValuePair<TKey, TValue> {
    constructor(key: TKey, value: TValue);
    Key: TKey;
    Value: TValue;
}
interface IMyDictionary<TKey, TValue> {
    length: () => number | any;
    Get: (key: TKey | any) => Promise<IKeyValuePair<TKey, TValue>>;
    Add: (key: TKey, value: TValue) => Promise<IMyResponse>;
    Update: (key: TKey, value: TValue) => Promise<IMyResponse>;
    Remove: (key: TKey) => Promise<IMyResponse>;
    GetNames: () => Promise<TKey[]>;
    GetValues: () => Promise<TValue[]>;
    ForEach: (callBackFunc: (kvp: IKeyValuePair<TKey, TValue>, index: number, lastIndex?: boolean) => void) => Promise<void>;
}
declare class MyDictionary<TKey, TValue> implements IMyDictionary<TKey, TValue> {
    private Keys;
    private Values;
    private response;
    constructor();
    length: () => number;
    Get(key: TKey | any): Promise<IKeyValuePair<TKey, TValue>>;
    Add(key: TKey, value?: TValue): Promise<IMyResponse>;
    Update(key: TKey, value: TValue): Promise<IMyResponse>;
    Remove(key: TKey): Promise<IMyResponse>;
    GetNames(): Promise<TKey[]>;
    GetValues(): Promise<TValue[]>;
    ForEach(callBackFunc: (kvp: IKeyValuePair<TKey, TValue>, index: number, lastIndex?: boolean) => void): Promise<void>;
}
