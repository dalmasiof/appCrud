import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  User: any;
  editUserForm!: FormGroup;

  constructor(
    private localStorageSvc: LocalStorageService,
    private fb: FormBuilder
  ) {

    this.User = this.localStorageSvc.getUser();

    this.editUserForm = this.fb.group({
      Name: ['', Validators.required],
      Email: [this.User.Email, [Validators.required, Validators.email]],
    });
    console.log(this.User);
  }

  ngOnInit(): void {}

  onFormSubmit() {}
}
