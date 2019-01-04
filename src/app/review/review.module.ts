import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewListComponent } from './review-list/review-list.component';
import { SharedModule } from '../shared/shared.module';
import { ReviewRoutingModule } from './review-routing.module';

@NgModule({
  declarations: [ReviewListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReviewRoutingModule
  ]
})
export class ReviewModule { }
