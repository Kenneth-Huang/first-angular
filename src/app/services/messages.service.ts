import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IPostMessage} from '../interface/messages.interface'
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'
  
  constructor(private http: HttpClient) { }

  getPostMessages(): Observable<IPostMessage[]>{
    return this.http.get<IPostMessage[]>(this.apiUrl);
  }

  getMessages() {
    return ['message 1', 'message 2', 'message 3'];
  }
}


