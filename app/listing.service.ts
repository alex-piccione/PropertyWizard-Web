import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Listing } from "./Listing";

@Injectable()
export class ListingService {

    private baseUrl = "http://api.propertywizard.org/listing";    
    private headers = new Headers({"Content-Type": "application/json"});

    constructor(private http: Http ) {}

    getApiUrl(url: string): string {
        return `${this.baseUrl}${url}`;
    }

    getListings(postCode: string): Promise<Listing[]> {
        const url = this.getApiUrl(`?postCode=${postCode}`);
        return this.http.get(url)
            .toPromise()
            .then(response => this.parseListings(response.json()))
            .catch(this.handleError);
    }

    parseListings(data: any[]): Listing[] {
        let listings: Listing[] = [];
        data.forEach(element => {
            let listing = new Listing();
            listing.id = element.listingId;
            // element.postCode
            listing.agency = element.agencyName; // get mapped code
            listing.price = element.price;
            listing.lastPublishDate = element.lastPublishDate;
            listings.push(listing);
        });
        return listings;
    }

    handleError(error: any): Promise<any> {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }
}