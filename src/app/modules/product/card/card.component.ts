import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/Model/ProductModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product!:ProductModel;
  constructor() { }

  ngOnInit(): void {
  }



}
