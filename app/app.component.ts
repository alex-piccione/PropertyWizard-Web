import { Component } from "@angular/core";

@Component(
{
    selector: "pw-app",
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/postcodes">Post codes</a>
    </nav>
    <router-outlet><router-outlet>
    `
})

export class AppComponent {
    title: "Listings"
}