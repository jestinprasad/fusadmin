import { Component, OnInit } from '@angular/core';
import { FusadminService } from 'src/app/fusadmin.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  length;
  offerList = [];
  pageNo = 1;
  perpage = 10;

  constructor(
    private fusAdminService: FusadminService
  ) { }

  ngOnInit() {
    this.getOffers();
  }

  getOffers() {
    this.fusAdminService.getOffers(this.pageNo, this.perpage).subscribe((data: any) => {
      this.offerList = data.data.offers;
      this.length = data.data.count;
      console.log(data);
    });
  }

  assignPageNo(pageNo) {
    console.log(pageNo);
    this.pageNo = pageNo;
    this.getOffers();
  }

  assignRecordsPerPage(recordsPerPage) {
    console.log(recordsPerPage);
    this.perpage = recordsPerPage;
    this.getOffers();
  }

}
