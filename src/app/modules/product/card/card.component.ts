import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductModel } from 'src/app/shared/Model/ProductModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product!: ProductModel;
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(id: number):void {

  }
  removeFromCart(id: number):void {
  }

  



}
