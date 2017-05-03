import { Component, OnInit, Input } from '@angular/core';

import { KweetService } from "app/kweet.service";

@Component({
  selector: 'app-kweets',
  templateUrl: './kweets.component.html',
  styleUrls: ['./kweets.component.css']
})
export class KweetsComponent implements OnInit {
  @Input() username: string;
  @Input() timeline: boolean;
  private kweets: Object[];

  constructor(private kweetService: KweetService) {

  }

  ngOnInit() {
    this.kweetService.getKweets(this.username, this.timeline, 0, 10).subscribe(data =>
      this.kweets = data.json() as Object[]
    );
  }

}
