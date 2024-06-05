import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://mocki.io/v1/9a45df75-4971-4b94-805d-f05f4e5791d6'

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
