import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { ProductsService } from '../products.service';

@Injectable()
export class ProductResolver implements Resolve<ProductModel> {
  
  constructor(private productSVc: ProductsService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.productSVc.GetById((route.params['id']));
  }

}
