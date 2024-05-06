import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MySkillComponent } from './pages/my-skill/my-skill.component';
import { StructureDirectivesComponent } from './pages/structure-directives/structure-directives.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { AppendPipe } from './pipes/append.pipe';
import { ServicesDiComponent } from './pages/services-di/services-di.component';
import { MessagesService } from './services/messages.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './pages/forms/forms.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { BasicComponent } from './pages/basic/basic.component';
import { ComponentsCommunicationComponent } from './pages/components-communication/components-communication.component';
import { TasksComponent } from './pages/components-communication/tasks/tasks.component';
import { CrudComponent } from './pages/crud/crud.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteListComponent } from './components/note-list/note-list.component'
import { NoteService } from './services/note.service';
import { MessageComponent } from './pages/message/message.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/about/contact/contact.component';
import { InfoComponent } from './pages/about/info/info.component'

@NgModule({
  declarations: [
    AppComponent,
    MySkillComponent,
    StructureDirectivesComponent,
    PipesComponent,
    AppendPipe,
    ServicesDiComponent,
    FormsComponent,
    ReactiveFormsComponent,
    BasicComponent,
    ComponentsCommunicationComponent,
    TasksComponent,
    CrudComponent,
    NoteFormComponent,
    NoteListComponent,
    MessageComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //For forms
    ReactiveFormsModule, //For reactive forms
    HttpClientModule,
  ],
  providers: [MessagesService, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
