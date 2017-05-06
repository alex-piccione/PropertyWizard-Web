import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PostcodesComponent } from "./postcodes.component";
import { PostcodeDetailComponent} from "./postcode-detail.component";
import { PostcodeService } from "./postcode.service";

@NgModule({
    imports: [ 
        BrowserModule, 
        RouterModule.forRoot([
        {   
            path: "postcodes",
            component: PostcodesComponent
        }
        ]),
        FormsModule
    ],
    declarations: [ 
        AppComponent, 
        PostcodesComponent,
        PostcodeDetailComponent 
    ],
    bootstrap: [ AppComponent ],
    providers: [
        PostcodeService
    ]
})

export class AppModule {}