import { Component } from '@angular/core';

@Component({
  selector: 'app-structure-directives',
  templateUrl: './structure-directives.component.html',
  styleUrls: ['./structure-directives.component.scss'],
})
export class StructureDirectivesComponent {
  title: string = 'Structure Directives';
  isLoggedIn: boolean = true;
  username: string = 'Kenneth';

  names: string[] = ['Ken', 'John', 'Dorothy'];
  grade: string = 'B';

}
