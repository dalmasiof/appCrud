import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { ProductsService } from 'src/app/shared/Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:ProductModel[]=[];

  constructor(private productSvc:ProductsService) {
    this.fillList()
   }
  
  ngOnInit(): void {
  }

  fillList(){
    this.products = this.productSvc.getList();
  }

}
