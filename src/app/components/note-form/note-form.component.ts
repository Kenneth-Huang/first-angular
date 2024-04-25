import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/interface/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  noteForm!: FormGroup;
  isEditable!: boolean;
  @Input() editingNote!: Note;

  constructor(private noteService: NoteService, private formBuilder: FormBuilder) { 
    this.noteService.getEditable().subscribe({
      next: (res) => (this.isEditable = res),
    });

  }
  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      id: 1,
      title: ['', Validators.required],
      content: ['']
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editingNote']?.currentValue) {
      const value: Note = changes['editingNote']?.currentValue;
      this.noteForm.patchValue({
        id: value?.id,
        title: value?.title,
        content: value?.content,
      })
    }
  }
  onSubmit(): void {
    if (this.noteForm.invalid) {
      return
    }
    const note: Note = this.noteForm.value;
    if (this.isEditable) {
      this.noteService.updateNote(note);
      this.noteService.setEditable(false);
    } else {
      this.noteService.createNote(note);
    }
 
    this.noteForm.reset();

  }

}
