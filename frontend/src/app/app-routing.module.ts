//Varsity College, IIE. (2021). APDS7311 Lab Guide (First Edition 2021). Varsity College, The Independent Institute of Education.

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login/login.component";
import { IssueCreateComponent } from "./issue/issue-create/issue-create.component";
import { IssueDisplayComponent } from "./issue/issue-display/issue-display.component";
import { SignupComponent } from "./auth/signup/signup/signup.component";


const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'all', component:IssueDisplayComponent},
    {path:'add', component:IssueCreateComponent},
    {path: 'signup', component:SignupComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }