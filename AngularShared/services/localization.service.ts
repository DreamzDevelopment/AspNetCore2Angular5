import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, RequestOptionsArgs } from "@angular/http";
import { HttpClient } from "@angular/common/http";



@Injectable()

export class LocalizationService {
    constructor(private httpClient: HttpClient) {
        
    }

    getLocalizationData(): Observable<any> {
        const _url = '/api/apiLocalization/GetLocalizationData';
        let _reqOptions: RequestOptionsArgs = { };
            _reqOptions.params = [].join('&');
        return this.httpClient.get(_url)
            .map(response => response);
        // await ApiCallService.HttpGetAsync(_url, '', async(response: IMyResponse) => {
        //     console.log(response.data as JSON);
        // });
    }
}