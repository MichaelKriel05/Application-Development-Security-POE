//Varsity College, IIE. (2021). APDS7311 Lab Guide (First Edition 2021). Varsity College, The Independent Institute of Education.

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(public authService: AuthServiceService, private router:Router) {}

  option: string = this.router.url
  ngOnInit(): void {}

  onSignup(signupForm: NgForm) {
    if (signupForm.invalid) {
      alert("invalid")
      return;
    }
  
    console.log('Form data:', signupForm.value);
    if (this.option == '/signup') {
      this.authService.signup(
        signupForm.value.username,
        signupForm.value.password,
        signupForm.value.role,
        signupForm.value.department
      )
      alert("signed up")
    }

  }
}  
