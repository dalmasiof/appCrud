import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
<<<<<<< HEAD:src/app/shared/Services/UserService/user-info.service.ts
import { UserModel } from '../../Model/UserModel';
=======
import { UserToken } from '../../../shared/Model/UserToken';
>>>>>>> master:src/app/core/Services/UserInfoService/user-info.service.ts

@Injectable()
export class UserInfoService {

  private _userData = new Subject<UserModel|null>();

  userData$ = this._userData.asObservable();

  addData(data:UserModel|null) {
  this._userData.next(data);
  }

  constructor() { }
}
