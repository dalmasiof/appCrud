import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { UserServiceService } from 'src/app/modules/user/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup
  errorMesageRequired: string = "Please input something..."

  constructor(private fb: FormBuilder, private userSvc: UserServiceService
    , private localstrg: LocalStorageService, private route: Router) { }

  ngOnInit(): void {

    this.localstrg.clearUser();
    this.formLogin = this.fb.group({
      Email: ['', Validators.required],
      PassWord: ['', Validators.required]
    })

  }

  onFormSubmit() {
    debugger
    let userModel = Object.assign({}, this.formLogin.value);

    this.userSvc.Login(userModel).subscribe((x) => {
      
      this.route.navigateByUrl('')
      this.localstrg.setUser(x);

    },
      (error => {
        console.error("Deu ruim" + error)
      }))

  }

}
