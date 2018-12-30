import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
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
