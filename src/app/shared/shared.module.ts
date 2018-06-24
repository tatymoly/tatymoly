import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent, HeaderComponent],
  exports: [FooterComponent, HeaderComponent]
})
export class SharedModule {}
