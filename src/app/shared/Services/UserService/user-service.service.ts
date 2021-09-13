import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBaseRequest } from 'src/app/core/Interface/IBaseRequest';
import { HttpClientService } from 'src/app/core/Services/http-client.service';
import { UserModel } from '../../Model/UserModel';

@Injectable()
export class UserServiceService implements IBaseRequest<UserModel> {

  constructor(private httpSvc: HttpClientService<UserModel>) { }
  GetList(): Observable<UserModel[]> {
    return this.httpSvc.GetList();
  }

  GetById(Id: number): Observable<UserModel> {
    return this.httpSvc.GetById(Id);
  }

  Filter(objFilter: UserModel): Observable<UserModel[]> {
    return this.httpSvc.Filter(objFilter);
  }

  Create(toCreate: UserModel): Observable<UserModel> {
    return this.httpSvc.Create(toCreate);
  }

  Update(toUpdate: UserModel): Observable<UserModel> {
    return this.httpSvc.Update(toUpdate);
  }
  
  Delete(Id: number): Observable<boolean> {
    return this.httpSvc.Delete(Id);
  }
}
