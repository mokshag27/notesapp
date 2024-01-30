import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { CreateUserComponent } from './notes/create-user/create-user.component';
import { CreateNoteComponent } from './notes/create-note/create-note.component';
import { LoginUserComponent } from './notes/login-user/login-user.component';

const routes: Routes = [
  {
    path: 'notes/:user_id',
    component: NotesListComponent,
  },
  {
    path: 'createuser',
    component: CreateUserComponent,
  },
  {
    path:'createnote',
    component:CreateNoteComponent
  },
  {
    path:'login',
    component:LoginUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
