import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

@Injectable()
export class ResourcesService {

    dataURL: string = "./data.json";
    postURL: string = "./posts";

    constructor(private http: HttpClient) {
    }

    getData(): Promise<any> {
        return this.http.get(this.dataURL).toPromise();
    }

    getPost(name: string): Promise<string> {
        return this.http.get(`${this.postURL}/${name}.md`, {
            responseType: "text"
        }).toPromise();
    }

}
