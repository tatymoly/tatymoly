import { Component, Inject } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
/* import * as M from "materialize-css/dist/js/materialize"; */

@Component({
  selector: "about",
  templateUrl: "about.component.html",
  styleUrls: ["about.component.scss"]
})
export class AboutComponent {

  constructor() {}

  testing(){
    let test = 'Hola mundo';
  }
}
