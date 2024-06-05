import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {
  items: any;
  studentForm: any;
  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      age: ['', Validators.required]

    })
    this.loadItems();
  }

  loadItems(): void {
    this.apiService.getItems().subscribe({
      next: data => {
        this.items = data;
      },
      error: error => {
        console.log(error)
      }
    })
  }

  onSubmit() {
    console.log(this.studentForm.value);

  }
}
