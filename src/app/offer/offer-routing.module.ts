import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersListComponent } from './offers-list/offers-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '', component: OffersListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OfferRoutingModule { }
