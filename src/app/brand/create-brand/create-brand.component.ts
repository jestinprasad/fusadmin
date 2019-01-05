import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnInit {
  isSchedule = false;
  exactAddress = 'google';
  constructor() { }

  ngOnInit() {
  }
  checkSchedule() {
    this.isSchedule = !this.isSchedule;
  }
  autoCompleteCallback1(data) {
    console.log(data);
  }
}
