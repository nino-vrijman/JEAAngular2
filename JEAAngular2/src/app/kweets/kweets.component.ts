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
    this.kweetService.getKweets(this.username, this.timeline, 0, 10).subscribe(data =>
        this.kweets = data.json() as object[]
    );
  }

  /**
   * Invoked when a new kweet which should be displayed on the users timeline has been posted.
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
