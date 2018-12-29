import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AttributesListComponent } from './attributes-list/attributes-list.component';




const routes: Routes = [{
  path: '', component: AttributesListComponent}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AttributesRoutingModule { }
