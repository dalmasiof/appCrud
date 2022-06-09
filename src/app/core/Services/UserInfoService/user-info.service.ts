import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserToken } from '../../../shared/Model/UserToken';

@Injectable()
export class UserInfoService {

  private _userData = new Subject<UserToken|null>();

  userData$ = this._userData.asObservable();

  addData(data:UserToken|null) {
  this._userData.next(data);
  }

  constructor() { }
}
