import {Component, Input} from "@angular/core";
import {Profile} from "../../models/profile";

@Component({
    selector: "app-photo",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"]
})
export class ProfileComponent {

    @Input() profile: Profile;
    @Input() link: string;

    constructor() {
    }

}
