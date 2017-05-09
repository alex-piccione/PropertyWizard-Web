import { Component } from "@angular/core";

import { PostcodeSearchService } from "./postcode search.service";

@Component({
    selector: "postcode-search",
    templateUrl: "templates/postcode search.html",
    styleUrls: ["templates/postcode search.css"]
})


export class PostcodeSearchComponent {

    constructor(private postcodeSearchService: PostcodeSearchService)
    {
        
    }

    
}