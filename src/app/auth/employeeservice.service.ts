import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{observable, Observable} from 'rxjs';
import {Employee} from './employee';
import {Loginemployee} from './login/loginemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor( private http:HttpClient) { } 
 

} 