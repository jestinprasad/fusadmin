import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';
import { FusadminService } from '../../fusadmin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {

  storeForm: FormGroup;
  vendors= [];
  states= [];  
  cities= [];
  localities= [];
  categories= [];
  facilities= [];
  country= [{'id' : 1, name: "India"}];
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private fusadmin: FusadminService,
    private router:Router
  ) {
    this.createForm();
    // this.country = ;
   }

  ngOnInit() {
    this.commonService.getVendors()
    .subscribe((data: any) => {
      this.vendors= data.data;
      console.log(data);
    })
    this.commonService.getStates()
    .subscribe((data: any) => {
      this.states= data.data;
      console.log(data);
    })
    this.commonService.getCities()
    .subscribe((data: any) => {
      this.cities= data.data;
      this.localities= this.cities[0].localities;
      console.log(this.localities);
    })

    this.getCities;
    
  }

  autoCompleteCallback1(data){
    console.log(data);
    this.storeForm.get('headOfficeOrbillingAddress').get('googleAddressString').patchValue(data.data.formatted_address);
    this.storeForm.get('headOfficeOrbillingAddress').get('placeId').patchValue(data.data.place_id);
    this.storeForm.get('headOfficeOrbillingAddress').get('latitude').patchValue(data.data.geometry.location.lat);
    this.storeForm.get('headOfficeOrbillingAddress').get('longitude').patchValue(data.data.geometry.location.lng);
  }

createForm(){
  this.storeForm = this.fb.group(
    {
      storeTypeId: [null, [Validators.required]],
      // ownership: [null, [Validators.required]],
      displayName: ["", [Validators.required]],
      facilities: [[], [Validators.required]],
      storePerson: this.fb.group({
          name: ["", [Validators.required]],
          gender: ["", [Validators.required]],
          email: ["", [Validators.required]],
          phone: ["", [Validators.required]]
      }),
      headOfficeOrbillingAddress:this.fb.group( {
          addressString: ["", [Validators.required]],
          cityId: [null, [Validators.required]],
          stateId: [null, [Validators.required]],
          countryId: [null, [Validators.required]],
          googleAddressString: ["", [Validators.required]],
          latitude: [null, [Validators.required]],
          longitude: [null, [Validators.required]],
          placeId: ["", [Validators.required]],
          locality: ["", [Validators.required]],
          zipCode: ["", [Validators.required]]
      }),
      vendor: [null, [Validators.required]],
      categoryId: [[], [Validators.required]],
      gstin: ["", [Validators.required]]
    }
    
  ) 

  // this.storeForm.get('stateId').valueChanges.subscribe((resp)=>{
  //   console.log(resp);
  //   this.commonService.getCitiesbyId(resp).subscribe((response)=>{
  //     console.log(response);
  //           this.categories = response.data.categories;
  //           this.facilities = response.data.facilities;
            
  //     })
  // })

  this.storeForm.get('vendor').valueChanges.subscribe((res)=>{
console.log(res)
this.commonService.getCatagoriesbyId(res).subscribe((response)=>{
console.log(response);
      this.categories = response.data.categories;
      this.facilities = response.data.facilities;
      
})
  })
  // this.storeForm.get('stateId').valueChanges.subscribe((resp)=>{
  //   console.log(resp);
  // })
}
getCities(){
  
}
// getCategories(){
//   console.log('dddd', this.storeForm.value.vendor)
// }

onSubmit(){
  console.log(this.storeForm.value);
this.fusadmin.createStore(this.storeForm.value).subscribe(res=>{
  console.log(res);
  this.router.navigate(['../store'])
})
}


}
