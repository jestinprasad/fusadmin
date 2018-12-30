import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';


const routes: Routes = [{
  path: '', component: VendorListComponent
}, {
  path: 'create', component: CreateVendorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class VendorRoutingModule { }
