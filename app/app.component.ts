import { Component } from "@angular/core";
import { Postcode} from "./Postcode";
//import { PostcodeDetailComponent } from "./postcode-detail.component"

const POSTCODES: Postcode[] = [
    { id: 1, code: "EC1", description: "London EC1" },
    { id: 2, code: "EC2", description: "London EC2" },
    { id: 3, code: "EC3", description: "London EC3" },
    { id: 4, code: "EC4", description: "London EC4" }
]

@Component({
    selector: "pw-app",
    template: `<h1>{{title}}</h1>
        <ul class="postcodes">
            <li *ngFor="let postcode of postcodes" 
                (click)="onSelect(postcode)" 
                [class.selected]="postcode === selectedPostcode">
                <span class="badge">{{postcode.code}}</span> {{postcode.description}}
            </li>
        </ul>
        <postcode-detail [postcode]="selectedPostcode"></postcode-detail>
    `,
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
            background-color: #eee;
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
    title = "Listings";
    postcodes = POSTCODES;
    selectedPostcode: Postcode;
    onSelect(postcode: Postcode): void {
        this.selectedPostcode = postcode;
    } 
}