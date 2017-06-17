import {Component, Input} from "@angular/core";

@Component({
    selector: "pw-loading",
    templateUrl: "templates/loading.html",
    styleUrls: ["templates/loading.css"]
})
export class LoadingComponent {
    @Input("when")
    isVisible:boolean;
}