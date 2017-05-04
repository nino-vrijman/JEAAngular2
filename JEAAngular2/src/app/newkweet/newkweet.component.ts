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
    this.initializeWebSocket();
  }

  ngOnInit() {
  }

  /**
   * Initializes the newly created websocket which includes specifying event handlers.
   * 
   * @memberOf NewkweetComponent
   */
  initializeWebSocket() {
    this.websocket = new WebSocket(`ws://localhost:8080/kwetter/kweetEndpoint?username=nino`);
    this.websocket.onmessage = (event) => {
      this.kweetReceived(event);
    } 
  }

  /**
   * Creates a new kweet.
   * 
   * @param {string} newKweetContent The content of the new kweet.
   * 
   * @memberOf NewkweetComponent
   */
  createKweet(newKweetContent: string) {
    if (typeof this.websocket !== "undefined" && this.websocket.readyState === this.websocket.OPEN) {
      this.websocket.send(newKweetContent);
    } else {
      this.kweetService.create(newKweetContent, 'nino').subscribe(data => {
        location.reload();
      });
    }
  }

  /**
   * Event handler for when a new kweet has been received.
   * 
   * @param {MessageEvent} message The event containing the new kweet data.
   * 
   * @memberOf NewkweetComponent
   */
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
