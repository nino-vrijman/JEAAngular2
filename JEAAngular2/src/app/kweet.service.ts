import { Injectable } from '@angular/core';
import { RestService } from "app/rest.service";

@Injectable()
export class KweetService {

  constructor(private restService: RestService) { 
    
  }
  
  /**
   * Gets the timelinekweets of a certain user.
   * 
   * @param {string} username The username of the user for which the timeline kweets should be gotten.
   * @param {number} offset The start of the range of how many kweets should be retrieved.
   * @param {number} limit The amount of kweets that should be received.
   * @returns {Observable} An observable to which the callee can subscribe to handle the result of the operation.
   * 
   * @memberOf KweetService
   */
  getTimelineKweets(username: string, offset: number, limit: number) {
    return this.restService.get(`users/${username}/timeline/${offset}/${limit}`);
  }

  /**
   * Gets the kweets of only a certain user.
   * 
   * @param {string} username The username of the user whose profile kweets should be gotten.
   * @param {number} offset The start of the range of how many kweets should be retrieved.
   * @param {number} limit The amount of kweets that should be received.
   * @returns {Observable} An observable to which the callee can subscribe to handle the result of the operation.
   * 
   * @memberOf KweetService
   */
  getProfileKweets(username: string, offset: number, limit: number) {
    return this.restService.get(`users/${username}/tweets/${offset}/${limit}`);
  }

  /**
   * Creates a new kweet.
   * 
   * @param {string} newKweetContent The content of the new kweet.
   * @param {string} username The username of the user that posted the kweet.
   * @returns {Observable} An observable to which the callee can subscribe to handle the result of the operation.
   * 
   * @memberOf KweetService
   */
  create(newKweetContent: string, username: string) {
    // return this.restService.post(`tweets/jms/${newKweetContent}/${username}`, { });
    return this.restService.post(`tweets/${newKweetContent}/${username}`, { });
  }

}
