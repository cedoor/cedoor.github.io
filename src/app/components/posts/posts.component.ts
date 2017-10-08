import {Component, Input} from "@angular/core";
import {Post} from "../../models/post";

@Component({
    selector: "app-posts",
    templateUrl: "./posts.component.html",
    styleUrls: ["./posts.component.css"]
})
export class PostsComponent {

    @Input() posts: Post[];

    constructor() {
    }

}
