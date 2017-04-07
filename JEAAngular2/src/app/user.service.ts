import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RestService } from "app/rest.service";

@Injectable()
export class UserService {

  constructor(private restService: RestService) { 

  }

  getLoggedInUser() {
    return this.restService.get("users/loggedInUser");
  }

}
