import { NgModule } from "@angular/core";
import { ProjectsComponent } from "./projects.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "", component: ProjectsComponent, pathMatch: "full" }
    ])
  ],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
