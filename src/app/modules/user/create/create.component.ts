import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MASKS } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/shared/Model/UserModel';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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
    ,private localstgrSvc:LocalStorageService
    , private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cadForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PassWord: this.password,
      ConfirmPassword: this.Confirmpassword
    })


  }


  onFormSubmit() {
    
    this.userModel = Object.assign({}, this.cadForm.value);
   
    this.userSvc.Create(this.userModel).subscribe((x)=>{
      if(!this.localstgrSvc.getUser()){
        this.route.navigateByUrl('User/login')
      }

      this.toastr.success("Account created with success!")  
      this.cadForm.reset()
    },
    (error=>{
      
      this.toastr.error("Error: "+error.statusText);
    })    
    )

  }
}
