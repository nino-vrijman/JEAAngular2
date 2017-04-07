import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class RestService {
  private API_URL: string = "http://localhost:8080/kwetter/API"

  constructor(private http: Http) {

  }

  get(url: string) {
    return this.http.get(`${this.API_URL}/${url}`);
  }

  post(url: string, postdata: Object) {
    return this.http.post(`${this.API_URL}/${url}`, postdata);
  }

  getTimeTest() {
    return this.http.get('http://date.jsontest.com/');
  }

}
