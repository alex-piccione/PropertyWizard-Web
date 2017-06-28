import { Component, Input, OnInit } from "@angular/core";

import {BaseComponent} from "../components/base.component";
import {PostcodeService} from "../services/postcode.service";
import {Postcode} from "../entities/postcode";

@Component({
    selector: "sell-data-list",
    templateUrl: "templates/sell data list.html"
})
export class SellDataListComponent extends BaseComponent implements OnInit 
{
    postcodes:Postcode[] = null;
    private postcode: string = null;

    constructor(private postcodeService: PostcodeService)
    {
        super();
    }

    ngOnInit() {
        this.postcodeService.getPostcodes().then(postcodes => this.postcodes = postcodes);
    }

    search() {      
        if (!this.postcode)
            super.warning("A Post code must be selected");
            //return this.showWarning("A Post code must be selected"); 
        /* todo: copy from "agency stats.component"
        this.isStatsLoading = true;
        this.postcodeService.getPostcodeStatistics(this.postcode, this.agencies)
            .then(stats => { this.stats = stats; this.isStatsLoading = false;} );
            */
    }

}