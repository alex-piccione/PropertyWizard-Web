import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

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