import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import {Post} from "../models/post";

@Injectable()
export class ResourcesService {

    dataURL: string = "./data.json";
    postURL: string = "./posts";

    constructor(private http: Http) {
    }

    getData(): Promise<any> {
        return this.http.get(this.dataURL).map(data => data.json()).toPromise();
    }

    getPost(name: string): Promise<string> {
        return this.http.get(`${this.postURL}/${name}.md`).map(data => data.text()).toPromise();
    }

}
