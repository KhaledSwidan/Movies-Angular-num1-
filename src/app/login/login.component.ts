import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  err: string = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })

  constructor(private _ServicesService:ServicesService, private _Router:Router) { }

  ngOnInit(): void { }

  submitLoginForm(loginForm: FormGroup) {
    if (loginForm.valid) {
      this._ServicesService.login(loginForm.value).subscribe((res) => {
        if (res.message === "success") {
          localStorage.setItem("userToken", res.token);
          this._ServicesService.saveUserData();
          this._Router.navigate(['home']);
        } else {
          this.err = res.errors.email.message;
        }
      })
    }
  }

}
