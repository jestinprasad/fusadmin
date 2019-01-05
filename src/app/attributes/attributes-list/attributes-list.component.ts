import { Component, OnInit } from '@angular/core';
import { FusadminService } from 'src/app/fusadmin.service';

@Component({
  selector: 'app-attributes-list',
  templateUrl: './attributes-list.component.html',
  styleUrls: ['./attributes-list.component.css']
})
export class AttributesListComponent implements OnInit {

  length;
  attributeList = [];
  pageNo = 1;
  perpage = 10;
  constructor(
    private fusAdminService: FusadminService
  ) { }

  ngOnInit() {
    this.getAttributes();
  }
  getAttributes() {
    this.fusAdminService.getAttributes(this.pageNo, this.perpage).subscribe((data: any) => {
      this.attributeList = data.data.attributes;
      this.length = data.data.count;
      console.log(data);
    });
  }

  assignPageNo(pageNo) {
    console.log(pageNo);
    this.pageNo = pageNo;
    this.getAttributes();
  }

  assignRecordsPerPage(recordsPerPage) {
    console.log(recordsPerPage);
    this.perpage = recordsPerPage;
    this.getAttributes();
  }

}
