import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(private http: HttpClient) { }

  //forgot request
  forgot(body: any) {
    return this.http.post(`${environment.api}/forgot`, body);
  }

  //reset request
  reset(body: any) {
    return this.http.post(`${environment.api}/reset`, body);
  }
}
