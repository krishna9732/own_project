import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistratiomnComponent } from './registratiomn/registratiomn.component';
import { from } from 'rxjs';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { OtpgenerateComponent } from './otpgenerate/otpgenerate.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';


@NgModule({
  declarations: [LoginComponent, RegistratiomnComponent, ForgetPasswordComponent, OtpgenerateComponent, NewpasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ReactiveFormsModule
  ] 
})
export class AuthModule { }
