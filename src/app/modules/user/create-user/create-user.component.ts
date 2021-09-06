import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/Model/User';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  cadForm!:FormGroup
  userModel!:User
  errorMesageRequired:string="Please input something..."

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.cadForm = this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    cpf:['',Validators.required],
    password:['',Validators.required],
    confirmPassword:['',Validators.required]
    })
  }


  onFormSubmit(){

    this.userModel = Object.assign({},this.cadForm.value)
    console.log(this.userModel)

  }
}
