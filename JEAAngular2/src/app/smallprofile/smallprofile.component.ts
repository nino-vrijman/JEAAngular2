import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { UserService } from "app/user.service";
import { KweetService } from "app/kweet.service";
import { User } from "app/user";

@Component({
  selector: 'app-smallprofile',
  templateUrl: './smallprofile.component.html',
  styleUrls: ['./smallprofile.component.css']
})
export class SmallprofileComponent implements OnInit {
  @Input() username: string;
  private user?: User;
  private following: User[];
  private followers: User[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUser(this.username).subscribe(data =>
      this.user = data.json() as User
    );
    this.userService.getFollowing(this.username).subscribe(data => 
      this.following = data.json() as User[]
    );
    this.userService.getFollowers(this.username).subscribe(data => 
      this.followers = data.json() as User[]
    );
  }
}
