import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySkillComponent } from './pages/my-skill/my-skill.component';
import {StructureDirectivesComponent} from './pages/structure-directives/structure-directives.component'
import { PipesComponent } from './pages/pipes/pipes.component';
import { ServicesDiComponent } from './pages/services-di/services-di.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { BasicComponent } from './pages/basic/basic.component';
const routes: Routes = [
//   {
//   path: '', redirectTo: '/home', pathMatch: 'full',
// }, {
//   path: 'home', HomeComponent,
  //   },
  { path: 'basic', component: BasicComponent },
  { path: 'my-skill', component: MySkillComponent },
  { path: 'structure-directives', component: StructureDirectivesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'services', component: ServicesDiComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
