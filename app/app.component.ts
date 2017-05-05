import { Component } from "@angular/core";

export class Listing {
    id: number;
    postcode: string;
}

@Component({
    selector: "pw-app",
    template: `<h1>{{title}}</h1>
        <h2>{{listing.postcode}}</h2>
        <div><label>Id: </label>{{listing.id}}</div>
        <div>   
            <label>Post code</label>
            <input [(ngModel)]="listing.postcode" placeholder="post code" >
        </div>
    `
    // `<h1>Component: {{title}}. Listing: {{listing.id}}, postcode: {{listing.postcode}}.</h1>`
})

export class AppComponent { 
    title = "Listing";
    listing: Listing = {
        id: 3,
        postcode: ''
    };
}