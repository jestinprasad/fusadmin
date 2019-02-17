import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListComponent } from './brand-list/brand-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { EditBrandComponent } from './edit-brand/edit-brand.component';
import { ViewBrandComponent } from './view-brand/view-brand.component';


const routes: Routes = [{
  path: '', component: BrandListComponent
}, {
  path: 'create', component: CreateBrandComponent
},{
  path: 'edit/:id', component: CreateBrandComponent
},{
  path: 'view/:id', component: ViewBrandComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BrandRoutingModule { }
