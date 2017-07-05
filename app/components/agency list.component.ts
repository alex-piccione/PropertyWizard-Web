import { Component, OnInit } from "@angular/core";

import { Agency } from "../entities/agency";
import { AgencyService } from "../services/agency.service";
import { PagerService } from "../services/pager.service";

@Component({
    selector: "agency-list",
    templateUrl: "templates/agency list.html",
    styleUrls: ["templates/agency list.css"]
})

export class AgencyListComponent implements OnInit {

    agencies: Agency[] = [];

    constructor (
        private agencyService: AgencyService,
        private pagerService: PagerService
    ){}

    ngOnInit():void {
        this.agencyService.getAgencies()
            .then( agencies => {
                 this.agencies = agencies; this.setPage(1);
            });

        //this.setPage(1);
    }


    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    setPage(page: number) {
        //console.log("setPage(): " + page)
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.agencies.length, page);

        // get current page of items
        this.pagedItems = this.agencies.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}