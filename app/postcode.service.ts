import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Postcode } from "./Postcode";

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

    parsePostcode(json: any) :Postcode {  
        var postcode = new Postcode(); 
        postcode.code = json.code;
        postcode.description = json.description;
        return postcode;
    }

    parsePostcodes(json: any[]): Postcode[] {
        var postcodes:Postcode[] = [];
        json.forEach(elem => {
            let postcode = new Postcode();
            postcode.code = elem.code;
            postcode.description = elem.description;
            postcodes.push(postcode);
        });        
        return postcodes;
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
        const postcode: Postcode = new Postcode();
        postcode.code = code;
        postcode.description = description;

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

    handleError(error: any): Promise<any> {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }
}