import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoggedUserService {

  constructor() { }

  userLogged = new Subject<boolean>()


  set(value: boolean) {
    this.userLogged.next(value);
  }

  get(): Subject<boolean> {
    return this.userLogged
  }

}
