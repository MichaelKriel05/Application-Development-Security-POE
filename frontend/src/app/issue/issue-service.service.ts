//Varsity College, IIE. (2021). APDS7311 Lab Guide (First Edition 2021). Varsity College, The Independent Institute of Education.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueServiceService {

  private issuesdisplay:{_id:string,title:string, description:string, __v:string}[] = [];
  private updatedissuesdisplay = new Subject<{_id:string,title:string,description:string, __v:string}[]>();

  constructor(private http: HttpClient) { }

  addissue_service(ptitle:string,pdescription:string)
  {
    this.http.post<{message:string,issue:any}>('https://localhost:3001/api/electricals/Posts/create',{title:ptitle, description:pdescription})
    .subscribe((theissue)=>
      {
        this.issuesdisplay.push(theissue.issue);
        this.updatedissuesdisplay.next([...this.issuesdisplay]);
      })
  }

  getissue_service() {
    this.http.get<{message:String, electricals:any}>('https://localhost:3001/api/electricals/Posts/all')
    .subscribe((electricalDeptSchema)=>
    {
      this.issuesdisplay = electricalDeptSchema.electricals
      this.updatedissuesdisplay.next([...this.issuesdisplay]);
    })
  }

  deleteissue_service(issueid: string)
  {
    this.http.delete('https://localhost:3001/api/electricals/Posts/delete/' + issueid)
    .subscribe(()=>
    {
      const updatedissuesdeleted = this.issuesdisplay.filter(issue=>issue._id!==issueid);
      this.issuesdisplay = updatedissuesdeleted;
      this.updatedissuesdisplay.next([...this.issuesdisplay]);
    })
  }

  getUpdateListener()
  {
    return this.updatedissuesdisplay.asObservable();
  }
}
