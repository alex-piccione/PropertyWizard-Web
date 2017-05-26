import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";

// components
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard.component";
import { PostcodesComponent } from "./postcode list.component";
import { PostcodeDetailComponent } from "./postcode detail.component";
import { PostcodeSearchComponent } from "./postcode search.component";
import { ListingListComponent } from "./listing list.component";
import { AgencyListComponent } from "./agency list.component";
// services
import { PostcodeService } from "./postcode.service";
import { PostcodeSearchService } from "./postcode search.service";
import { ListingService } from "./listing.service";
import { AgencyService } from "./agency.service";

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [ 
        AppComponent, 
        DashboardComponent,
        PostcodesComponent,
        PostcodeDetailComponent,
        PostcodeSearchComponent,
        ListingListComponent,
        AgencyListComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [
        PostcodeService,
        PostcodeSearchService,
        ListingService,
        AgencyService
    ]
})

export class AppModule {}