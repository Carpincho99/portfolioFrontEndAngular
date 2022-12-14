import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educ } from '../models/educ';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducService {

  constructor(private http: HttpClient) { }

  public list(): Observable<Educ[]>{
   return this.http.get<Educ[]>(environment.apiUrl + "educ/list");
  }

  public save(educ: Educ): Observable<any>{
    return this.http.post<any>(environment.apiUrl + "educ/create", educ);
  }

  public mod(id: number, educ: Educ): Observable<any>{
    return this.http.put<any>(environment.apiUrl + `educ/mod/${id}`, educ);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(environment.apiUrl + `educ/delete/${id}`);
  }

}
