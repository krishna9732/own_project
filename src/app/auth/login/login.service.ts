import { Injectable } from '@angular/core';
import { Loginemployee, SuccessResponse } from './loginemployee';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpParams,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment} from '../../../environments/environment';
import { Register } from '../registratiomn/register';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BNSLogin:boolean;
  url=environment.BNSLogin;
  constructor( private http:HttpClient) { }

  logintime(formData:any):Observable<any>{
    return this.http.post<any>(`${this.url}/auth/login`,formData)
  }

  setNewPassword(OTP: any):Observable<any> {
    return this.http.post<any>(`${this.url}/auth/sendOtp`,OTP);
  }

  otpverify(otpsend:any):Observable<any>{
    return this.http.post<any>(`${this.url}/auth/verifyOtp`,otpsend)
  }
  newpassword(pass:any):Observable<any>{
    return this.http.post<any>(`${this.url}/auth/updatePassword`,pass)
  }

  registration(registration:any):Observable<any>{
    return this.http.post<any>(`${this.url}/auth`,registration);
  }
}
