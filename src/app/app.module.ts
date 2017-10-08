import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {BlogComponent} from "./blog/blog.component";
import {HomeComponent} from "./home/home.component";
import {InfoComponent} from "./home/info/info.component";
import {PhotoComponent} from "./home/photo/photo.component";
import {ProjectsComponent} from "./home/projects/projects.component";
import {SkillsComponent} from "./home/skills/skills.component";
import {SocialComponent} from "./home/social/social.component";
import {ResourcesService} from "./services/resources.service";
import {HttpModule} from "@angular/http";

const appRoutes: Routes = [
    {path: "home", component: HomeComponent},
    // {path: "blog", component: BlogComponent},
    {
        path: "**",
        redirectTo: "/home",
        pathMatch: "full"
    }
];

@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        HomeComponent,
        InfoComponent,
        PhotoComponent,
        ProjectsComponent,
        SkillsComponent,
        SocialComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(
            appRoutes, //{enableTracing: true} // <-- debugging purposes only
        )
    ],
    providers: [
        ResourcesService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
