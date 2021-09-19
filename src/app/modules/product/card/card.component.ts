import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductModel } from 'src/app/shared/Model/ProductModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product!: ProductModel;
  constructor(private router:Router) { }


  ngOnInit(): void {
    // alert(this.product)
  }


  addToCart(id: number): void {
    // console.log(this.product)
  }







}
