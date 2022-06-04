import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/04cf7e94-ccdc-44bd-9dbc-c83f002fdc04'

  constructor(private httpClient: HttpClient) { }

  //C.R.U.D -> CREATE, READ, UPDATE, DELETE

  //Retorna lista de usuários - READ
  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }
}
