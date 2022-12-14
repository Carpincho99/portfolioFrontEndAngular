import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exp } from '../models/exp';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpService {

  constructor(private http: HttpClient) { }

  public list(): Observable<Exp[]>{
   return this.http.get<Exp[]>(environment.apiUrl + "exp/list");
  }

  public save(exp: Exp): Observable<any>{
    return this.http.post<any>(environment.apiUrl + "exp/create", exp);
  }

  public mod(id: number, exp: Exp): Observable<any>{
    return this.http.put<any>(environment.apiUrl + `exp/mod/${id}`, exp)
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(environment.apiUrl + `exp/delete/${id}`);
  }


}
