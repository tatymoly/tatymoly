import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "", component: AboutComponent, pathMatch: "full" }
    ])
  ],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
