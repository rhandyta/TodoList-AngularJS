import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
const url = 'http://api-angular1.test:8080/api/';
@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(url + `people`);
  }

  create(data: any): Observable<any> {
    return this.http.post(url + `people`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${url}people/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${url}people/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${url}people-delete`);
  }

  findByName(name: any): Observable<any> {
    return this.http.get<Tutorial[]>(`${url}search/${name}`);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get(`${url}people/${id}`);
  }
}
