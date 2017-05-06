import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { PostcodeDetailComponent} from "./postcode-detail.component";

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ 
        AppComponent, 
        PostcodeDetailComponent 
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}