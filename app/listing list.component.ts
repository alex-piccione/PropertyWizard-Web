import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router"; 
import { Location } from "@angular/common";
import "rxjs/add/operator/switchMap";

import { Listing } from "./Listing";
import { ListingService } from "./listing.service";

@Component({
    selector: "listing-list",
    templateUrl: "templates/listing list.html",
    styleUrls: ["templates/listing list.css"]
})

export class ListingListComponent implements OnInit {
    postCode: string = null;
    listings: Listing[] = [];

    constructor(
        private listingService: ListingService,
        private route: ActivatedRoute,
        private location: Location
    ) 
    { }

    ngOnInit(): void {
        this.route.queryParams.subscribe( data => {
                console.log('queryParams', data['postcode']);
                this.postCode = data["postcode"];
            });

        //this.route.params
            //.switchMap((params: Params) => this.listingService.getPostcode(params["postcode"]) )
            //.subscribe(postcode => this.postcode = postcode);
    }

    goBack(): void {
        this.location.back();        
    }
}