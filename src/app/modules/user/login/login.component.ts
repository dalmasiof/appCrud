import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { UserServiceService } from 'src/app/modules/user/services/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup
  errorMesageRequired: string = "Please input something..."

  constructor(private fb: FormBuilder, private userSvc: UserServiceService
    , private localstrg: LocalStorageService
    , private route: Router
    , private toastvc:ToastrService) { }

  ngOnInit(): void {

    this.localstrg.clearUser();
    this.formLogin = this.fb.group({
      Email: ['', Validators.required],
      PassWord: ['', Validators.required]
    })

  }

  onFormSubmit() {
    
    let userModel = Object.assign({}, this.formLogin.value);

    this.userSvc.Login(userModel).subscribe((x) => {
      
      this.toastvc.success("Log-in successful!")
      this.route.navigateByUrl('')
      this.localstrg.setUser(x);

    },
      (error => {
        console.log(error)
        this.toastvc.error("Error: "+error.statusText)  
      }))

  }

}
