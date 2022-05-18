import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static authEmitter = new EventEmitter<boolean>();
  accessToken = '';

  constructor(private http: HttpClient) { }

  //register request
  register(body: any) {
    return this.http.post(`${environment.api}/register`, body);
  }
  
  //login request
  login(body: any) {
    return this.http.post(`${environment.api}/login`, body, {withCredentials: true});
  }

  

  //user request
  user() {
    return this.http.get(`${environment.api}/user`);
  }

  //user request
  refresh() {
    return this.http.post(`${environment.api}/refresh`, {}, {withCredentials: true});
  }

  //user request
  logout() {
    return this.http.post(`${environment.api}/logout`, {}, {withCredentials: true});
  }
}
