import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Postcode } from "./Postcode";

@Injectable()
export class PostcodeService {
    
    private postcodesApiUrl = "api/postcode";

    constructor(private http: Http ) {}

    getPostcodes(): Promise<Postcode[]> {
        return this.http.get(this.postcodesApiUrl)
            .toPromise()
            .then(response => response.json().data as Postcode[])
            .catch(this.handleError);
    }

    getPostcode(id: number): Promise<Postcode> {
        const url = "${postcodesApiUrl}/${id}";
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Postcode)
            .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }
}