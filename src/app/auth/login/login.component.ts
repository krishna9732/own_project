import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService} from './login.service';
import { Loginemployee } from './loginemployee';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:FormGroup;
  email:string;
  password:string;
  show:any; 
  constructor(private fb:FormBuilder, 
              private router: Router ,
              private loginservice:LoginService,
              private toastr: ToastrService) { 
    this.login = fb.group({
      'email':['', [
        Validators.required,
        Validators.email,
        Validators.pattern(
          '^[a-zA-Z0-9][a-zA-Z0-9_+-.]{2,30}@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,5}'
        ),
      ],
    ],
      'password':['',Validators.required]
    });
  }
 
  ngOnInit(): void{}

  // ngOnInit(): void {
  //   this.login.getdata().subcribe(data => this.show =data)
  // }
  PostData(login:any){
    // if(login.controls.email.value== 'krishna@gmail.com' && login.controls.password.value == 'Beep@krishna1'){
    //   this.router.navigate(['/toolbar'])
    // }else{
    //   alert('invalid username and password');
    // }

 const data = {
          email:this.login.value.email,
          password:this.login.value.password
      };
   
      this.loginservice.logintime(data).subscribe(response => {
        this.toastr.success('Login Successfully!', login.controls.email.value);
        this.router.navigate(['toolbar'])
        console.log(response);
      }, err => {
        console.log(err)
      })

      console.log(login.controls.email.value);
      console.log(login.controls.password.value)

    
  }


}
