import { Component } from "@angular/core";


@Component(
{
    selector: "pw-app",
    template: `
    <h1>{{title}}</h1>
    <pw-postcodes></pw-postcodes>
    `
})

export class AppComponent {
    title: "Listings"
}