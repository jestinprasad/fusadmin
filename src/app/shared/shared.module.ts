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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from '../common/pagination/pagination.component';
import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';

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
    MatRadioModule,
    MatExpansionModule,
    MatTabsModule,
    NgxGeoautocompleteModule.forRoot(),

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
    MatRadioModule,
    MatExpansionModule,
    MatTabsModule,
    NgxGeoautocompleteModule
  ]
})
export class SharedModule { }
