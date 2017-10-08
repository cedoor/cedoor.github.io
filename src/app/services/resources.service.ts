import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

@Injectable()
export class ResourcesService {

    dataURL: string = "./assets/data.json";

    constructor(private http: Http) {
    }

    getData(): Promise<any> {
        return this.http.get(this.dataURL).map(data => data.json()).toPromise();
    }

}
