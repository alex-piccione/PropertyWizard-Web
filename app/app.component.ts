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
        <ul class="postcodes">
            <li *ngFor="let postcode of postcodes">
                <span class="badge">{{postcode.code}}</span> {{postcode.description}}
            </li>
        </ul>
    `,
    // `<h1>Component: {{title}}. Listing: {{listing.id}}, postcode: {{listing.postcode}}.</h1>`
    styles: [`
        .selected { background-color: #cfd8dc !important; color: white; }
        .postcodes { 
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .postcodes li {
            cursor: pointer;
            position: relative;
            left: 0;
            backtground-color: #eee;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .postcodes li:selected:hover {
            background-color: #bbd8dc !important;
            color: white;
        }
        .postcodes li:hover {
            color: #607d8b;
            background-color: #ddd;
            left: .1em;
        }
        .postcodes .text { position: relative; top: -3px; }
        .postcodes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607d8b;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `]
})

export class AppComponent { 
    title = "Listing";
    listing: Listing = {
        id: 3,
        postcode: ''
    };
    postcodes = POSTCODES;
}