import { Component, OnInit } from '@angular/core';
import { FusadminService } from '../../fusadmin.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  length;
  feedbackList = [];
  status = 'pending';
  pageNo = 1;
  perpage = 10;
  constructor(
    private fusAdminService: FusadminService    
  ) { }

  ngOnInit() {
    this.getFeedbaks();    
  }

  setStatus() {
    this.pageNo = 1;
    this.perpage = 10;
    this.getFeedbaks();
  }
  getFeedbaks() {
    this.fusAdminService.getFeedbaks(this.status, this.pageNo, this.perpage).subscribe((data: any) => {
      this.feedbackList = data.data.feedbacks;
      console.log(data)
      this.length = data.data.count;
      console.log(data);
    }, err=>{
      this.feedbackList = [];
      this.length = 0;
    });
  }
  selectedTab(data) {
    console.log(data['index']);
    if (data['index'] === 0) {
      this.status = 'pending';
      this.setStatus()
    } else if (data['index'] === 1) {
      this.status = 'approved';
      this.setStatus()
    } else if (data['index'] === 2) {
      this.status = 'rejected';
      this.setStatus()
    }

  }
  assignPageNo(pageNo) {
    console.log(pageNo);
    this.pageNo = pageNo;
    this.getFeedbaks();
  }

  assignRecordsPerPage(recordsPerPage) {
    console.log(recordsPerPage);
    this.perpage = recordsPerPage;
    this.getFeedbaks();
  }
  approve(i) {
    Swal.fire({
      title: 'Are you sure you want Approve this Request!',
      // text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        const data = { id: i, status: 'approved' }
        this.fusAdminService.approveFeedback(data).subscribe(res => {
          console.log(res);
          this.getFeedbaks();
        })
      }
    })
  }
  forceAccept(i){
    Swal.fire({
      title: 'Are you sure you want Approve this Rejected feedback!',
      // text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        const data = { id: i, status: 'approved' }
        this.fusAdminService.approveFeedback(data).subscribe(res => {
          console.log(res);
          this.getFeedbaks();
        })
      }
    })
  }
  reject(i) {
    Swal.fire({
      title: 'Are you sure you want Approve this Request!',
      // text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        const data = { id: i, status: 'rejected' }
        this.fusAdminService.approveFeedback(data).subscribe(res => {
          console.log(res);
          this.getFeedbaks();
        })
      }
    })
  }

}
