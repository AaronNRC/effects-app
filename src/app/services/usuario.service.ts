import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.url}/users?per_page=6&delay=3`).pipe(
      map((response: any) => {
        return response.data
      })
    )
  }

  getUserByid(id: string) {
    return this.http.get(`${this.url}/users/${id}`).pipe(
      map((response: any) => {
        return response.data
      })
    )
  }
}
