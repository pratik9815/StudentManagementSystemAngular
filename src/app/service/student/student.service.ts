import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl: string = "";
  constructor(private _httpClient: HttpClient) { }

  getStudent() {
    this._httpClient.get(this.apiUrl);
  }
}
