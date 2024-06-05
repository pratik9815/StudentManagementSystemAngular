import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  apiUrl: string = 'https://localhost:7293/api/Department/';
  constructor(private httpClient: HttpClient) { }

  getDepartment(): Observable<any> {
    return this.httpClient.get(this.apiUrl + 'get-departments');
  }
  addDepartment(body: any) {
    return this.httpClient.post(this.apiUrl + 'add-department', body, { responseType: 'text' });
  }
  removeDepartment(id: number) {
    return this.httpClient.delete(this.apiUrl + 'remove-department/' + `${id}`, { responseType: 'text' });
  }


}
