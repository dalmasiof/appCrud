import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  convertNumberToNetCore(value:string):number{
    let valuetoCOnvert = value.replace('.','')
    .replace(',','');

    let valueInt = parseInt(valuetoCOnvert);

    return (valueInt/100);
  }
}
