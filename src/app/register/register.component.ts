import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  err: string = '';

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(35)])
  })

  constructor(public _ServicesService:ServicesService, public _Router:Router) { }

  ngOnInit(): void { }

  submitRegisterForm(registerForm: FormGroup) {
    if (registerForm.valid) {
      this._ServicesService.register(registerForm.value).subscribe((res) => {
        if (res.message === "success") {
          this._Router.navigate(['login']);
        } else {
          this.err = res.errors.email.message;
        }
      })
    }
  }

}
