import { Component } from "@angular/core";
import {
  faLinkedin,
  faGithubSquare,
  faMedium,
  faTwitterSquare,
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-footer",
  templateUrl: "footer.component.html",
  styleUrls: ["footer.component.scss"]
})
export class FooterComponent {
  faLinkedin = faLinkedin;
  faGithubSquare = faGithubSquare;
  faMedium = faMedium;
  faTwitterSquare = faTwitterSquare;
  faFacebookSquare = faFacebookSquare;
  faInstagram = faInstagram;
  faMail = faEnvelopeSquare;
  constructor() {}
}
