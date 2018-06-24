import { NgModule } from "@angular/core";
import { ProjectsComponent } from "./projects.component";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";

@NgModule({
  imports: [ProjectsRoutingModule, CommonModule],
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
  providers: [HttpClient]
})
export class ProjectsModule {}
