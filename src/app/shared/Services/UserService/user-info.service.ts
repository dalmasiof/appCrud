import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserModel } from '../../Model/UserModel';

@Injectable()
export class UserInfoService {

  private _userData = new Subject<UserModel|null>();

  userData$ = this._userData.asObservable();

  addData(data:UserModel|null) {
  this._userData.next(data);
  }

  constructor() { }
}
