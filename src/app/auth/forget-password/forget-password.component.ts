import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import { LoginService} from '../login/login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetform:FormGroup;
  email:string;

  constructor(private fb:FormBuilder ,
    private _location: Location,
    private verservice:LoginService,
    private router:Router,
    private toastr: ToastrService) {
    this.forgetform = fb.group({
      'email':['', [
        Validators.required,
        Validators.email,
        Validators.pattern(
          '^[a-zA-Z0-9][a-zA-Z0-9_+-.]{2,30}@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,5}'
        ),
      ],
    ],
    });
   }

  ngOnInit(): void {
  }
  

  forgetdata(forgetform:any){

    const emailid ={
      email:this.forgetform.value.email
    }

    this.verservice.setNewPassword(emailid).subscribe(res =>{
      this.toastr.success('OTP send your email!', forgetform.controls.email.value);
      localStorage.setItem("email",this.forgetform.value.email)
      this.router.navigate(['otp']);
      console.log(res);
    },err => {
      console.log(err)
    })
    console.log(this.forgetform.value)
  }



  cancel() {
    this._location.back(); // <-- go back to previous location on cancel
  }

}
