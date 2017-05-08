import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

// imports for loading and configuring the in-memory web api
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard.component";
import { PostcodesComponent } from "./postcode list.component";
import { PostcodeDetailComponent} from "./postcode detail.component";
import { PostcodeService } from "./postcode.service";

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [ 
        AppComponent, 
        DashboardComponent,
        PostcodesComponent,
        PostcodeDetailComponent 
    ],
    bootstrap: [ AppComponent ],
    providers: [
        PostcodeService
    ]
})

export class AppModule {}