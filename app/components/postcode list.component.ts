import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Postcode} from "../entities/postcode";
import { PostcodeService } from "../services/postcode.service";

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
        this.router.navigate(["detail", this.selectedPostcode.code]);        
    }

    gotoListings(): void{
        this.router.navigate(["listing"], { queryParams: { postcode: this.selectedPostcode.code}});
    }

    add(code: string, description: string, enabled:boolean): void {
        code = code.trim();
        description = description.trim();
        if(!code || !description) 
            return;
        this.postcodeService.create(code, description, enabled)
            .then(postcode => {
                this.postcodes.push(postcode);
                this.selectedPostcode = null;
            });
    }

    delete(postcode: Postcode): void {
        this.postcodeService.delete(postcode.code)
            .then(() => {
                this.postcodes = this.postcodes.filter(p => p !== postcode);
                if(this.selectedPostcode === postcode)
                    this.selectedPostcode = null;
            });
    }
}