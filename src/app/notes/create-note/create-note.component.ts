import { Component } from '@angular/core';
import { NotesListService } from '../notes-list.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})
export class CreateNoteComponent {
  constructor(private notesListService: NotesListService) {}
  createForm = new FormGroup({
    user_name: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
  });
  create(): void {
    console.log(this.createForm.value + ' from submit func');
    this.notesListService
      .addNote(this.createForm.value)
      .subscribe((data: any) => {
        console.log(data);
        console.log('Done');
      });
  }
}
