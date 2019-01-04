import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRequestListComponent } from './customer-request-list/customer-request-list.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerRequestRoutingModule } from './customer-request-routing.module';

@NgModule({
  declarations: [CustomerRequestListComponent],
  imports: [
    CommonModule,
    CustomerRequestRoutingModule,
    SharedModule
  ]
})
export class CustomerRequestModule { }
