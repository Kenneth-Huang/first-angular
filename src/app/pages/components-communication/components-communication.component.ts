import { Component } from '@angular/core';

@Component({
  selector: 'app-components-communication',
  templateUrl: './components-communication.component.html',
  styleUrls: ['./components-communication.component.scss']
})
export class ComponentsCommunicationComponent {
  tasks: string[] = ['task1', 'task2', 'task3'];

  deleteTask(index: number): void {
    this.tasks = this.tasks.filter((_, i)=> i !== index);
  }
}
