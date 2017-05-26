import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Agency } from "./agency";

@Injectable()
export class AgencyService {

    private baseUrl = "http://api.propertywizard.org/agency";    
    private headers = new Headers({"Content-Type": "application/json"});

    constructor(private http: Http){}

    getAgencies(): Promise<Agency[]> {
        const url = `${this.baseUrl}`;
        console.log("getAgencies");
        return this.http.get(url)
            .toPromise()
            .then(response => this.parseAgencies(response.json()))
            .catch(this.handleError);
    }

    parseAgencies(data: any[]): Agency[] {
        let agencies: Agency[] = []
        data.forEach(element => {
            let agency = new Agency(element.code, element.name); 
            agencies.push(agency);
        });
        return agencies;
    }

    handleError(error: any): Promise<any> {
        console.error("An error occured", error);
        return Promise.reject(error.message || error);
    }
}