import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Note , ID} from 'src/app/interface/note';
import { generateRandomId } from 'src/app/util/util'

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [];
  private notesSubject: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([]);
  private isEnabled = new BehaviorSubject<boolean>(false);

  constructor() { }

  getEditable(): Observable<boolean> {
    return this.isEnabled.asObservable();
  }

  setEditable(value: boolean) {
    this.isEnabled.next(value);
  }

  getNotesObservable(): Observable<Note[]>{
    return this.notesSubject.asObservable();
  }
  
  createNote(note: Note): void {
    note.id = generateRandomId();
    this.notes.push(note);
    // next(): update observable and trigger the re-render, similar the setState in the React
    this.notesSubject.next(this.notes);
  }

  updateNote(note: Note): void {
    const index = this.notes.findIndex(n => n.id === note.id);
    if (index !== -1) {
      this.notes[index] = note;
      this.notesSubject.next(this.notes);
    }
  }

  deleteNote(id: ID): void{
    this.notes = this.notes.filter(note => note.id !== id);
    this.notesSubject.next(this.notes)
  }
}
