import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { AboutRoutingModule } from "./about-routing.module";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";

@NgModule({
  imports: [AboutRoutingModule, CommonModule],
  declarations: [AboutComponent],
  exports: [AboutComponent],
  providers: [HttpClient]
})
export class AboutModule {}
