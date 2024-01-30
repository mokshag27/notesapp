import { Component } from '@angular/core';
import { Users } from 'src/app/shared/Interface/user.interface';
import { NotesListService } from '../notes-list.service';
import { Notes } from 'src/app/shared/Interface/notes.interface';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
})
export class NotesListComponent {
  notesData!: Notes[];
  user_id!: any;
  constructor(
    private notesListService: NotesListService,
    private cookieService: CookieService,
    private route: ActivatedRoute
  ) {
    this.user_id = +this.cookieService.get('user_id');
  }

  fetchNotes(user_id: number): void {
    this.notesListService.getNotesData(user_id).subscribe((value: any) => {
      this.notesData = value;
    });
  }
}
