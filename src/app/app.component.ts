import { Component } from "@angular/core";
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "tatymoly";
  ngOnInit() {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
  }
}
