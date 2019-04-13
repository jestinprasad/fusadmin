import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RedeemRoutingModule } from './redeem-routing.module';
import { RedeemComponent } from './redeem/redeem.component';

@NgModule({
  declarations: [RedeemComponent],
  imports: [
    CommonModule,
    SharedModule,
    RedeemRoutingModule
  ]
})
export class RedeemModule { }
