import { Component } from "@angular/core";
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: "app-header",
  templateUrl: "header.component.html",
  styleUrls: ["header.component.scss"]
})
export class HeaderComponent {
  constructor() {}
  ngOnInit() {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
  }
}
