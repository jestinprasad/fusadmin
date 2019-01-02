import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  isSchedule = false;
  exactAddress = 'google';

  vendorList =  [
    {
      name: 'balu' ,
      email: 'balu@gmail.com',
      phoneNo: 8300187422,
      vendor_id : 61
    },
    {
      name: 'balu' ,
      email: 'balu@gmail.com',
      phoneNo: 8300187422,
      vendor_id : 61
    },
    {
      name: 'balu' ,
      email: 'balu@gmail.com',
      phoneNo: 8300187422,
      vendor_id : 61
    },
    {
      name: 'balu' ,
      email: 'balu@gmail.com',
      phoneNo: 8300187422,
      vendor_id : 61
    },
    {
      name: 'balu' ,
      email: 'balu@gmail.com',
      phoneNo: 8300187422,
      vendor_id : 61
    },
    {
      name: 'balu' ,
      email: 'balu@gmail.com',
      phoneNo: 8300187422,
      vendor_id : 61
    },
    {
      name: 'balu' ,
      email: 'balu@gmail.com',
      phoneNo: 8300187422,
      vendor_id : 61
    },
    {
      name: 'balu' ,
      email: 'balu@gmail.com',
      phoneNo: 8300187422,
      vendor_id : 61
    },
    {
      name: 'balu' ,
      email: 'balu@gmail.com',
      phoneNo: 8300187422,
      vendor_id : 61
    },
    {
      name: 'balu' ,
      email: 'balu@gmail.com',
      phoneNo: 8300187422,
      vendor_id : 61
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  checkSchedule() {
    this.isSchedule = !this.isSchedule;
  }

}
