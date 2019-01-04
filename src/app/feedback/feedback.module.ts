import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { SharedModule } from '../shared/shared.module';
import { FeedbackRoutingModule } from './feedback-routing.module';
@NgModule({
  declarations: [FeedbackListComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeedbackRoutingModule
  ]
})
export class FeedbackModule { }
