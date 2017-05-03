import { Component, OnInit } from '@angular/core';
import { KweetService } from "app/kweet.service";
import { EventEmitter } from "events";

@Component({
  selector: 'app-newkweet',
  templateUrl: './newkweet.component.html',
  styleUrls: ['./newkweet.component.css']
})
export class NewkweetComponent implements OnInit {
  private websocket: WebSocket;

  constructor(private kweetService: KweetService) { 
    this.websocket = new WebSocket(`ws://localhost:8080/kwetter/kweetEndpoint?username=nino`);
    this.initializeWebSocket();
  }

  ngOnInit() {
  }

  initializeWebSocket() {
    this.websocket.onopen = (event) => {
      console.log("Websocket opened in New Kweet");
    }
    this.websocket.onmessage = (event) => this.kweetReceived(event);
  }

  createKweet(newKweetContent: string) {
    if (this.websocket.readyState === this.websocket.OPEN) {
      console.log("Kweet sent through websocket");
      this.websocket.send(newKweetContent);
    } else {
      console.log("Kweet sent through service");
      this.kweetService.create(newKweetContent, 'nino').subscribe(data => 
        location.reload()
      );
    }
  }

  kweetReceived(event) {
    console.log(event.data);
  }

}
