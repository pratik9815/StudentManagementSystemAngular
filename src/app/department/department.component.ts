import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from '../service/department/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departmentForm: any;
  departmentData: any;

  constructor(private _formBuilder: FormBuilder, private _departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentForm = this._formBuilder.group({
      department_Name: ['', Validators.required]
    });

    this.getDepartments();
  }
  onSubmit() {
    console.log(this.departmentForm.value);
  }

  getDepartments(): void {
    this._departmentService.getDepartment().subscribe({
      next: data => {
        this.departmentData = data;
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  addDepartment() {
    console.log(this.departmentForm.value)
    if (this.departmentForm.invalid)
      return;

    this._departmentService.addDepartment(this.departmentForm.value).subscribe({
      next: (data) => {
        console.log(data)
        this.getDepartments();
      },
      error: error => {
        console.log(error)
      },
      complete: () => {
        // this.getDepartments();
        console.log("Completed")
      }
    });
    this.departmentForm.reset();
    // this.getDepartments();
  }

  removeDepartment(id: number) {
    this._departmentService.removeDepartment(id).subscribe({
      next: (data) => {
        console.log(data)
        this.getDepartments();
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log("Completed")
      }
    });
  }

}
