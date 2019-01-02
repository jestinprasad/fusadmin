import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributesListComponent } from './attributes-list/attributes-list.component';
import { AttributesRoutingModule } from './attributes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateAttributeComponent } from './create-attribute/create-attribute.component';

@NgModule({
  declarations: [AttributesListComponent, CreateAttributeComponent],
  imports: [
    CommonModule,
    AttributesRoutingModule,
    SharedModule]
})
export class AttributesModule { }
