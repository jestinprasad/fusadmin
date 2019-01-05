import { Component, OnInit } from '@angular/core';
import { FusadminService } from 'src/app/fusadmin.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  length;
  storeList = [];
  pageNo = 1;
  perpage = 10;
  constructor(
    private fusAdminService: FusadminService
  ) { }

  ngOnInit() {
    this.getStores();
  }
  getStores() {
    this.fusAdminService.getStores(this.pageNo, this.perpage).subscribe((data: any) => {
      this.storeList = data.data.stores;
      this.length = data.data.count;
      console.log(data);
    });
  }

  assignPageNo(pageNo) {
    console.log(pageNo);
    this.pageNo = pageNo;
    this.getStores();
  }

  assignRecordsPerPage(recordsPerPage) {
    console.log(recordsPerPage);
    this.perpage = recordsPerPage;
    this.getStores();
  }
}
