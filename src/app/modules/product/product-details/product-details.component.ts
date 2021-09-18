import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/shared/Model/ProductModel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!:ProductModel
  constructor(private activeROute:ActivatedRoute) { }

  ngOnInit(): void {
    this.product = this.activeROute.snapshot.data['product']
    
  }

}
