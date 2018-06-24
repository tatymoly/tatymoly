import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "projects",
        loadChildren: "./projects/projects.module#ProjectsModule"
      },
      {
        path: "",
        loadChildren: "./about/about.module#AboutModule"
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
