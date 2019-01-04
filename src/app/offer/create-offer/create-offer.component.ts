import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})

export class CreateOfferComponent implements OnInit {
  category: any;
  constructor() { }

  ngOnInit() {
  }
  showCategory() {
    console.log(this.category);
  }
}
