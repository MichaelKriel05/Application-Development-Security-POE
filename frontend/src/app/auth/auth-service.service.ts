//Varsity College, IIE. (2021). APDS7311 Lab Guide (First Edition 2021). Varsity College, The Independent Institute of Education.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private token!: string;

  constructor(private http: HttpClient) { }


 signup(userusername: string, userpassword: string, userrole: string, userdepartment: string)
{
  this.http.post('https://localhost:3001/api/users/signup', { username: userusername, password: userpassword, role: userrole, department: userdepartment })
  .subscribe(response => {
    alert("User: "+ userusername + " registered successfully!")
  });
}
  
  login (userusername:string, userpassword: string)
  {
    this.http.post<{ token: string }>('https://localhost:3001/api/users/login', {username:userusername, password:userpassword})
    .subscribe(response => {
      const token = response.token;
      this.token = token;
      sessionStorage.setItem('var2', "My Name");
      console.log(sessionStorage.getItem('var2'));
    });
  }

  getToken() {
    return this.token;
  }
}
