import { Component, Input } from "@angular/core";
import { Postcode } from "./Postcode";

@Component({
    selector: "postcode-detail",
    template: `
        <div *ngIf="postcode">
            <h2>{{postcode.code}} - {{postcode.description}} details</h2>
            <div>
                <label>Code: </label>{{postcode.code}}
            </div>
            <div>
                <label>Description: </label>
                <input [(ngModel)]="postcode.description" placeholder="description/name" />
            </div>
        </div>
    `
})

export class PostcodeDetailComponent {
    @Input() postcode: Postcode;
}