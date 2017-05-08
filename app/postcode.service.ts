import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Postcode } from "./Postcode";

@Injectable()
export class PostcodeService {
    
    private postcodeApiUrl = "api/postcodes";
    private headers = new Headers({"Content-Type": "application/json"});

    constructor(private http: Http ) {}

    getPostcodes(): Promise<Postcode[]> {
        return this.http.get(this.postcodeApiUrl)
            .toPromise()
            .then(response => response.json().data as Postcode[])
            .catch(this.handleError);
    }

    getPostcode(id: number): Promise<Postcode> {
        const url = `${this.postcodeApiUrl}/${id}`;
        console.log(url)
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Postcode)
            .catch(this.handleError);
    }

    update(postcode: Postcode): Promise<Postcode> {
        const url = `${this.postcodeApiUrl}/${postcode.id}`;
        return this.http
            .put(url, JSON.stringify(postcode), {headers: this.headers})
            .toPromise()
            .then(() => postcode)
            .catch(this.handleError);
    }

    create(code: string, description: string): Promise<Postcode> {
        return this.http.post(this.postcodeApiUrl, JSON.stringify({"code": code, "description": description}), {headers: this.headers})
            .toPromise()
            .then(response => response.json().data as Postcode)
            .catch(this.handleError);
    }

    delete(id: number): Promise<Postcode> {
        const url = `${this.postcodeApiUrl}/${id}`;
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