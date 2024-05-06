import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PostMessage} from '../interface/messages'
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'
  
  constructor(private http: HttpClient) { }

  getPostMessages(): Observable<PostMessage[]>{
    return this.http.get<PostMessage[]>(this.apiUrl);
  }

  getPostMessage(id: number): Observable<PostMessage>{
    return this.http.get<PostMessage>(`${this.apiUrl}/${id}`);
  }

  getMessages() {
    return ['message 1', 'message 2', 'message 3'];
  }
}


