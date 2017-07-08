import { Component, Input, OnInit } from "@angular/core";

import {BaseComponent} from "../components/base.component";
import {PostcodeService} from "../services/postcode.service";
import {SellDataService} from "../services/sell_data.service";
import {PagerService} from "../services/pager.service";
import {Postcode} from "../entities/postcode";
import {SellData} from "../entities/sell data";
import {SearchResult} from "../entities/search result";

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
    pager: any = {};
    pagedItems: SellData[] = null;
    private pageSize = 25; // default

    constructor(private sellDataservice: SellDataService, 
        private postcodeService: PostcodeService,
        private pagerService: PagerService
        )
    {
        super();
    }

    ngOnInit() {
        this.postcodeService.getPostcodes().then(postcodes => this.postcodes = postcodes);
    }

    search() {      
        if (!this.postcode) 
            return super.warning("A post code must be selected");

        this.sellDataList = null;

        this.setPage(1);
/*
        this.isLoadingSellData = true;
        this.sellDataservice.getSells(this.postcode.code, this.pageSize, 1)
            .then(searchResult => {
                this.isLoadingSellData = false; 
                this.sellDataList = searchResult.Items;

                this.pager = this.pagerService.getPager(searchResult.NumberOfItems, 1, this.pageSize);              
            });
            */
    }

    setPage(page: number) {
        this.isLoadingSellData = true;
        this.sellDataservice.getSells(this.postcode.code, this.pageSize, 1)
            .then(searchResult => {
                this.isLoadingSellData = false; 
                this.sellDataList = searchResult.Items;
                this.pager = this.pagerService.getPager(searchResult.NumberOfItems, page, this.pageSize);              
            });
    }
}