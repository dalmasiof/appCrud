import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBaseRequest } from 'src/app/core/Interface/IBaseRequest';
import { HttpClientService } from 'src/app/core/Services/HttpClient/http-client.service';
import { PurchaseOrderEndPoint } from 'src/app/shared/EndPoints/PurchaseOrderEndPoint';
import { PurchaseModelVM } from 'src/app/shared/Model/PurchaseModelVM';

@Injectable()
export class PurchaseOrderService implements IBaseRequest<PurchaseModelVM>{

  constructor(private httpSvc: HttpClientService<PurchaseModelVM>) { }
  GetList(): Observable<PurchaseModelVM[]> {
    return this.httpSvc.GetList(PurchaseOrderEndPoint.BASE)
  }
  GetById(Id: number): Observable<PurchaseModelVM> {
    return this.httpSvc.GetById(PurchaseOrderEndPoint.BASE,Id)
  }
  Filter(objFilter: PurchaseModelVM): Observable<PurchaseModelVM[]> {
    throw new Error('Method not implemented.');
  }
  Create(toCreate: PurchaseModelVM): Observable<PurchaseModelVM> {
    return this.httpSvc.Create(PurchaseOrderEndPoint.BASE,toCreate)
  }
  Update(toUpdate: PurchaseModelVM): Observable<PurchaseModelVM> {
    return this.httpSvc.Update(PurchaseOrderEndPoint.BASE,toUpdate)
  }
  Delete(Id: number): Observable<boolean> {
    return this.httpSvc.Delete(PurchaseOrderEndPoint.BASE,Id)
  }
}
