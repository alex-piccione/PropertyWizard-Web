import { Component, Input, OnInit } from "@angular/core";

import {BaseComponent} from "../components/base.component";
import {PostcodeService} from "../services/postcode.service";
import {SellDataService} from "../services/sell_data.service";
import {Postcode} from "../entities/postcode";
import {SellData} from "../entities/sell data";

@Component({
    selector: "sell-data-list",
    templateUrl: "templates/sell data list.html"
})
export class SellDataListComponent extends BaseComponent implements OnInit 
{
    postcodes:Postcode[] = null;
    private postcode: Postcode = null;
    public sellDataList: SellData[] = null;
    public isLoadingSellData = false;

    constructor(private sellDataservice: SellDataService, private postcodeService: PostcodeService)
    {
        super();
    }

    ngOnInit() {
        this.postcodeService.getPostcodes().then(postcodes => this.postcodes = postcodes);
    }

    search() {      
        if (!this.postcode)
            super.warning("A Post code must be selected");

        this.sellDataList = null;
        this.isLoadingSellData = true;
        this.sellDataservice.getSells(this.postcode.code)
            .then(sellDataList => { this.isLoadingSellData = false; this.sellDataList = sellDataList; });
    }

}