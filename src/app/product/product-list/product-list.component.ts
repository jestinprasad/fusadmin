import { Component, OnInit } from '@angular/core';
import { FusadminService } from 'src/app/fusadmin.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  length;
  productList = [];
  pageNo = 1;
  perpage = 10;
  constructor(
    private fusAdminService: FusadminService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.fusAdminService.getProducts(this.pageNo, this.perpage).subscribe((data: any) => {
      this.productList = data.data.products;
      this.length = data.data.count;
      console.log(data);
    });
  }

  assignPageNo(pageNo) {
    console.log(pageNo);
    this.pageNo = pageNo;
    this.getProducts();
  }

  assignRecordsPerPage(recordsPerPage) {
    console.log(recordsPerPage);
    this.perpage = recordsPerPage;
    this.getProducts();
  }
}
