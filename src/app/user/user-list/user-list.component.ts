import { Component, OnInit } from '@angular/core';
import { FusadminService } from 'src/app/fusadmin.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  length;
  vendorList = [];
  pageNo = 1;
  perpage = 10;

  constructor(
    private fusAdminService: FusadminService

  ) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.fusAdminService.getUsers(this.pageNo, this.perpage).subscribe((data: any) => {
      this.vendorList = data.data.customers;
      this.length = data.data.count;
      console.log(data);
    });
  }

  assignPageNo(pageNo) {
    console.log(pageNo);
    this.pageNo = pageNo;
    this.getUsers();
  }

  assignRecordsPerPage(recordsPerPage) {
    console.log(recordsPerPage);
    this.perpage = recordsPerPage;
    this.getUsers();
  }

}
