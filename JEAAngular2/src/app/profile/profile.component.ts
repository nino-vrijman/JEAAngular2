import { Component, OnInit } from '@angular/core';

import { KweetService } from "app/kweet.service";
import { UserService } from "app/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private kweetService: KweetService,
              private UserService: UserService) {

  }

  ngOnInit() {
  }

}
