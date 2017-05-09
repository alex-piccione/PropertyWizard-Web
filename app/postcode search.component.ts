import { Component, Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { PostcodeSearchService } from "./postcode search.service";

@Component({
    selector: "postcode-search",
    templateUrl: "templates/postcode search.html",
    styleUrls: ["templates/postcode search.css"]
})

@Injectable()
export class PostcodeSearchComponent {

    constructor(private postcodeSearchService: PostcodeSearchService)
    {

    }    
}