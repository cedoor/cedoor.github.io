import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {HomeComponent} from "./pages/home/home.component";
import {InfoComponent} from "./components/info/info.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {SocialComponent} from "./components/social/social.component";
import {ResourcesService} from "./services/resources.service";
import {MarkdownModule} from "ngx-markdown";
import {PostsComponent} from "./components/posts/posts.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "blog", component: BlogComponent},
    {path: "blog/:post", component: BlogComponent},
    {
        path: "**",
        redirectTo: "/",
        pathMatch: "full"
    }
];

@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        HomeComponent,
        InfoComponent,
        ProfileComponent,
        ProjectsComponent,
        SkillsComponent,
        SocialComponent,
        PostsComponent
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MarkdownModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        MatCardModule
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
