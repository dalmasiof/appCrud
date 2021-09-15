import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { utilsBr } from 'js-brasil';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  cadForm!:FormGroup
  errorMesageRequired: string = "Please input something..."
  MASKS = utilsBr.MASKS;



  constructor(private fb:FormBuilder) { }

  ngOnInit(): void  {
    this.cadForm = this.fb.group({
      
      Name:['',Validators.required],
      Value:['',Validators.required],
      ImgPath:['',Validators.required],

  })
  }

  onFormSubmit(){

  }

}
