import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from './User';


//angular all material 

import { from } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']  
})
export class TestComponent implements OnInit {

  title="Test on radio button and check box";
  user = new User();

  constructor() { }

  onFormSubmit(form:NgForm){
    if(form.invalid){
      return;
    }
    console.log('user name' + form.controls['uname'].value);
    console.log('user Gender' + form.controls['gender'].value);
    console.log('user married' + form.controls['married'].value);
    console.log('user tc' + form.controls['tc'].value);

  }
  resetForm(form:NgForm){
    this.user = new User();
    form.resetForm({
      married:false
    });
  }

  setDefaultValues(){
    this.user.username="Krishna";
    this.user.gender="male";
    this.user.isMarried=false;
    this.user.isTCAccepted=true; 
  }

  ngOnInit(): void {
  }

}
