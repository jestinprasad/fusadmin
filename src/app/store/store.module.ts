import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreRoutingModule } from './store-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StoreListComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule]
})
export class StoreModule { }
