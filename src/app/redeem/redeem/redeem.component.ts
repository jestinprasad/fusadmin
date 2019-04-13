import { Component, OnInit } from '@angular/core';
import { FusadminService } from 'src/app/fusadmin.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.component.html',
  styleUrls: ['./redeem.component.css']
})
export class RedeemComponent implements OnInit {
  length;
  requestList = [];
  status = 'pending';
  pageNo = 1;
  perpage = 10;
  constructor(
    private fusAdminService : FusadminService
  ) { }

  ngOnInit() {
    this.getRequests();
  }
  setStatus() {
    this.pageNo = 1;
    this.perpage = 10;
    this.getRequests();
  }
  inStock(i) {
    Swal.fire({
      title: 'Are you sure you want Approve this Request!',
      // text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        const data = { id: i, status: 'inStack' }
        this.fusAdminService.setStockStatus(data).subscribe(res => {
          console.log(res);
          this.getRequests();
        })
      }
    })
  }
  outOfStock(i) {
    Swal.fire({
      title: 'Are you sure you want Approve this Request!',
      // text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        const data = { id: i, status: 'outStack' }
        this.fusAdminService.setStockStatus(data).subscribe(res => {
          console.log(res);
          this.getRequests();
        })
      }
    })
  }
  getRequests() {
    this.fusAdminService.getRequests(this.status, this.pageNo, this.perpage).subscribe((data: any) => {
      this.requestList = data.data.customerRequests;
      console.log(data)
      this.length = data.data.count;
      console.log(data);
    }, err => {
      this.requestList = [];
      this.length = 0;
    });
  }
  selectedTab(data) {
    console.log(data['index']);
    if (data['index'] === 0) {
      this.status = 'pending';
      this.setStatus()
    } else if (data['index'] === 1) {
      this.status = 'inStock';
      this.setStatus()
    } else if (data['index'] === 2) {
      this.status = 'outOfStock';
      this.setStatus()
    }

  }
  assignPageNo(pageNo) {
    console.log(pageNo);
    this.pageNo = pageNo;
    this.getRequests();
  }

  assignRecordsPerPage(recordsPerPage) {
    console.log(recordsPerPage);
    this.perpage = recordsPerPage;
    this.getRequests();
  }
}
