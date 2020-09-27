import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, NgForm} from '@angular/forms';
import {LoginService} from '../login/login.service';
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';




@Component({
  selector: 'app-registratiomn',
  templateUrl: './registratiomn.component.html',
  styleUrls: ['./registratiomn.component.scss']
})
export class RegistratiomnComponent implements OnInit {

  create:FormGroup;
  fname:string ="";
  lname:string ="";
  email:string="";
  password:string="";
  phone_number:string ="" ;
  alldata:any = [];

  constructor( private fb:FormBuilder,
                private router: Router ,
                private registerservice:LoginService ,
                private _location: Location,
                private toastr: ToastrService) {
    this.create = fb.group({
      'fname':['',Validators.required],
      'lname': ['',Validators.required],
      'email':['',[
        Validators.required,
        Validators.email,
        Validators.pattern(
          '^[a-zA-Z0-9][a-zA-Z0-9_+-.]{2,30}@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,5}'
        ),
      ],
    ],
      'password':['',Validators.required],
      'phone_number':['',Validators.required]

    });
   }

  ngOnInit(): void {
  }

  PostData(create:any){
    const alldata = {
      fname:this.create.value.fname,
      lname:this.create.value.lname,
      email:this.create.value.email,
      password:this.create.value.password,
      phone_number:this.create.value.phone_number
  };



    this.registerservice.registration(alldata).subscribe(data => {
      this.toastr.success('Register successfully!', create.controls.fname.value);
      this.router.navigate(['Login'])
      console.log(data);
    }, err => {
        console.log(err)
      })
    console.log(create.controls.email.value);
    console.log(create.controls.password.value);
  }

  cancel() {
    this._location.back(); // <-- go back to previous location on cancel
  }

}
