//Varsity College, IIE. (2021). APDS7311 Lab Guide (First Edition 2021). Varsity College, The Independent Institute of Education.

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IssueServiceService } from '../issue-service.service';

@Component({
  selector: 'app-issue-display',
  templateUrl: './issue-display.component.html',
  styleUrls: ['./issue-display.component.css']
})
export class IssueDisplayComponent implements OnInit {

  issues:{_id:string, title:string, description:string, __v:string}[] = [];

  constructor(public issueservice: IssueServiceService) { }

  private issuesubscription!: Subscription;

  ngOnInit() {
    this.issueservice.getissue_service();
    this.issuesubscription = this.issueservice.getUpdateListener()
    .subscribe((electricals:{_id:string,title:string, description:string,__v:string}[])=>
    {
      this.issues = electricals;
    });
  }

  ngOnDestroy()
  {
    this.issuesubscription.unsubscribe();
  }

  ondelete(issueid: string) {
    this.issueservice.deleteissue_service(issueid)
  }
}
