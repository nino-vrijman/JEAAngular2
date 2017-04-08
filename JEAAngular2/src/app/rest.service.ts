import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class RestService {
  private API_URL: string = "http://localhost:8080/kwetter/API"

  private username: string = 'nino';
  private password: string = 'nino';

  constructor(private http: Http) {

  }

  get(url: string) {
    return this.http.get(`${this.API_URL}/${url}`, { headers: this.setHeaders() });
  }

  post(url: string, postdata: Object) {
    return this.http.post(`${this.API_URL}/${url}`, postdata);
  }

  getTimeTest() {
    return this.http.get('http://date.jsontest.com/');
  }

  setHeaders() {
    const headers: Headers = new Headers();
    headers.append('Authorization', `Basic ${btoa(`${this.username}:${this.password}`)}`);

    return headers;
  }

}
