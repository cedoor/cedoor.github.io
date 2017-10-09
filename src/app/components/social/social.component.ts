import {Component, Input} from "@angular/core";
import {Social} from "../../models/social";

@Component({
    selector: "app-social",
    templateUrl: "./social.component.html",
    styleUrls: ["./social.component.css"]
})
export class SocialComponent {

    @Input() socials: Social[];

    constructor() {
    }

}
