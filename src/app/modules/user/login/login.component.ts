import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { UserServiceService } from 'src/app/modules/user/services/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { LoggedUserService } from 'src/app/core/Services/loggedUser/logged-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup
  errorMesageRequired: string = "Please input something..."
  returnUrl!: string;


  constructor(private fb: FormBuilder, private userSvc: UserServiceService,
    private loggedUser:LoggedUserService
    , private localstrg: LocalStorageService
    , private route: Router
    , private activeRoute:ActivatedRoute
    , private toastvc: ToastrService
) {
 
      this.returnUrl = this.activeRoute.snapshot.queryParams['returnUrl'];

  }

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

      this.returnUrl ? this.route.navigateByUrl(this.returnUrl)
      : this.route.navigateByUrl('Product/list')
      this.loggedUser.set(true)
      this.localstrg.setUser(x);

    },
      (error => {
        console.log(error)
        this.toastvc.error("Error: " + error.statusText)
      }))

  }

}
