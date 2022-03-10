import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products!: Observable<ProductModel[]>
  productsList!: ProductModel[]
  produto!:ProductModel

  constructor(private localstorageSvc:LocalStorageService) {
    this.products = this.localstorageSvc.getCartItens()
         
  }

  ngOnInit(): void {
    // this.products = this.Store.getProductList()

  }
}
