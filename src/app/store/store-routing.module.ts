import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { CreateStoreComponent } from './create-store/create-store.component';



const routes: Routes = [{
  path: '', component: StoreListComponent},
  {
    path: 'create', component: CreateStoreComponent
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StoreRoutingModule { }
