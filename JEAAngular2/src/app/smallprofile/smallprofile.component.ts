import { Component, OnInit } from '@angular/core';

import { UserService } from "app/user.service";

@Component({
  selector: 'app-smallprofile',
  templateUrl: './smallprofile.component.html',
  styleUrls: ['./smallprofile.component.css']
})
export class SmallprofileComponent implements OnInit {
  private username: string;

  constructor(private UserService: UserService) {
    this.username = "nino";
  }

  ngOnInit() {
  }

}
