import { Component, OnInit } from '@angular/core';
import { FusadminService } from '../../fusadmin.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  length;
  reviewList = [];
  status = 'pending';
  pageNo = 1;
  perpage = 10;
  constructor(
    private fusAdminService: FusadminService
  ) { }

  ngOnInit() {
    this.getReviews();
  }
  setStatus() {
    this.pageNo = 1;
    this.perpage = 10;
    this.getReviews();
  }
  getReviews() {
    this.fusAdminService.getReviews(this.status, this.pageNo, this.perpage).subscribe((data: any) => {
      this.reviewList = data.data.reviews;
      console.log(data)
      this.length = data.data.count;
      console.log(data);
    }, err=>{
      this.reviewList = [];
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
          this.getReviews();
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
          this.getReviews();
        })
      }
    })
  }
  assignPageNo(pageNo) {
    console.log(pageNo);
    this.pageNo = pageNo;
    this.getReviews();
  }

  assignRecordsPerPage(recordsPerPage) {
    console.log(recordsPerPage);
    this.perpage = recordsPerPage;
    this.getReviews();
  }

}
