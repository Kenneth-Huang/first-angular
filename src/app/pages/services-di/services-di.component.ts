import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import { IPostMessage } from '../../interface/messages.interface'

@Component({
  selector: 'app-services-di',
  templateUrl: './services-di.component.html',
  styleUrls: ['./services-di.component.scss'],
  // providers: [MessagesService],
})

export class ServicesDiComponent implements OnInit {
  messages: string[] = [];
  postMessages: IPostMessage[] = [];
  
  // Dependency Injection
  constructor(private messageService: MessagesService) {
    this.messages = messageService.getMessages();
  }

  //Similar to componentDidMount in React?
  ngOnInit() {
    this.messageService.getPostMessages()
      .subscribe(
        {
          next: (res:IPostMessage[]) => { this.postMessages = res },
          error: err => {console.error(err)}
        }  
        // data => { this.postMessages = data }, err => console.log(err)
      );
  }
}
