import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormComponent } from './pages/form/form.component';



@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    RegisterComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
