import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBaseRequest } from '../Interface/IBaseRequest';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService<T> implements IBaseRequest<T> {

  constructor(private http: HttpClient) {  }

  GetList(): Observable<T[]> {
    return this.http.get<T[]>("");
  }

  GetById(Id: number): Observable<T> {
    return this.http.get<T>(`/${Id}`);
  }

  Filter(objFilter: T): Observable<T[]> {
    return this.http.post<T[]>("",objFilter);
  }
  
  Create(toCreate: T): Observable<T> {
    return this.http.post<T>("",toCreate);
  }

  Update(toUpdate: T): Observable<T> {
    return this.http.put<T>("",toUpdate);
  }

  Delete(Id: number): Observable<boolean> {
    return this.http.delete<boolean>(`/${Id}`);
  }

  
}
