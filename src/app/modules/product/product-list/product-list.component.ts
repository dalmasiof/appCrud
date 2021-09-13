import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { ProductsService } from 'src/app/shared/Services/ProductsService/products.service';
import { Store } from '../../../core/stores/cart.store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Observable<ProductModel[]>;


  constructor(private productSvc: ProductsService, private store: Store) {
  }

  ngOnInit(): void {
    // this.productSvc.fillStore();

    this.fillList()

  }

  fillList() {
    // debugger
    this.products = this.store.getProductList();


  }



}
