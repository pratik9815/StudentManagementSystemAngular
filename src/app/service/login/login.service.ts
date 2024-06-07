import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = 'https://localhost:7293/api/ApplicationUser/authenticate-user'

  constructor(private httpClient: HttpClient) { }


  OnLogin(body: any) {
    return this.httpClient.post(this.apiUrl, body, { responseType: 'text' });
  }
  GetToken() {
    return localStorage.getItem('token') || '';
  }

  IsLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }

}
