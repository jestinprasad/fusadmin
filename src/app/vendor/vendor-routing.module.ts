import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: '', component: VendorListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class VendorRoutingModule { }
