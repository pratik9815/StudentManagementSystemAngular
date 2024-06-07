import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  myForm!: FormGroup;
  responseData: any;
  //  myForm : FormGroup | undefined;

  constructor(private _loginService: LoginService, private _router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(form: FormGroup): void {
    this._loginService.OnLogin(form.value).subscribe({
      next: res => {
        if (res != null) {
          this.responseData = res;
          localStorage.setItem('token', this.responseData);
          this._router.navigate(['department']);
        }
        this.myForm.reset();
      },
      error: err => {
        console.log(err);
      }
    }

    )
  }
}
