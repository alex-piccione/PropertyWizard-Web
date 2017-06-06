import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Agency } from "../entities/agency";
import { AgencyStats } from "../entities/agency stats";

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
            if (element.name == null) 
                element.name = "(noname)";
            let agency = new Agency(element.code, element.name); 
            agencies.push(agency);
        });

        agencies.sort(function(a, b) { 
            return a.name < b.name ? -1 
                : a.name > b.name ? 1
                : 0;
        });

        return agencies;
    }

    getAgencyStats(agencyCode: string): AgencyStats[] {
        var stats:AgencyStats[] = [];
        // todo
        return stats;
    }

    handleError(error: any): Promise<any> {
        console.error("An error occured", error);
        return Promise.reject(error.message || error);
    }
}