import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router"; 
import { Location } from "@angular/common";
import "rxjs/add/operator/switchMap";

import { Postcode } from "./Postcode";
import { PostcodeService } from "./postcode.service";

@Component({
    selector: "postcode-detail",
    templateUrl: "templates/postcode detail.html",
    styleUrls: ["templates/postcode detail.css"]
})

export class PostcodeDetailComponent implements OnInit {
    postcode: Postcode;

    constructor(
        private postcodeService: PostcodeService,
        private route: ActivatedRoute,
        private location: Location
    ) 
    { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.postcodeService.getPostcode(+params["id"]))
            .subscribe(postcode => this.postcode = postcode);
    }

    goBack(): void {
        this.location.back();        
    }

    save(): void {
        this.postcodeService.update(this.postcode)
            .then(() => this.goBack());
    }
}