import { Component } from '@angular/core';
import { Note } from 'src/app/interface/note';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
  editingNote!: Note;
  
  editNote(note: Note) {
    this.editingNote = note;
  }
}
