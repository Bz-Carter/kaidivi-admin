import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormComponent } from './pages/form/form.component';
import { AuthenticatorComponent } from './pages/login/authenticator/authenticator.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { ResetComponent } from './pages/reset/reset.component';



@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ResetComponent,
    FormComponent,
    AuthenticatorComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
