import {Component, Input} from "@angular/core";

@Component({
    selector: "app-projects",
    templateUrl: "./projects.component.html",
    styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent {

    @Input() data: any;

    constructor() {
    }

}
