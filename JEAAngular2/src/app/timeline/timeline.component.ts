import { Component, OnInit } from '@angular/core';

import { UserService } from "app/user.service";
import { KweetService } from "app/kweet.service";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  providers: [KweetService, UserService]
})
export class TimelineComponent implements OnInit {
  private loggedInUser: string;

  constructor(
    private kweetService: KweetService,
    private UserService: UserService) {
    this.loggedInUser = "nino";
  }

  ngOnInit() {
    
  }

}
