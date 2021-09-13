import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBaseRequest } from 'src/app/core/Interface/IBaseRequest';
import { HttpClientService } from 'src/app/core/Services/http-client.service';
import { UserEndPoints } from '../../EndPoints/UserEndPoint';
import { UserModel } from '../../Model/UserModel';

@Injectable()
export class UserServiceService implements IBaseRequest<UserModel> {

  constructor(private httpSvc: HttpClientService<UserModel>) { }
  GetList(): Observable<UserModel[]> {
    return this.httpSvc.GetList(UserEndPoints.BASE);
  }

  GetById(Id: number): Observable<UserModel> {
    return this.httpSvc.GetById(UserEndPoints.BASE,Id);
  }

  Filter(objFilter: UserModel): Observable<UserModel[]> {
    return this.httpSvc.Filter(`${UserEndPoints.BASE}/${UserEndPoints.FILTER}`,objFilter);
  }

  Create(toCreate: UserModel): Observable<UserModel> {
    return this.httpSvc.Create(UserEndPoints.BASE,toCreate);
  }

  Update(toUpdate: UserModel): Observable<UserModel> {
    return this.httpSvc.Update(UserEndPoints.BASE,toUpdate);
  }
  
  Delete(Id: number): Observable<boolean> {
    return this.httpSvc.Delete(UserEndPoints.BASE,Id);
  }
}
