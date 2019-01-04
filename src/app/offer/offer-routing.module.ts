import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersListComponent } from './offers-list/offers-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateOfferComponent } from './create-offer/create-offer.component';

const routes: Routes = [{
  path: '', component: OffersListComponent
}, {
  path: 'create', component: CreateOfferComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OfferRoutingModule { }
