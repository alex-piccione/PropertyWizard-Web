import { Component } from "@angular/core";

export class Listing {
    id: number;
    postcode: string;
}

export class PostCode {
    code: string;
    description: string;
}

const POSTCODES: PostCode[] = [
    { code: "EC1", description: "London EC1" },
    { code: "EC2", description: "London EC2" },
    { code: "EC3", description: "London EC3" },
    { code: "EC4", description: "London EC4" }
]

@Component({
    selector: "pw-app",
    template: `<h1>{{title}}</h1>
        <h2>{{listing.postcode}}</h2>
        <div><label>Id: </label>{{listing.id}}</div>
        <div>   
            <label>Post code</label>
            <input [(ngModel)]="listing.postcode" placeholder="post code" >
        </div>
        <ul class=postcodes>
            <li *ngFor="let postcode of postcodes"><span class="badge">{{postcode.code}}</span> {{postcode.description}}</li>
        </ul>
    `
    // `<h1>Component: {{title}}. Listing: {{listing.id}}, postcode: {{listing.postcode}}.</h1>`
})

export class AppComponent { 
    title = "Listing";
    listing: Listing = {
        id: 3,
        postcode: ''
    };
    postcodes = POSTCODES;
}