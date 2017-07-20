import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {BaseComponent} from "../components/base.component";

import {Agency} from "../entities/agency";
import {Listing} from "../entities/listing";
import {AgencyStats} from "../entities/agency stats";
import {Postcode} from "../entities/postcode";

import {AgencyService} from "../services/agency.service";
import {PostcodeService} from "../services/postcode.service";
import {PagerService} from "../services/pager.service";

@Component({
    selector: "agency-stats",
    templateUrl: "templates/agency stats.html",
    styleUrls: ["templates/agency stats.css"]
})

export class AgencyStatsComponent extends BaseComponent {
    agencies:Agency[] =  []
    postcodes:Postcode[] = null;
    stats:AgencyStats[] = null;
    postcode:Postcode = null;
    isStatsLoading:boolean = false;
    private router:Router;

    constructor(router:Router, private agencyService: AgencyService, private postcodeService: PostcodeService, private pagerService:PagerService) {
        super();
        this.router = router;
        //this.pagerService = pagerService;
    }

    ngOnInit() {
        this.postcodeService.getPostcodes().then(postcodes => this.postcodes = postcodes);
        this.agencyService.getAgencies().then(agencies => this.agencies = agencies);
    }

    // pager object
    private pager: any = {};

    search() {      
        if (!this.postcode)
            return super.warning("A Post code must be selected"); 

        this.setPage(1);
    }
        
    private setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        this.isStatsLoading = true;
        this.postcodeService.getPostcodeStatistics(this.postcode, this.agencies, page)
            .then(result => { 
                this.stats = result.Items;                
                this.pager = this.pagerService.getPager(result.NumberOfItems, page);
                this.isStatsLoading = false;
            } );     
    }

    private getAgency(agencyName:string) :Agency {
        // var agency = this.agencies.filter(function(agency){ agency.name == agencyName });
        // return data.length > 0 ? data[0] : new Agency("(unknown)", "(unknown agency)");
        return this.agencies.find(function(agency){ return agency.name == agencyName })
            || new Agency("(unknown)", "(unknown agency)");
    }
}