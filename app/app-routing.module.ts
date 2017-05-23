import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { PostcodesComponent } from "./postcode list.component";
import { PostcodeSearchComponent } from "./postcode search.component";
import { PostcodeDetailComponent } from "./postcode detail.component";
import { ListingListComponent } from "./listing list.component";

const routes: Routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "dashboard", component: DashboardComponent },    
    { path: "postcodes", component: PostcodesComponent },
    { path: "search", component: PostcodeSearchComponent },
    { path: "detail/:code", component: PostcodeDetailComponent }, // todo: change in postcodes/:code
    { path: "listing", component: ListingListComponent }
    //{ path: "listing/:listingId", component: ListingSingleComponent }
] 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}