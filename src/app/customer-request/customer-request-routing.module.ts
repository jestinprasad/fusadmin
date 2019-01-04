import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerRequestListComponent } from './customer-request-list/customer-request-list.component';

const routes: Routes= [{
  path:'', component:CustomerRequestListComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CustomerRequestRoutingModule { }
