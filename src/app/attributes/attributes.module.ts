import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributesListComponent } from './attributes-list/attributes-list.component';
import { AttributesRoutingModule } from './attributes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AttributesListComponent],
  imports: [
    CommonModule,
    AttributesRoutingModule,
    SharedModule]
})
export class AttributesModule { }
