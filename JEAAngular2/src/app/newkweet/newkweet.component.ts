import { Component, OnInit } from '@angular/core';
import { KweetService } from "app/kweet.service";

@Component({
  selector: 'app-newkweet',
  templateUrl: './newkweet.component.html',
  styleUrls: ['./newkweet.component.css']
})
export class NewkweetComponent implements OnInit {

  constructor(private kweetService: KweetService) { 

  }

  ngOnInit() {
  }

  createKweet(newKweetContent: string) {
    this.kweetService.create(newKweetContent, 'nino').subscribe(data => 
      location.reload()
    );
  }

}
