import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { IBaseRequest } from 'src/app/core/Interface/IBaseRequest';
import { Observable } from 'rxjs';
import { HttpClientService } from 'src/app/core/Services/HttpClient/http-client.service';
import { ProductEndPoint } from 'src/app/shared/EndPoints/ProductEndPoint';
import { tap } from 'rxjs/operators';


@Injectable()
export class ProductsService implements IBaseRequest<ProductModel> {

  constructor(private httpSvc: HttpClientService<ProductModel>) { }
  GetList(): Observable<ProductModel[]> {
    return this.httpSvc.GetList(ProductEndPoint.BASE).pipe(
      tap(x=>{
        x.forEach(y=>{
          if(y.name.length>20){
            y.name = y.name.substr(0,20)+"..."
          }
        })
      })
      );;
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
