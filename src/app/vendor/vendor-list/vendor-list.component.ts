import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  length = 50;
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

  assignPageNo(pageNo) {
    console.log(pageNo);
  }

  assignRecordsPerPage(recordsPerPage) {
    console.log(recordsPerPage);
  }

}
