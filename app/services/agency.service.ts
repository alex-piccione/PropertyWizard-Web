import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

import "rxjs/add/operator/toPromise";

import {BaseService} from "./base.service";
import { Agency } from "../entities/agency";
import { AgencyStats } from "../entities/agency stats";

@Injectable()
export class AgencyService extends BaseService {

    private baseUrl = super.getApiUrl() + "/agency"; 
    private headers = new Headers({"Content-Type": "application/json"});

    constructor(private http: Http) {
        super();
    }

    getAgencies(): Promise<Agency[]> {
        const url = this.baseUrl;
        return this.http.get(url)
            .toPromise()
            .then(response => this.parseAgencies(response.json()))
            .catch(super.handleError);
    }

    private parseAgencies(data: any[]): Agency[] {
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
}