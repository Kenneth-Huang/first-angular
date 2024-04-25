import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  // the @Input() means the task's value comes from the parent component
  @Input() task!: string;
  // The "!" in above means no need initialize the variable task in the current component(in the constructor function).

  // There is another method to avoid initialization in the current component,
  // which is adding undefined type to the variable 'task':
  // @Input() task: string | undefined;
  // But this method is not the same as the ! expression.
  //In fact, this method means the task might not be provided by the parent component.
  
  //And it is similar to the optional prop in React.js:
  //function TaskComponent({ task?: string }) {
  //   return <div>{task ? task : "No task provided"}</div>;
  // }

  //It seems like the @Output() make the function referenced by the html element(selector) in parent component
  //For this function deleteTaskRecord referenced by <app-task/>
  @Output() deleteTaskRecord = new EventEmitter<void>();

  onDeleteButtonClick = () => {
    this.deleteTaskRecord.emit();
  }
}
