import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./components/dashboard.component";
import { PostcodesComponent } from "./components/postcode list.component";
import { PostcodeSearchComponent } from "./components/postcode search.component";
import { PostcodeDetailComponent } from "./components/postcode detail.component";
import { ListingListComponent } from "./components/listing list.component";
import { AgencyListComponent } from "./components/agency list.component";
import { AgencyStatsComponent } from "./components/agency stats.component";

const routes: Routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "dashboard", component: DashboardComponent },    
    { path: "postcodes", component: PostcodesComponent },
    { path: "search", component: PostcodeSearchComponent },
    { path: "detail/:code", component: PostcodeDetailComponent }, // todo: change in postcodes/:code
    { path: "listing", component: ListingListComponent },
    //{ path: "listing/:listingId", component: ListingSingleComponent }
    { path: "agencies", component: AgencyListComponent },
    { path: "agencies-stats", component: AgencyStatsComponent }
] 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}