import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Note ,ID} from 'src/app/interface/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  @Output() editNoteEmitter = new EventEmitter<Note>();
  constructor(private noteService: NoteService) { }
  
  ngOnInit() {
    this.noteService.getNotesObservable().subscribe((notes: Note[]) => {
      // console.log('notes:', notes);
      // this subscribe should act as a listener, which will be trigger when ever
      // the observable variable from getNotesObservable() is updated.

      // update this.notes => html re-render
      this.notes = notes;
    })
  }

  editNote(note: Note): void {
    this.editNoteEmitter.emit(note)
    this.noteService.setEditable(true);
  }

  deleteNote(id: ID): void{
    this.noteService.deleteNote(id);
  }

}
