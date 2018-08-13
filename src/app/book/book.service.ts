import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
    private _url = "http://tr-dev.us-west-2.elasticbeanstalk.com/api/values";
    constructor(
        private http:HttpClient
    ){}

    getDataFromService():Observable<any> {
        return this.http.get(this._url).map(data => <any>data);
    }
}