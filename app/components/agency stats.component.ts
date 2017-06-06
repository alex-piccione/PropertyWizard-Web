import {Component, OnInit} from "@angular/core";

import {Agency} from "../entities/agency";
import {AgencyStats} from "../entities/agency stats";
import {AgencyService} from "../services/agency.service";

@Component({
    selector: "agency-stats",
    templateUrl: "templates/agency stats.html",
    styleUrls: ["templates/agency stats.css"]
})

export class AgencyStatsComponent {

    stats:AgencyStats[] = [];

    constructor(private agencyService: AgencyService) {
    }

    search(postCode:string) {
        console.log("search, code: " + postCode);
        var agencyCode = "test"; // todo
        var stats = this.agencyService.getAgencyStats(agencyCode);

        this.stats = stats;
    }

}