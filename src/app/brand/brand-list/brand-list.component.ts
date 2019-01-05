import { Component, OnInit } from '@angular/core';
import { FusadminService } from 'src/app/fusadmin.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  length;
  brandList = [];
  pageNo = 1;
  perpage = 10;
  constructor(
    private fusAdminService: FusadminService
  ) { }

  ngOnInit() {
    this.getBrands();
  }
  getBrands() {
    this.fusAdminService.getBrands(this.pageNo, this.perpage).subscribe((data: any) => {
      this.brandList = data.data.brands;
      this.length = data.data.count;
      console.log(data);
    });
  }

  assignPageNo(pageNo) {
    console.log(pageNo);
    this.pageNo = pageNo;
    this.getBrands();
  }

  assignRecordsPerPage(recordsPerPage) {
    console.log(recordsPerPage);
    this.perpage = recordsPerPage;
    this.getBrands();
  }
}
