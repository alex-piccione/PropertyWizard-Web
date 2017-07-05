import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

import "rxjs/add/operator/toPromise";


import {BaseService} from "./base.service";
import {SellData} from "../entities/sell data";

@Injectable()
export class SellDataService extends BaseService {

    private baseUrl = super.getApiUrl() + "/selldata";    
    //private headers = new Headers({"Content-Type": "application/json"});

    constructor(private http: Http) {
        super();   
    }

    getSells(postCode: string): Promise<SellData[]> {
        const url = `${this.baseUrl}/list?postCode=${postCode}`;
        return this.http.get(url)
            .toPromise()
            .then(response => this.parseSellData(response.json()))
            .catch(super.handleError);
    }

    private parseSellData(data: any[]): SellData[] {
        let sellDataList: SellData[] = []

        if(data.length > 0)
            console.log(data[0]);

        data.forEach(element => {
            /*if (element.name == null) 
                element.name = "(noname)";*/
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