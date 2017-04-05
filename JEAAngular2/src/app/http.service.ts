import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import "rxjs/add/operator/map";

@Injectable()
export class HttpService {

  constructor(private http: Http) {

  }

  get(url: string) {
    return this.http.get(url);
  }

  post(url: string, postdata: Object) {
    return this.http.post(url, postdata);
  }

  getTimeTest() {
    return this.http.get('http://date.jsontest.com/');
  }
}
