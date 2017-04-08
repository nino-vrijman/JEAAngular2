import { Component, OnInit, Input } from '@angular/core';

import { UserService } from "app/user.service";
import { User } from "app/user";

@Component({
  selector: 'app-smallprofile',
  templateUrl: './smallprofile.component.html',
  styleUrls: ['./smallprofile.component.css']
})
export class SmallprofileComponent implements OnInit {
  @Input() username: string;
  private user: User;

  constructor(private userService: UserService) {
    
  }

  ngOnInit() {
    this.userService.getUser(this.username).subscribe(data => console.log(data));
  }

}
