import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router"; 
import { Location } from "@angular/common";
import "rxjs/add/operator/switchMap";

import { Postcode } from "../entities/postcode";
import { PostcodeService } from "../services/postcode.service";

@Component({
    selector: "postcode-detail",
    templateUrl: "templates/postcode detail.html",
    styleUrls: ["templates/postcode detail.css"]
})

export class PostcodeDetailComponent implements OnInit {
    postcode: Postcode = null;

    constructor(
        private postcodeService: PostcodeService,
        private route: ActivatedRoute,
        private location: Location
    ) 
    { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.postcodeService.getPostcode(params["code"]) )
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