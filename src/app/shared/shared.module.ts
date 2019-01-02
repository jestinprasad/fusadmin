import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule,
   MatButtonModule,
    MatSidenavModule,
     MatIconModule,
      MatInputModule,
       MatListModule,
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatRadioModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from '../common/pagination/pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [
    PaginationComponent,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class SharedModule { }
