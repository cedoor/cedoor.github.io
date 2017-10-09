import {Component} from "@angular/core";
import {ResourcesService} from "../../services/resources.service";
import {Post} from "../../models/post";

@Component({
    selector: "app-blog",
    templateUrl: "./blog.component.html",
    styleUrls: ["./blog.component.css"]
})
export class BlogComponent {

    delay: number = .5;

    loaded: boolean = false;

    data: any;
    posts: Post[] = [
        new Post({
            name: "Hello",
            date: "08/10/2017"
        })
    ];

    constructor(public resources: ResourcesService) {
        resources.getData().then(data => {
            setTimeout(() => {
                this.loaded = true;
                this.data = data;
            }, this.delay * 1000);
        });
    }

}
