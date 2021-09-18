import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  products!: Observable<ProductModel[]>;

  



  constructor(private productSvc: ProductsService) {
  }
  ngAfterViewInit(): void {
    this.products = this.productSvc.GetList()
  }

  ngOnInit(): void {


  }

  fillList() {
    debugger
    // this.pd = this.products;
  }



}
