import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators, MASKS } from 'ng-brazil';
import { UserModel } from 'src/app/shared/Model/UserModel';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';


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



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      password: this.password,
      confirmPassword: this.Confirmpassword
    })
  }


  onFormSubmit() {

    this.userModel = Object.assign({}, this.cadForm.value)
    console.log(this.userModel)

  }
}
