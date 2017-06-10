import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Postcode } from "./Postcode";
import { Agency } from "./entities/agency";
import { AgencyStats } from "./entities/agency stats";

@Injectable()
export class PostcodeService {

    private baseUrl = "http://api.propertywizard.org/postcode";    
    private headers = new Headers({"Content-Type": "application/json"});

    constructor(private http: Http ) {}

    getApiUrl(url: string): string {
        return `${this.baseUrl}/${url}`;
    }

    getPostcodes(): Promise<Postcode[]> {
        const url = this.getApiUrl("");
        return this.http.get(url)
            .toPromise()
            .then(response => this.parsePostcodes(response.json()))
            .catch(this.handleError);
    }

    getPostcode(code: string): Promise<Postcode> {
        const url = this.getApiUrl(`${code}`);
        return this.http.get(url)
            .toPromise()
            .then(response => this.parsePostcode(response.json()))
            .catch(this.handleError);
    }

    // move to its own Service
    getPostcodeStatistics(postcode: Postcode, agencies: Agency[]): Promise<AgencyStats[]>
    {
        const url = this.baseUrl + `/statistics?code=${postcode.code}`;

        return this.http.get(url)
            .toPromise()
            .then(response => this.createStatistics(response.json(), postcode, agencies))
            .catch(this.handleError);
    }

    update(postcode: Postcode): Promise<Postcode> {        
        const url = this.getApiUrl(`${postcode.code}`); 
        return this.http
            .put(url, JSON.stringify(postcode), {headers: this.headers})
            .toPromise()
            .then(() => postcode)
            .catch(this.handleError);
    }

    create(code: string, description: string): Promise<Postcode> {
        const url = this.getApiUrl("");
        const postcode: Postcode = new Postcode(code, description);
        
        return this.http.post(url, JSON.stringify(postcode /*{"code": code, "description": description}*/), {headers: this.headers})
            .toPromise()
            //.then(response =>  response.json().data as Postcode)
            .then(response => postcode)
            .catch(this.handleError);
    }

    delete(code: string): Promise<Postcode> {
        const url = this.getApiUrl(`${code}`);
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    // private methods //

    private handleError(error: any): Promise<any> {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }

    private parsePostcode(json: any) :Postcode {  
        var postcode = new Postcode(json.code, json.description); 
        return postcode;
    }

    private parsePostcodes(json: any[]): Postcode[] {
        var postcodes:Postcode[] = [];
        json.forEach(elem => {
            let postcode = new Postcode(elem.code, elem.description);
            postcodes.push(postcode);
        });        
        return postcodes;
    }

    private createStatistics(json: any[], postcode: Postcode, agencies: Agency[]): AgencyStats[] {
        var stats:AgencyStats[] = [];
        json.forEach(elem => {
            var agency = agencies.find(ag => ag.code == elem.agencyCode);
            stats.push(new AgencyStats(postcode, agency, elem.noProperties));
        });

        // sort by noProperties descrending
        stats.sort(function(a, b){ 
            return a.noProperties < b.noProperties ? 1
                : a.noProperties > b.noProperties ? -1
                : 0
        } );

        return stats;
    }
}

