import {Component, Input} from "@angular/core";
import {Info} from "../../models/info";

@Component({
    selector: "app-info",
    templateUrl: "./info.component.html",
    styleUrls: ["./info.component.scss"]
})
export class InfoComponent {

    @Input() info: Info;

    constructor() {
    }
}
