import { Injectable } from '@angular/core';
import { RestService } from "app/rest.service";

@Injectable()
export class KweetService {

  constructor(private restService: RestService) { 
    
  }

  getKweets(username: string, forTimeline: boolean, offset: number, limit: number) {
    let url: string;
    if (forTimeline) {
      url = `users/${username}/timeline/${offset}/${limit}`;
    } else {
      url = `users/${username}/tweets/${offset}/${limit}`;
    }
    return this.restService.get(url);
  }

  create(newKweetContent: string, username: string) {
    return this.restService.post(`tweets/${newKweetContent}/${username}`, { });
  }

}
