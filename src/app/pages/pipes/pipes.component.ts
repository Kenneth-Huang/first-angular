import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  title: string = 'Pipes';
  today: number = Date.now();
  fee: number = 1.2345;
}
