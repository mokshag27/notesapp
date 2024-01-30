import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class NotesListService {
  constructor(private http: HttpClient) {
  }
  getNotesData(user_id: number): Observable<any> {
    return this.http.get(`http://localhost:8082/api/notes/${user_id}`);
  }
  addUser(data: any): Observable<any> {
    console.log(data + ' from user');
    return this.http.post('http://localhost:8082/api/user', data);
  }
  addNote(data: any): Observable<any> {
    console.log(data + 'note added');
    return this.http.post('http://localhost:8082/api/create', data);
  }
  loginUser(data: any): Observable<any>{
    console.log(data + 'user logged in');
    return this.http.post('http://localhost:8082/api/login',data);
  }
}
