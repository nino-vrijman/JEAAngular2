import { Injectable } from '@angular/core';
import { HttpService } from "app/http.service";

@Injectable()
export class UserService {

  constructor(private httpService: HttpService) { 

  }

  getLoggedInUser() {
    return this.httpService.get("users/loggedInUser");
  }

}
