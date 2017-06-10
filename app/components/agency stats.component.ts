import {Component, OnInit} from "@angular/core";

import {Agency} from "../entities/agency";
import {Listing} from "../entities/listing";
import {AgencyStats} from "../entities/agency stats";
import {Postcode} from "../postcode";

import {AgencyService} from "../services/agency.service";
import {PostcodeService} from "../postcode.service";

@Component({
    selector: "agency-stats",
    templateUrl: "templates/agency stats.html",
    styleUrls: ["templates/agency stats.css"]
})

export class AgencyStatsComponent {
    agencies:Agency[] =  []
    postcodes:Postcode[] = [];
    stats:AgencyStats[] = [];
    postcode:Postcode = null;

    constructor(private agencyService: AgencyService, private postcodeService: PostcodeService) {
    }

    ngOnInit() {
        this.postcodeService.getPostcodes().then(postcodes => this.postcodes = postcodes);
        this.agencyService.getAgencies().then(agencies => this.agencies = agencies);
    }

    search() {      
        if (!this.postcode)
            return this.showWarning("A Post code must be selected");     
            
        this.postcodeService.getPostcodeStatistics(this.postcode, this.agencies)
            .then(stats => this.stats = stats);
    }

    private getAgency(agencyName:string) :Agency {
        // var agency = this.agencies.filter(function(agency){ agency.name == agencyName });
        // return data.length > 0 ? data[0] : new Agency("(unknown)", "(unknown agency)");
        return this.agencies.find(function(agency){ return agency.name == agencyName })
            || new Agency("(unknown)", "(unknown agency)");
    }

    private showWarning(text:string){
        alert(text);
    }

}