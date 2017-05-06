import { Component, OnInit } from "@angular/core";

import { PostcodeService } from "./postcode.service";
import { Postcode } from "./postcode";


@Component({
    selector: "pw-dashboard",
    templateUrl: "templates/dashboard.html",
    styleUrls: ["templates/dashboard.css"]    
})

export class DashboardComponent {
    postcodes: Postcode[] = [];

    constructor(private postcodeService: PostcodeService) { }

    ngOnInit(): void {
        this.postcodeService.getPostcodes().then(postcodes =>
            this.postcodes = postcodes.slice(1, 3)
        );        
    }
}