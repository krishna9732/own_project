import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistratiomnComponent } from './registratiomn/registratiomn.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { OtpgenerateComponent } from './otpgenerate/otpgenerate.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { from } from 'rxjs';


const routes: Routes = [
  {
    path:'',redirectTo:'Login',pathMatch:'full'
  },
  {
    path:'Login',component:LoginComponent
  },
  {
    path:'Registration',component:RegistratiomnComponent
  },
  {
    path:'forget',component:ForgetPasswordComponent
  },
  {
    path:'otp',component:OtpgenerateComponent
  },
  {
    path:'newpassword',component:NewpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
