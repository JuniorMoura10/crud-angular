import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/04cf7e94-ccdc-44bd-9dbc-c83f002fdc04'
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })}

  constructor(private httpClient: HttpClient) { }

  //C.R.U.D -> CREATE, READ, UPDATE, DELETE

  //Retorna lista de usuários - READ
  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // salva usuário no banco - CREATE
  postUser(user: User): Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user);
  }

  // Exclui o usuário do banco - DELETE
  deleteUser(id: number):Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }
}
