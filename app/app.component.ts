import { Component } from "@angular/core";


@Component(
{
    selector: "pw-app",
    template: `
    <h1>{{title}}</h1>
    <a routerLink="/postcodes">Post codes</a>
    <router-outlet><router-outlet>
    `
})

export class AppComponent {
    title: "Listings"
}