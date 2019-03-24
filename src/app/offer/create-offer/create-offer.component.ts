import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FusadminService } from '../../fusadmin.service';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})

export class CreateOfferComponent implements OnInit {
  categories;
  offerForm: FormGroup;
  isSingleStore = false;
  isSingleBrand = false;
  isMultipleStore = false;
  isMultipleBrand = false;
  constructor(
    private fb: FormBuilder,
    private fusAdminService: FusadminService,
    private commonServeice: CommonService
  ) { 
    this.createOfferForm();
  }

  ngOnInit() {
    this.commonServeice.getCategories()
    .subscribe((data:any)=>{
      console.log(data.data);
      this.categories = data.data;
    })
  }
  createOfferForm(){
    this.offerForm = this.fb.group({
      categoryId:["",[Validators.required]],
      storeIds:[[],[Validators.required]],
      brandIds:[[],[Validators.required]],
      finalCategoryIds:[[],[Validators.required]],
      groups:[[],[Validators.required]],
      offerTitle:["",[Validators.required]],
      offer_Valididty: this.fb.group({
        fromTime: ["", [Validators.required]],
        toTime: ["", [Validators.required]]
      }),
      offerDesc:["",[Validators.required]],
      termsAndConditions:["",[Validators.required]]      
    })
  }

  singleStoreMultipleBrand(){
    this.isSingleStore = true;
    this.isMultipleStore = false;
    this.isSingleBrand = false;
    this.isMultipleBrand = true;
  }
  singleBrandMultipleStore(){
    this.isSingleStore = false;
    this.isMultipleStore = true;
    this.isSingleBrand = true;
    this.isMultipleBrand = false;
    
  }

}
