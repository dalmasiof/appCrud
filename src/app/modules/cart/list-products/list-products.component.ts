import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProductModel } from 'src/app/shared/Model/ProductModel';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products!: Observable<ProductModel[]>
  productsList!: ProductModel[]
  produto!:ProductModel

  constructor() {


  }

  ngOnInit(): void {
    // this.products = this.Store.getProductList()

  }
}
