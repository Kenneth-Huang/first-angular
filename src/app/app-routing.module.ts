import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySkillComponent } from './pages/my-skill/my-skill.component';
import {StructureDirectivesComponent} from './pages/structure-directives/structure-directives.component'
import { PipesComponent } from './pages/pipes/pipes.component';
import { ServicesDiComponent } from './pages/services-di/services-di.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { BasicComponent } from './pages/basic/basic.component';
import { ComponentsCommunicationComponent } from './pages/components-communication/components-communication.component'
import { CrudComponent } from './pages/crud/crud.component';
import { MessageComponent } from './pages/message/message.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { InfoComponent } from './pages/about/info/info.component';
import { ContactComponent } from './pages/about/contact/contact.component';
import { authGuard } from './guards/auth.guard';
const routes: Routes = [
  {  path: '', redirectTo: '/basic', pathMatch: 'full'},  
  { path: 'basic', component: BasicComponent },
  { path: 'my-skill', component: MySkillComponent },
  { path: 'structure-directives', component: StructureDirectivesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'services', title: "services", component: ServicesDiComponent , canActivate: [authGuard]},
  { path: 'services/:id', title: "message", component: MessageComponent, canActivate: [authGuard]},
  { path: 'forms', component: FormsComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'components-communication', component: ComponentsCommunicationComponent },
  { path: 'crud', component: CrudComponent },
  {
    path: 'about', title: 'About', component: AboutComponent, children: [
      { path: 'contact', title: 'Contact',component: ContactComponent },
      { path: 'info', title: 'Info', component: InfoComponent },]
  },
  { path: "**", title: "Not Found", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
