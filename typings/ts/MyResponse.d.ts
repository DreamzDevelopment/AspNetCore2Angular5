interface IMyResult {
}
interface IMyResponse {
    result: boolean | any;
    resultObj?: IJsonResultStatus;
    message?: string;
    data?: any;
}
declare class MyResponse implements IMyResponse {
    data?: any;
    result: boolean | any;
    resultObj?: IJsonResultStatus;
    message?: string;
    constructor(myResponse?: IMyResponse, result?: boolean, message?: string);
}
declare enum JsonResultFlag {
    Succeeded = 0,
    Failed = 1,
    Error = 2,
    NotFound = 3,
    DbRetry = 4,
    Existed = 5,
    Forbidden = 6,
    Empty = 7,
    TaskCompleted = 8,
    Redirect = 9,
}
interface IJsonResultStatus {
    GetResultObject<T>(resultObject: ResultObject<T>): T;
    SetResultObject<T>(resultObject: ResultObject<T>, value: T): void;
    resultObjectId: number;
    resultObjectString: string;
    objectId: string;
    message: string;
    result: JsonResultFlag;
    successList: string[];
    nonSuccessList: string[];
    notFoundList: string[];
    paramList: string[];
    redirectUrl: string;
}
interface ResultObject<T> {
    ObjectList: Array<T>;
    GetItem(index: number): T;
    SetItem(index: number, value: T): void;
}
interface ResultObjectList<T> {
    _dictionary: any[];
    Add(key: string, value: T): void;
    Keys: Array<string>;
}
declare class JsonResultStatus implements IJsonResultStatus {
    resultObjectId: number;
    resultObjectString: string;
    objectId: string;
    message: string;
    result: JsonResultFlag;
    successList: string[];
    nonSuccessList: string[];
    notFoundList: string[];
    paramList: string[];
    redirectUrl: string;
    constructor(result?: IJsonResultStatus | any);
    GetResultObject<T>(resultObject: ResultObject<T>): T;
    SetResultObject<T>(resultObject: ResultObject<T>, value: T): void;
}
