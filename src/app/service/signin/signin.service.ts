import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  apiUrl: string = '';
  constructor(private _httpClient: HttpClient) { }

  OnPost(body: any) {
    console.log(body);
    return this._httpClient.post(this.apiUrl, body);
  }

}
