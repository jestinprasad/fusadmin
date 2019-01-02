import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnInit {
<<<<<<< HEAD

=======
  isSchedule = false;
  exactAddress = 'google';
>>>>>>> 21930a59a851cb13c5910b47047890ed960f4ef4
  constructor() { }

  ngOnInit() {
  }
<<<<<<< HEAD

=======
  checkSchedule() {
    this.isSchedule = !this.isSchedule;
  }
>>>>>>> 21930a59a851cb13c5910b47047890ed960f4ef4
}
