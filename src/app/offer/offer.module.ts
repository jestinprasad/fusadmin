import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OfferRoutingModule } from './offer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateOfferComponent } from './create-offer/create-offer.component';

@NgModule({
  declarations: [OffersListComponent, CreateOfferComponent],
  imports: [
    CommonModule,
    SharedModule,
    OfferRoutingModule
  ]
})
export class OfferModule { }
