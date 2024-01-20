//Varsity College, IIE. (2021). APDS7311 Lab Guide (First Edition 2021). Varsity College, The Independent Institute of Education.

import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 constructor(public authservice: AuthServiceService, private router: Router) { }

 option: string = this.router.url

 ngOnInit(): void {

 }

 onLogin(loginform: NgForm) {
  if (loginform.invalid) {
  
    alert("Invalid Credentials.");
    return;
  }

  if (this.option == '/login') {
    this.authservice.login(loginform.value.enteredusername, loginform.value.enteredpassword)
    alert(loginform.value.enteredusername + " Logged In Successfully!")
  }
}
}

