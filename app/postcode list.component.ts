import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Postcode} from "./Postcode";
import { PostcodeService } from "./postcode.service";

@Component({    
    selector: "pw-postcodes",
    templateUrl: "templates/postcode list.html",
    styleUrls: ["templates/postcode list.css"] 
})

export class PostcodesComponent { 
    title: string = "Post codes";
    postcodes: Postcode[];
    selectedPostcode: Postcode;

    constructor(
        private postcodeService: PostcodeService,
        private router: Router
    ) { }

    ngOnInit(): void {        
        this.loadPostcodes();
    }

    onSelect(postcode: Postcode): void {
        this.selectedPostcode = postcode;
    }     

    loadPostcodes(): void {
        this.postcodeService.getPostcodes().then(postcodes =>
            this.postcodes = postcodes
        );        
    }

    gotoDetail(): void {
        this.router.navigate(["detail", this.selectedPostcode.id]);        
    }
}