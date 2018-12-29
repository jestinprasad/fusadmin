import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListComponent } from './brand-list/brand-list.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '', component: BrandListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BrandRoutingModule { }
