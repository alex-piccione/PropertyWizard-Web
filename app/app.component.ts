import { Component } from "@angular/core";

@Component({
    selector: "pw-app",
    template: `<h1>Component {{name}}</h1>`
})

export class AppComponent { name = "Angular"; }