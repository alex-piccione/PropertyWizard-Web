import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Listing } from "./Listing";

@Injectable()
export class ListingService {

    private baseUrl = "http://api.propertywizard.org/postcode";    
    private headers = new Headers({"Content-Type": "application/json"});

    constructor(private http: Http ) {}

    handleError(error: any): Promise<any> {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }
}