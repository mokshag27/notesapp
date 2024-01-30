import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateNoteComponent } from './create-note/create-note.component';
import { LoginUserComponent } from './login-user/login-user.component';



@NgModule({
  declarations: [
    NotesListComponent,
    CreateUserComponent,
    CreateNoteComponent,
    LoginUserComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NotesModule { }
