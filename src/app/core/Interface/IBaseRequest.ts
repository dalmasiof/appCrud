import { Observable } from "rxjs";

export interface IBaseRequest <T>{

    GetList():Observable<T[]>
    GetById(Id:number):Observable<T>
    Filter(objFilter:T):Observable<T[]>

    Create(toCreate:T):Observable<T>
    Update(toUpdate:T):Observable<T>
    Delete(Id:number):Observable<boolean>
}