import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard.component";
import { PostcodesComponent } from "./postcodes.component";
import { PostcodeDetailComponent} from "./postcode-detail.component";
import { PostcodeService } from "./postcode.service";

@NgModule({
    imports: [ 
        BrowserModule, 
        RouterModule.forRoot([
            { path: "", redirectTo: "/dashboard", pathMatch: "full" },
            { path: "dashboard", component: DashboardComponent },
            { path: "postcodes", component: PostcodesComponent }
        ]),
        FormsModule
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