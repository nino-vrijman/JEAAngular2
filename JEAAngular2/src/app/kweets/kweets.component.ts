import { Component, OnInit, Input } from '@angular/core';

import { KweetService } from "app/kweet.service";
import { EventEmitter } from "events";
import { IKweet } from "app/ikweet";

@Component({
  selector: 'app-kweets',
  templateUrl: './kweets.component.html',
  styleUrls: ['./kweets.component.css']
})
export class KweetsComponent implements OnInit {
  @Input() username: string;
  @Input() timeline: boolean;
  private kweets: object[];

  constructor(private kweetService: KweetService) {

  }

  ngOnInit() {
    if (this.timeline) {
      this.kweetService.getTimelineKweets(this.username, 0, 10).subscribe(data => this.setKweets(data));
    } else {
      this.kweetService.getProfileKweets(this.username, 0, 10).subscribe(data => this.setKweets(data));
    }
  }

  /**
   * Sets the kweets which should be displayed.
   * 
   * @param {Response} data A response containing the kweets that should be displayed.
   * 
   * @memberOf KweetsComponent
   */
  setKweets(data) {
    this.kweets = data.json() as object[]
  }

  /**
   * Invoked when a new kweet which should be displayed on the users timeline has been posted.
   * Adds the new kweet as the first element of the array.
   * 
   * @param {IKweet} kweet The new kweet which has been posted.
   * 
   * @memberOf KweetsComponent
   */
  newKweetAdded(kweet: IKweet) {
    let newKweet: object = kweet;
    newKweet["date"] = new Date(newKweet["date"]);
    this.kweets.unshift(newKweet);
  }

}
