import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { Store } from 'src/app/core/stores/cart.store';
import { IBaseRequest } from 'src/app/core/Interface/IBaseRequest';
import { Observable } from 'rxjs';
import { HttpClientService } from 'src/app/core/Services/http-client.service';
import { ProductEndPoint } from '../../EndPoints/ProductEndPoint';


@Injectable()
export class ProductsService implements IBaseRequest<ProductModel> {

  constructor(private httpSvc: HttpClientService<ProductModel>) { }
  GetList(): Observable<ProductModel[]> {
    return this.httpSvc.GetList(ProductEndPoint.BASE);
  }
  GetById(Id: number): Observable<ProductModel> {
    return this.httpSvc.GetById(ProductEndPoint.BASE,Id);
  }
  Filter(objFilter: ProductModel): Observable<ProductModel[]> {
    return this.httpSvc.Filter(`${ProductEndPoint.BASE}/${ProductEndPoint.FILTER}`
    ,objFilter);
  }
  Create(toCreate: ProductModel): Observable<ProductModel> {
    return this.httpSvc.Create(ProductEndPoint.BASE,toCreate);
  }
  Update(toUpdate: ProductModel): Observable<ProductModel> {
    return this.httpSvc.Update(ProductEndPoint.BASE,toUpdate);
  }
  Delete(Id: number): Observable<boolean> {
    return this.httpSvc.Delete(ProductEndPoint.BASE,Id)
  }
}
