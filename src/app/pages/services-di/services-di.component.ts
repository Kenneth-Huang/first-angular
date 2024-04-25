import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import { PostMessage } from '../../interface/messages'

@Component({
  selector: 'app-services-di',
  templateUrl: './services-di.component.html',
  styleUrls: ['./services-di.component.scss'],
  // providers: [MessagesService],
})

export class ServicesDiComponent implements OnInit {
  messages: string[] = [];
  postMessages: PostMessage[] = [];
  
  // Dependency Injection
  constructor(private messageService: MessagesService) {
    this.messages = messageService.getMessages();
  }

  //Similar to componentDidMount in React?
  ngOnInit() {
    this.messageService.getPostMessages()
      .subscribe(
        {
          next: (res:PostMessage[]) => { this.postMessages = res },
          error: err => {console.error(err)}
        }  
    );
    // similar to Promise in JS, next is equal to resolve and error is equals to reject
    // new Promise((resolve, reject) => {
    //    if(successed){
    //      resolve('do sth')
    //    }
    //    else 
    //    { reject('do sth else') }
    // })
    // or next is equals to Promise.then(); and error is Promise.catch()
  }
}
