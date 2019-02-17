import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreRoutingModule } from './store-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateStoreComponent } from './create-store/create-store.component';
import { EditStoreComponent } from './edit-store/edit-store.component';
import { ViewStoreComponent } from './view-store/view-store.component';

@NgModule({
  declarations: [StoreListComponent, CreateStoreComponent, EditStoreComponent, ViewStoreComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule]
})
export class StoreModule { }
