import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { PostcodesComponent } from "./postcode list.component";
import { PostcodeSearchComponent } from "./postcode search.component";
import { PostcodeDetailComponent } from "./postcode detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "dashboard", component: DashboardComponent },    
    { path: "postcodes", component: PostcodesComponent },
    { path: "search", component: PostcodeSearchComponent },
    { path: "detail/:id", component: PostcodeDetailComponent }
] 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}