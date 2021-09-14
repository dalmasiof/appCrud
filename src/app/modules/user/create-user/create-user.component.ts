import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  MASKS } from 'ng-brazil';
import { UserModel } from 'src/app/shared/Model/UserModel';
import { CustomValidators } from 'ng2-validation';
import { UserServiceService } from 'src/app/modules/user/services/user-service.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';


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



  constructor(private fb: FormBuilder
    , private userSvc:UserServiceService
    , private route:Router
    ,private localstgrSvc:LocalStorageService) { }

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

      if(this.localstgrSvc.getUser().token == undefined){
        this.userSvc.Login(x).subscribe((x)=>{
          this.route.navigateByUrl('')
          this.localstgrSvc.setUser(x);
        })
      }

    },
    (error=>{
      console.error("Deu ruim "+error)
    })    
    )

  }
}
