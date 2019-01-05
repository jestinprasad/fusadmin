import { Component, OnInit } from '@angular/core';
import { FusadminService } from 'src/app/fusadmin.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  length;
  vendorList = [];
  pageNo =  1 ;
  perpage = 10;
  constructor(
    private fusAdminService: FusadminService,
  ) { }

  ngOnInit() {
    this.getVendors();
  }
  getVendors() {
    this.fusAdminService.getVendors(this.pageNo, this.perpage).subscribe((data: any) => {
      this.vendorList = data.data.vendors;
      this.length = data.data.count;
      console.log(data);
    });
  }
  assignPageNo(pageNo) {
    console.log(pageNo);
    this.pageNo = pageNo;
    this.getVendors();
  }

  assignRecordsPerPage(recordsPerPage) {
    console.log(recordsPerPage);
    this.perpage = recordsPerPage;
    this.getVendors();
  }

}
