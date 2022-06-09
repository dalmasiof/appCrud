import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ProductService {

  constructor() { }

  prodQtd = new Subject<number>()


  set(value: number) {
    this.prodQtd.next(value);
  }

  get(): Subject<number> {
    return this.prodQtd
  }

}
