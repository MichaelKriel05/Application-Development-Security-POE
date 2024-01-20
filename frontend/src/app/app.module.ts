import { NgModule } from '@angular/core';
//Varsity College, IIE. (2021). APDS7311 Lab Guide (First Edition 2021). Varsity College, The Independent Institute of Education.

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { IssueCreateComponent } from './issue/issue-create/issue-create.component';
import { IssueDisplayComponent } from './issue/issue-display/issue-display.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoginComponent } from './auth/login/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from './error/errorinterceptor.interceptor';
import { SignupComponent } from './auth/signup/signup/signup.component';

@NgModule({  
  declarations: [
    AppComponent,
    IssueCreateComponent,
    IssueDisplayComponent,
    LoginComponent,
    ErrorComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true},
              {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
