import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { KweetService } from "app/kweet.service";
import { UserService } from "app/user.service";
import { User } from "app/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private username: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(parameters =>
      this.username = parameters['username']
    );
  }

}
