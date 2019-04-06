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
  storeValues;
  brandValues;
  selectedId;
  groupOneValues;
  finalCategories;
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
      this.categories = data.data;
    })
    this.fusAdminService
  }
  createOfferForm(){
    this.offerForm = this.fb.group({
      categoryId:["",[Validators.required]],
      storeIds:[[]],
      brandIds:[[],[Validators.required]],
      finalCategoryIds:[[]],
      groups:[[]],
      offerTitle:["",[Validators.required]],
      offer_Valididty: this.fb.group({
        fromTime: ["", [Validators.required]],
        toTime: ["", [Validators.required]]
      }),
      offerDesc:["",[Validators.required]],
      termsAndConditions:[""]      
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


  createNewOffer(offerData){
    const { value } = offerData;
    // Object.assign(value)
     console.log(value)
  }

  selectedCategory(selectedValue){
    this.selectedId = selectedValue;
    this.fusAdminService.getStoreDetails(selectedValue)
    .subscribe(data => {
      this.storeValues = data.data;
    },
    error => {
      console.log(error)
    });
    this.fusAdminService.getBrandDetails(selectedValue)
    .subscribe(data => {
      this.brandValues = data.data;
    },
    error => {
      console.log(error)
    })
    this.fusAdminService.getGroupOneData(selectedValue)
    .subscribe(data => {
      this.groupOneValues = data.data;
    },
    error => {
      console.log(error)
    })
  }

  selectedStore(id){
    this.fusAdminService.getBrandDetails(id)
    .subscribe(data => {
      this.brandValues = data.data;
    },
    error => {
      console.log(error)
    })
  }
  
  selectedBrand(id){
    this.fusAdminService.getStoreDetails(id)
    .subscribe(data => {
      this.storeValues = data.data;
    },
    error => {
      console.log(error)
    });

    this.fusAdminService.getCommonFinalCat(id)
    .subscribe(data => {
      this.finalCategories = data;
      console.log(data)
    },
    error => {
      console.log(error)
    });
  }

}
