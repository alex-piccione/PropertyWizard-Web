import { Component, Input, OnInit } from "@angular/core";

import {PostcodeService} from "../services/postcode.service";
import {Postcode} from "../entities/postcode";

@Component({
    selector: "sell-data-list",
    templateUrl: "templates/sell data list.html"
})

export class SellDataListComponent implements OnInit 
{
    postcodes:Postcode[] = null;
    private postcode: string = null;
    public aaa: "test";

    constructor(private postcodeService: PostcodeService)
    {

    }

    ngOnInit() {
        this.postcodeService.getPostcodes().then(postcodes => this.postcodes = postcodes);
    }

    search() {      
        if (!this.postcode)
            alert("A Post code must be selected");
            //return this.showWarning("A Post code must be selected"); 
        /* todo: copy from "agency stats.component"
        this.isStatsLoading = true;
        this.postcodeService.getPostcodeStatistics(this.postcode, this.agencies)
            .then(stats => { this.stats = stats; this.isStatsLoading = false;} );
            */
    }

}