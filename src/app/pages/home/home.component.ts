import {Component} from "@angular/core";
import {ResourcesService} from "../../services/resources.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent {

    delay: number = .5;

    loaded: boolean = false;

    data: any;

    constructor(public resources: ResourcesService) {
        resources.getData().then(data => {
            setTimeout(() => {
                this.loaded = true;
                this.data = data;
            }, this.delay * 1000);
        });
    }

}
