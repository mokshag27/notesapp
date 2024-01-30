import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotesListService } from '../notes-list.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  constructor(private notesListService: NotesListService){}
  createForm = new FormGroup({
    user_name: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
  });
  submit(): void {
    console.log(this.createForm.value + ' from submit func');
    this.notesListService
      .addUser(this.createForm.value)
      .subscribe((data: any) => {
        console.log(data);
        console.log('Done');
      });
  }
}
