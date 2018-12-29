import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorRoutingModule } from './vendor-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [VendorListComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    SharedModule
  ]
})
export class VendorModule { }
