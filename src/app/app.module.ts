import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { PublicModule } from './public/public.module';
import { SecureModule } from './secure/secure.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { Error404Component } from './error-pages/error404/error404.component';
import { Error500Component } from './error-pages/error500/error500.component';
import { ErrorMaintenanceComponent } from './error-pages/error-maintenance/error-maintenance.component';
import {GoogleLoginProvider, SocialLoginModule} from "angularx-social-login";


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    Error500Component,
    ErrorMaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SecureModule,
    PublicModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '982891557954-psqin68f815aik3n2g47m6je1vkkm3jf.apps.googleusercontent.com'
            )
          }
        ]
      },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
