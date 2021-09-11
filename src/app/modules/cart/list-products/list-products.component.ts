import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { Store } from '../../../core/stores/cart.store';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products!: Observable<ProductModel[]>
  productsList!: ProductModel[]
  produto!:ProductModel

  constructor(private Store: Store) {


  }

  ngOnInit(): void {
    this.products = this.Store.getProductList()

  }
}
