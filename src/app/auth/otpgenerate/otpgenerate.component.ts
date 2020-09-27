import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-otpgenerate',
  templateUrl: './otpgenerate.component.html',
  styleUrls: ['./otpgenerate.component.scss']
})
export class OtpgenerateComponent implements OnInit {

  otpform:FormGroup;
  otp:any;
  constructor(private fb:FormBuilder,
              private router:Router,
              private otpservice:LoginService) {
    this.otpform = fb.group({
      'otp':['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  otpdata(otpform:any){
    const sendotp ={
      email:localStorage.getItem("email"),
      otp:this.otpform.value.otp
    }
    this.otpservice.otpverify(sendotp).subscribe(res => {
     
      localStorage.setItem("token",res.passwordtoken)
      this.router.navigate(['newpassword']);
      console.log(res);
    },err => {
      console.log(err)
    });

    console.log(otpform.controls.otp.value)
  }

}
