import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../../../../shared/service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // Validation Messages
  // ==================================
  validationMessage = {
    user_name: [
      { type: 'required', message: 'User Name is required.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' }
    ],
  };

  constructor(public Fb: FormBuilder, public toastr: ToastrService, public service: ServiceService, public route: Router) { }

  ngOnInit() {
    this.formInit();
  }
// ==============================================================
// FORM INITIATE
// ========================
formInit = () => {
  this.loginForm = this.Fb.group({
    user_name: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });
}
// ==============================================================
login = () => {
  if (this.loginForm.valid) {
    this.service.getList('login').subscribe((result) => {
     if (result.status === 'success') {
       this.toastr.success(result.message);
       localStorage.setItem('token', result.token);
       this.route.navigate(['/layout/blogs']);
     }
    });

  } else {
    this.toastr.error('Validation Failed');
  }
}
// ==================================================================
userPage = () => {
  this.route.navigate(['/home']);
}
}
