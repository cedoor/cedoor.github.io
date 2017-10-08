import {Component, Input} from "@angular/core";

@Component({
    selector: "app-social",
    templateUrl: "./social.component.html",
    styleUrls: ["./social.component.css"]
})
export class SocialComponent {

    @Input() data: any;

    constructor() {
    }

}
