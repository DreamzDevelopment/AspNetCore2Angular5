import { Injectable } from "@angular/core";
import { RequestOptionsArgs } from "@angular/http";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

@Injectable()
export class StoreService {
    constructor(private http: HttpClient) {
        
    }

    getStores(): Observable<Array<StoreType>> {
        const _url = '/api/apiStore/GetStores';
        let _reqOptions: RequestOptionsArgs = { };
            _reqOptions.params = [].join('&');
        return this.http.get(_url)
            .map(response => response as Array<StoreType> );
    }
}