import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { productSelector } from '../../product/product.selectors';
import { ProductState } from '../../product/reducers';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  productsList: ProductModel[] = []



  constructor(private localstorageSvc:LocalStorageService,
    private store: Store<ProductState>,
    ) {
         
  }

  ngOnInit(): void {
   this.productsList = this.localstorageSvc.getCartItens();

  }
}
