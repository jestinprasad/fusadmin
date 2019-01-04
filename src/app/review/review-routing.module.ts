import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { ReviewListComponent} from './review-list/review-list.component';

const routes: Routes= [{
  path:'', component:ReviewListComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ReviewRoutingModule { }
