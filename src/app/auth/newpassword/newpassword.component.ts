import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService} from '../login/login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.scss']
})
export class NewpasswordComponent implements OnInit {

  passwordform:FormGroup;
  password:string;
  constructor(private fb:FormBuilder,
              private passservice:LoginService,
              private router:Router,
              private toastr: ToastrService
              ) { 
                this.passwordform = fb.group({
                  'password':['']
                })
              }

  ngOnInit(): void {
  }

  newdata(passwordform:any){
    const newpass={
      email:localStorage.getItem("email"),
      password:this.passwordform.value.password,
      token:localStorage.getItem("token")
    }

    this.passservice.newpassword(newpass).subscribe(res =>{
      this.toastr.success('Password update successfully!', localStorage.getItem("email"));
      this.router.navigate(['Login']);
      console.log(res);
    }, err => {
      console.log(err)
    })

    console.log(passwordform.controls.password.value)
  }

}
