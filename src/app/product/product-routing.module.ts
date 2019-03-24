import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { BulkuploadComponent } from './bulkupload/bulkupload.component';



const routes: Routes = [{
  path: '', component: ProductListComponent
},
{
  path: 'create', component: CreateProductComponent
},
{
  path: 'bulkUpload', component: BulkuploadComponent
}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProductRoutingModule { }
