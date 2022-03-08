import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './shared/Services/LocalStorage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appCrud';
  constructor(private localStrgSvc:LocalStorageService,
    private routerSvc:Router) {
    debugger
    if(!localStrgSvc.getUser()){
      this.routerSvc.navigateByUrl('User/login')
    }
  }
}
