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
  buttonLabel: string = 'My Button';
  buttonAttr = {
    label: 'My Button',
    isDisabled : true,
  }
  //Attr binding
  isDisabled: boolean = true;
  imageURL: string = '../../assets/angular.jpg';

  //Style binding
  container = {
    bgColor: 'lightblue'
  };
  titleColor = 'white';
  description = 'font-size: 23px; color: grey';

  //State and events
  counter: number = 0;
  changeCounter: (isIncrease: boolean) => void = (isIncrease) => {
    if (isIncrease) {
      this.counter++
      return
    }
    this.counter --
  }
  increaseCounter: () => void = () => {
    this.counter++;
  }

  //Class binding
  applyRedText = "yes";
  isRedText = true;

  //ngClass binding
  messages: string = "This is a dangerous message from ngClass";
  ngClasses: string = "danger text-size";

  //Two ways binding
  inputText: string = "input value"

  //ngStyle binding
  selectedColor: string = "aqua";

}
