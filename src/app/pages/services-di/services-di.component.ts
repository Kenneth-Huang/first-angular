import { Component, OnInit } from '@angular/core';
import {MessagesService} from 'src/app/services/messages.service';
import { PostMessage } from 'src/app/interface/messages';
import { Router } from '@angular/router';
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
  constructor(private messageService: MessagesService, private router: Router) {
    this.messages = messageService.getMessages();
  }

  navigateToMessage(id: number){
    this.router.navigate(['/services', id]);
  };
  
  //Similar to componentDidMount in React, but need to be used after other member function
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
