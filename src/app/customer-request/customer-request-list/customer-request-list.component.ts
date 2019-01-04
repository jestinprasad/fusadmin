import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-request-list',
  templateUrl: './customer-request-list.component.html',
  styleUrls: ['./customer-request-list.component.css']
})
export class CustomerRequestListComponent implements OnInit {

  status;

  constructor() { }

  ngOnInit() {
    
      }

      pending(data){
        this.status = 'pending';
        console.log("pending");
      }
      inStock(){
        this.status = 'instock';
        console.log("instock");
      }
      outOfStock(){
        this.status = 'outofstock';
        console.log("outofstock");
      }

}
