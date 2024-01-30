import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotesListService } from '../notes-list.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent {
  
  constructor(private notesListService:NotesListService,private cookieService: CookieService,private router:Router) {}
  loginForm = new FormGroup({
    user_name: new FormControl(),
    password: new FormControl()
  });
  login(): void {
    console.log(this.loginForm.value + ' from submit func');
    this.notesListService
      .loginUser(this.loginForm.value)
      .subscribe((data: any) => {
        this.cookieService.set("user_id",data.user_id);
        this.cookieService.set("user_name",data.user_name);
        this.cookieService.set('password', data.password);
        this.router.navigate(['/notes', data.user_id]);
        console.log(data);
        console.log('Done');
      });
  }
}
