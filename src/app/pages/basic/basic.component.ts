import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  title: string = 'Basic';
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
  // the ngClasses will get css from the scss file
  ngClasses: string = "danger text-size";
    // the value of danger or textSize is the css class name in the scss file
  isDangerClassActive: boolean = true;
  isTextSizeClassActive : boolean = true;

  //Two ways binding
  inputText: string = "input value"

  //ngStyle binding
  selectedColor: string = "aqua";
}
