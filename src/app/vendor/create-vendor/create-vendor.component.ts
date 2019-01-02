import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.css']
})
export class CreateVendorComponent implements OnInit {
  num: any;
  numbers = [];

  constructor() { }

  ngOnInit() {
  }
  addBrands() {
    this.num = this.numbers.length > 0 ? this.numbers.length : 0;
    this.numbers.push(this.num);
  }
  removeBrand(index) {
    this.numbers.splice(index, 1);
  }
}
