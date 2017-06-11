import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
//import { Http } from "@angular/http";
import { Observable } from "rxjs/observable";
import { Subject } from "rxjs/Subject";

import { Postcode } from "../entities/postcode";
import { PostcodeSearchService } from "../services/postcode_search.service";

// Observable class extension
import "rxjs/add/observable/of";

// Observale operators
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
    selector: "postcode-search",
    templateUrl: "templates/postcode search.html",
    styleUrls: ["templates/postcode search.css"]
})

//@Injectable()
export class PostcodeSearchComponent implements OnInit {

    postcodes: Observable<Postcode[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private postcodeSearchService: PostcodeSearchService,
        private router: Router    
    )
    {
    }    

    ngOnInit(): void {
        this.postcodes = this.searchTerms
            .debounceTime(300) // wait 300ms before each keystroke before considering the term
            .distinctUntilChanged() // ignore if search tesrm is same as previous
            .switchMap(term => term // switch to new observable everytime the term changes
            // return the http search observable
            ? this.postcodeSearchService.search(term)
            // or the observable of empty ostcodes if there was no search term
            : Observable.of<Postcode[]>([])
            .catch(error => {
                // todo: add real error handling
                console.log(error );
                return Observable.of<Postcode[]>([]);
            }));
    }

    // push a search term into the strem
    search(term: string): void {
        this.searchTerms.next(term);
    }

    gotoDetail(postcode: Postcode): void {
        let link = ["/detail", postcode.code];
        this.router.navigate(link);
    }
}