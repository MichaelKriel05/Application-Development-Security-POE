//Varsity College, IIE. (2021). APDS7311 Lab Guide (First Edition 2021). Varsity College, The Independent Institute of Education.

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IssueServiceService } from '../issue-service.service';

@Component({
  selector: 'app-issue-create',
  templateUrl: './issue-create.component.html',
  styleUrls: ['./issue-create.component.css']
})
export class IssueCreateComponent {

  constructor(public issueservice: IssueServiceService) { }

  onaddIssue(issueform: NgForm) {
    if (issueform.invalid)
    {
        alert('An error has occurred.')
        return
    }
    alert("Issue: ("+ issueform.value.enteredTitle+") added successfully!")

    this.issueservice.addissue_service(issueform.value.enteredTitle,issueform.value.enteredDescription)
    issueform.resetForm()
  }

}
