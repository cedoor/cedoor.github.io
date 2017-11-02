import {Component} from "@angular/core";
import {ResourcesService} from "../../services/resources.service";
import {Profile} from "../../models/profile";
import {Project} from "../../models/project";
import {Social} from "../../models/social";
import {Info} from "../../models/info";
import {Skill} from "../../models/skill";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent {

    delay: number = .5;

    loaded: boolean = false;

    profile: Profile;
    projects: Project[];
    socials: Social[];
    skills: Skill[];
    info: Info;

    constructor(public resources: ResourcesService) {
        resources.getData().then(data => {
            setTimeout(() => {
                this.loaded = true;

                this.profile = data.profile;
                this.projects = data.projects;
                this.socials = data.socials;
                this.info = data.info;
                this.skills = data.skills;
            }, this.delay * 1000);
        });
    }

}
