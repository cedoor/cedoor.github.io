import {Component} from "@angular/core";
import {ResourcesService} from "../../services/resources.service";
import {Post} from "../../models/post";
import {Profile} from "../../models/profile";
import {Project} from "../../models/project";
import {Social} from "../../models/social";
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/switchMap";

@Component({
    selector: "app-blog",
    templateUrl: "./blog.component.html",
    styleUrls: ["./blog.component.scss"]
})
export class BlogComponent {

    delay: number = .5;

    loaded: boolean = false;

    posts: Post[];

    profile: Profile;
    projects: Project[];
    socials: Social[];

    constructor(public resources: ResourcesService,
                public route: ActivatedRoute) {
        resources.getData().then(data => {
            setTimeout(() => {
                this.profile = data.profile;
                this.projects = data.projects;
                this.socials = data.socials;

                let postName = this.route.snapshot.paramMap.get("post");
                if (postName) {
                    for (let post of data.posts) {
                        if (post.name === postName) {
                            this.setPosts([post]);
                            return;
                        }
                    }
                }

                this.setPosts(data.posts);
            }, this.delay * 1000);
        });


        console.log();
    }

    setPosts(posts: Post[]) {
        this.posts = [];
        posts.forEach((post, i) => {
            this.resources.getPost(post.name).then(resource => {
                this.posts.push(new Post({
                    name: post.name,
                    date: post.date,
                    content: resource
                }));
                if (i === posts.length - 1) this.loaded = true;
            });
        });
    }

}
