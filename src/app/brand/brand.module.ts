import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandRoutingModule } from './brand-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { EditBrandComponent } from './edit-brand/edit-brand.component';
import { ViewBrandComponent } from './view-brand/view-brand.component';

@NgModule({
  declarations: [BrandListComponent, CreateBrandComponent, EditBrandComponent, ViewBrandComponent],
  imports: [
    CommonModule,
    BrandRoutingModule,
    SharedModule]
})
export class BrandModule { }
