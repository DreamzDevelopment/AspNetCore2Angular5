interface IApiCallService {
    HttpGetAsync: (_url: string, _params: string | any, callBackFunc: (response: IMyResponse) => void) => Promise<void>;
    HttpPostAsync: (_url: string, _params: string | any, _xsrf: string, callBackFunc: (response: IMyResponse) => void) => Promise<void>;
}
declare class ApiCallService implements IApiCallService {
    HttpGetAsync(_url: string, _params: string | any, callBackFunc: (response: IMyResponse) => void): Promise<void>;
    HttpPostAsync(_url: string, _params: string | any, _xsrf: string, callBackFunc: (response: IMyResponse) => void): Promise<void>;
    static HttpGetAsync(_url: string, _params: string | any, callBackFunc: (response: IMyResponse) => void): Promise<void>;
    static HttpPostAsync(_url: string, _params: string | any, _xsrf: string, callBackFunc: (response: IMyResponse) => void): Promise<void>;
    static MyFormSubmit(event: Event, selector: string | undefined, callBackFunc: (response: IMyResponse) => void): Promise<void>;
    static GetModel(form: any, selector?: string, isIdName?: boolean): Promise<any>;
    static TestFormSubmit(event: Event): Promise<void>;
    static CallGoogleApi(event: Event): Promise<void>;
}
