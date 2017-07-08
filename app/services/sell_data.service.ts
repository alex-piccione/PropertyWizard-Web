import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

import "rxjs/add/operator/toPromise";

import {BaseService} from "./base.service";
import {SellData} from "../entities/sell data";
import {SearchResult} from "../entities/search result";

@Injectable()
export class SellDataService extends BaseService {

    private baseUrl = super.getApiUrl() + "/selldata";    
    //private headers = new Headers({"Content-Type": "application/json"});

    constructor(private http: Http) {
        super();   
    }
    getSells(postCode: string, pageSize:number, page:number): Promise<SearchResult<SellData>> {
        const url = `${this.baseUrl}/list?postCode=${postCode}&pageSize=${pageSize}&page=${page}`;        
        return this.http.get(url)
            .toPromise()
            .then(response => this.parseSearchResult(response.json()))
            .catch(super.handleError);
    }

    private parseSearchResult(data: any): SearchResult<SellData> {
        const numberOfItems = data.numberOfItems;
        const items = this.parseSellData(data.items);
        return new SearchResult<SellData>(items, numberOfItems);
    }

    private parseSellData(data: any[]): SellData[] {
        let sellDataList: SellData[] = []

        data.forEach(element => {
            let sellData = new SellData(element.id, element.insertDate, element.date, element.price, element.postCode);
            sellData.propertyType = element.propertyType;
            sellData.transactionId = element.transactionId;

            sellData.paon = element.paon;
            sellData.saon = element.saon;
            sellData.street = element.street;
            sellData.locality = element.locality;
            sellData.city = element.city;
            sellData.district = element.district;
            sellData.county = element.county;
            
            sellData.x = element.x;
            sellData.action = element.action;

            sellDataList.push(sellData);
        });
/*
        sellDataList.sort(function(a, b) { 
            return a.name < b.name ? -1 
                : a.name > b.name ? 1
                : 0;
        });*/

        return sellDataList;
    }
}