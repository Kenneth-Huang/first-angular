import { Component } from '@angular/core';
import {MessagesService} from './services/messages.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessagesService],
})
export class AppComponent {
  title = 'my-angular-app';
  newValue = 'newValue';
 

}
