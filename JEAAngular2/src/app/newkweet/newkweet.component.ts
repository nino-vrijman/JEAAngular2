import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { KweetService } from "app/kweet.service";
import { IKweet } from "app/ikweet";

@Component({
  selector: 'app-newkweet',
  templateUrl: './newkweet.component.html',
  styleUrls: ['./newkweet.component.css'],
  providers: [KweetService]
})
export class NewkweetComponent implements OnInit {
  @Output() kweetReceivedEvent: EventEmitter<IKweet> = new EventEmitter();
  private websocket: WebSocket;

  constructor(private kweetService: KweetService) { 
    this.websocket = new WebSocket(`ws://localhost:8080/kwetter/kweetEndpoint?username=nino`);
    this.initializeWebSocket();
  }

  ngOnInit() {
  }

  initializeWebSocket() {
    this.websocket.onmessage = (event) => {
      this.kweetReceived(event);
    } 
  }

  createKweet(newKweetContent: string) {
    if (typeof this.websocket !== "undefined" && this.websocket.readyState === this.websocket.OPEN) {
      console.log("Kweet sent through websocket");
      this.websocket.send(newKweetContent);
    } else {
      console.log("Kweet sent through service");
      this.kweetService.create(newKweetContent, 'nino').subscribe(data => 
        location.reload()
      );
    }
  }

  kweetReceived(message: MessageEvent) {
    const response = JSON.parse(message.data);
    const receivedKweet: IKweet = {
      id: response.id,
      content: response.content,
      date: response.date,
      createdBy: response.createdBy
    }
    this.kweetReceivedEvent.emit(receivedKweet);
  }

}
