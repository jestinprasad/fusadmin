import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-request-list',
  templateUrl: './customer-request-list.component.html',
  styleUrls: ['./customer-request-list.component.css']
})
export class CustomerRequestListComponent implements OnInit {

  status: any;

  constructor() { }

  ngOnInit() {
    this.status="pending";
  }

  pending(data) {
    this.status = data;
    console.log(this.status);
  }
  inStock(data) {
    this.status = data;
    console.log(this.status);
  }
  outOfStock(data) {
    this.status = data;
  }

}
