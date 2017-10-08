import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

@Injectable()
export class ResourcesService {

    dataURL: string = "./assets/data.json";
    postsURL: string = "./assets/blog";

    constructor(private http: Http) {
    }

    getData(): Promise<any> {
        return this.http.get(this.dataURL).map(data => data.json()).toPromise();
    }

    getPost(name: string): Promise<any> {
        return this.http.get(`${this.postsURL}/${name}`).toPromise();
    }

}
