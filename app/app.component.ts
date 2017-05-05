import { Component } from "@angular/core";

export class Listing {
    id: number;
    postcode: string;
}

@Component({
    selector: "pw-app",
    template: `<h1>Component: {{title}}. Listing: {{listing.id}}, postcode: {{listing.postcode}}.</h1>`
})

export class AppComponent { 
    title = "Listing";
    listing: Listing = {
        id: 3,
        postcode: 'aaa'
    };
}