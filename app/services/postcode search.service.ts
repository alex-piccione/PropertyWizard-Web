import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map";

import { Postcode } from "../entities/postcode";

@Injectable()
export class PostcodeSearchService { 

    constructor(private http: Http) {}
    
    search(term: string): Observable<Postcode[]> {
        return this.http.get(`app/postcodes/?name=${term}`)
            .map(response => response.json().data as Postcode[]);
    }
}