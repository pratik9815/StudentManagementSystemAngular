import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninService } from '../service/signin/signin.service';
import { AddUser } from './interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;

  gender!: Gender;
  isPassword: boolean = true;


  constructor(private _formBuilder: FormBuilder,
    private _signinService: SigninService, private _router: Router
  ) { }

  ngOnInit(): void {

    this.signinForm = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: [Gender.Male, Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.signinForm.invalid)
      return;


    const data: AddUser = {
      Name: this.signinForm.value.name,
      Phone: this.signinForm.value.phone,
      Address: this.signinForm.value.address,
      Gender: Number(this.signinForm.value.gender),
      DOB: this.signinForm.value.dob,
      UserType: 2,
      Email: this.signinForm.value.email,
      UserName: this.signinForm.value.username,
      Password: this.signinForm.value.password
    }
    console.log(data);
    this._signinService.OnPost(data).subscribe({
      next: (data) => {
        if (data) {
          this._router.navigate(['/login']);
        }
        this.signinForm.reset();
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  showPassword() {
    this.isPassword = !this.isPassword;
  }
}

enum Gender {
  Male = "1",
  Female = "2",
  Others = "3"
}
