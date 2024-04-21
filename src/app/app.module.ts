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
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component'

@NgModule({
  declarations: [
    AppComponent,
    MySkillComponent,
    StructureDirectivesComponent,
    PipesComponent,
    AppendPipe,
    ServicesDiComponent,
    FormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //For forms
    ReactiveFormsModule, //For reactive forms
    HttpClientModule,
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
