import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { EditStoreComponent } from './edit-store/edit-store.component';
import { ViewStoreComponent } from './view-store/view-store.component';



const routes: Routes = [
  {
  path: '', component: StoreListComponent
  },
  {
    path: 'create', component: CreateStoreComponent
  },
  {
    path: 'edit/:id', component: EditStoreComponent
  },
  {
    path: 'view/:id', component: ViewStoreComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StoreRoutingModule { }
