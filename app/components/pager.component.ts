import {Component} from "@angular/core";

import 


@Component({
    selector: "pw-pager",
    templateUrl: "templates/pager.html"
})
export class Pager {

    pager: any = {}

    constructor(pages:number){
                // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };

    }

    public setPager(){}

    this.pager = this.pagerService.getPager(this.agencies.length, page);

}

/*
usage:
<pw-pager when="{{isLoading}}"></pw-pager>
*/