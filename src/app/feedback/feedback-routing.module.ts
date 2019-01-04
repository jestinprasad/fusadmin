import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { FeedbackListComponent} from './feedback-list/feedback-list.component';
const routes: Routes = [{
  path:'', component: FeedbackListComponent
}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FeedbackRoutingModule { }
