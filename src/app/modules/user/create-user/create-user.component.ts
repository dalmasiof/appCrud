import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators, MASKS } from 'ng-brazil';
import { UserModel } from 'src/app/shared/Model/UserModel';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';
import { UserServiceService } from 'src/app/shared/Services/UserService/user-service.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  cadForm!: FormGroup
  userModel!: UserModel
  errorMesageRequired: string = "Please input something..."

  MASKS = MASKS;

  password = new FormControl('',[Validators.required,CustomValidators.rangeLength([5, 9])])
  Confirmpassword = new FormControl('',
  [Validators.required
  ,CustomValidators.rangeLength([5, 9])
  ,CustomValidators.equalTo(this.password)])



  constructor(private fb: FormBuilder, private userSvc:UserServiceService) { }

  ngOnInit(): void {
    this.cadForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PassWord: this.password,
      ConfirmPassword: this.Confirmpassword
    })
  }


  onFormSubmit() {
    debugger
    this.userModel = Object.assign({}, this.cadForm.value);
   
    this.userSvc.Create(this.userModel).subscribe((x)=>{
      console.log(x);
    },
    (error=>{
      console.error("Deu ruim"+error)
    }),
    ()=>
    alert("Aki ira redirecionar")    
    )

  }
}
