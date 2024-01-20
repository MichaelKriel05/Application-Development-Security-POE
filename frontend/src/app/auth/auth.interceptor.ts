//Varsity College, IIE. (2021). APDS7311 Lab Guide (First Edition 2021). Varsity College, The Independent Institute of Education.

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthServiceService } from './auth-service.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authservice: AuthServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    const authToken = this.authservice.getToken();
    const authRequest = request.clone({headers:request.headers.set("Authorization", "Bearer " + authToken)})
    return next.handle(authRequest);
  }
}
