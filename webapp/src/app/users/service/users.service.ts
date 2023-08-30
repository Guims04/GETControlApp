import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from 'src/app/app.constants';
import { IUsers } from '../users.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${ApiUrl}/users`);
  }
  create(data:IUsers): Observable<any> {
    return this.http.post(`${ApiUrl}/users`,data)
  }
}
