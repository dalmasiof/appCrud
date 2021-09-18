import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { utilsBr } from 'js-brasil';
import { ToastrService } from 'ngx-toastr';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { NumberService } from 'src/app/shared/Services/Number/number.service';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  cadForm!:FormGroup
  errorMesageRequired: string = "Please input something..."
  MASKS = utilsBr.MASKS;



  constructor(private fb:FormBuilder
    , private productService:ProductsService
    , private toasterService:ToastrService
    , private numberService:NumberService) { }

  ngOnInit(): void  {
    this.cadForm = this.fb.group({
      
      name:['',Validators.required],
      value:['',Validators.required]

  })
  }

  onFormSubmit(){
    
    let prodToCreate:ProductModel

    prodToCreate = Object.assign({},this.cadForm.value);
    prodToCreate.value = this.numberService.convertNumberToNetCore(prodToCreate.value.toString());
    
    this.productService.Create(prodToCreate).subscribe(
      (x)=>{
        this.toasterService.success("Product Created");
        this.cadForm.reset();
      },
      (y)=>{
        this.toasterService.error("Error on create Product: "+y);
      }
    );
  }

}
