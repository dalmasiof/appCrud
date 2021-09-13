import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBaseRequest } from '../Interface/IBaseRequest';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class HttpClientService<T>{

  baseUrl:string = environment.urlBaseAPI;

  // const headers = new HttpHeaders();
  //   headers.set('Content-Type', 'application/json; charset=utf-8');
  
  constructor(private http: HttpClient) {  }

  GetList(path:string): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}${path}`);
  }

  GetById(path:string,Id: number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${path}/${Id}`);
  }

  Filter(path:string,objFilter: T): Observable<T[]> {
    return this.http.post<T[]>(`${this.baseUrl}${path}`,objFilter);
  }

  Create(path:string,toCreate: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${path}`,toCreate);
  }

  Update(path:string,toUpdate: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${path}`,toUpdate);
  }

  Delete(path:string,Id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}${path}/${Id}`);
  }

  
}
