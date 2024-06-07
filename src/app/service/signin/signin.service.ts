import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  apiUrl: string = 'https://localhost:7293/api/ApplicationUser/add-user';
  constructor(private _httpClient: HttpClient) { }

  OnPost(body: any) {
    return this._httpClient.post(this.apiUrl, body);
  }

}
