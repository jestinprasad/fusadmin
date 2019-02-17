import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';
import { FusadminService } from '../../fusadmin.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnInit {
  brandData: any;
  // gooleString: any;
  categories;
  states;
  cities;
  isSchedule = false;
  exactAddress = '1';
  minDate = new Date();
  maxDate = new Date();
  country= [{'id' : 1, name: "India"}];  
  formEnable = false;
  brandForm: FormGroup;
  update= false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private fusadminService:FusadminService,
    private commonService: CommonService
  ) {
    if (this.activatedRoute.snapshot.params.id) {
      this.update = true;
      console.log('params',this.activatedRoute.snapshot.params.id);
      this.fusadminService.getBrand(this.activatedRoute.snapshot.params.id).subscribe(res=>{
        this.brandData = res.data;
        console.log(res.data, this.brandData);
        this.createBrandForm(this.brandData);        
      })      
    }else{
      this.createBrandForm();
    }
  }

  ngOnInit() {
    this.commonService.getCategories()
    .subscribe((data: any) => {
      this.categories= data.data;
      console.log(this.categories);
    })
    this.commonService.getStates()
    .subscribe((data: any) => {
      this.states= data.data;
      console.log(data);
    })
    this.commonService.getCities()
    .subscribe((data: any) => {
      this.cities= data.data;
    })
  }
  createBrandForm(data?) {
    this.brandForm = this.fb.group({
      displayName: [data.displayName?data.displayName:'', [Validators.required]],
      webUrl: [data.webUrl?data.webUrl:'', Validators.required],
      categories: [data.categories? data.categories:[], Validators.required],
      gstin: [data.gstin?data.gstin:'', [Validators.required]],
      announcements: this.fb.group({
        message: [(data.announcements&&data.announcements.message)?data.announcements.message:''],
        scheduled: [(data.announcements&&data.announcements.scheduled)?data.announcements.scheduled:false, [Validators.required]],
        fromDate: [(data.announcements&&data.announcements.fromDate)?data.announcements.fromDate:'', [Validators.required]],
        toDate: [(data.announcements&&data.announcements.toDate)?data.announcements.toDate:'', [Validators.required]]
            }),
            headOfficeOrbillingAddress:this.fb.group({
              googleAddressType: [(data.headOfficeOrbillingAddress&&data.headOfficeOrbillingAddress.googleAddressType)?data.headOfficeOrbillingAddress.googleAddressType.toString():'1'],
              addressString:[(data.headOfficeOrbillingAddress&&data.headOfficeOrbillingAddress.addressString)?data.headOfficeOrbillingAddress.addressString:''],
              cityId:[(data.headOfficeOrbillingAddress&&data.headOfficeOrbillingAddress.cityId)?data.headOfficeOrbillingAddress.cityId : null],
              stateId:[(data.headOfficeOrbillingAddress&&data.headOfficeOrbillingAddress.stateId)?data.headOfficeOrbillingAddress.stateId : null],
              countryId:[(data.headOfficeOrbillingAddress&&data.headOfficeOrbillingAddress.countryId)?data.headOfficeOrbillingAddress.countryId : null],
              googleAddressString:[(data.headOfficeOrbillingAddress&&data.headOfficeOrbillingAddress.googleAddressString)?data.headOfficeOrbillingAddress.googleAddressString : ''],
              latitude:[(data.headOfficeOrbillingAddress&&data.headOfficeOrbillingAddress.latitude)?data.headOfficeOrbillingAddress.latitude : ''],
              longitude:[(data.headOfficeOrbillingAddress&&data.headOfficeOrbillingAddress.longitude)?data.headOfficeOrbillingAddress.longitude : ''],
              placeId:[(data.headOfficeOrbillingAddress&&data.headOfficeOrbillingAddress.placeId)?data.headOfficeOrbillingAddress.placeId : ''],
              zipCode: [(data.headOfficeOrbillingAddress&&data.headOfficeOrbillingAddress.zipCode)?data.headOfficeOrbillingAddress.zipCode : '', [Validators.required]]
            }),
            description:[data.description?data.description:'']
    })
    this.formEnable = true;    
    this.exactAddress = (data.headOfficeOrbillingAddress&&data.headOfficeOrbillingAddress.googleAddressType)?data.headOfficeOrbillingAddress.googleAddressType.toString():'1';
    if(data.announcements&&data.announcements.toDate){
      this.checkSchedule();
    }
  }

  onSubmit(){
    console.log(this.brandForm.value);
    if(!this.update){
      this.fusadminService.createBrand(this.brandForm.value).subscribe(res=>{
        this.router.navigate(['../brand'])
      })
    }else{
      this.fusadminService.UpdateBrand(this.activatedRoute.snapshot.params.id, this.brandForm.value).subscribe(res=>{
        this.router.navigate(['../../brand']);
      })
    }

  }

  checkSchedule() {
    console.log(this.brandForm.get('announcements').get('scheduled').value);
    this.isSchedule = !this.isSchedule;
  }
  valueChange(){
    this.exactAddress = this.brandForm.get('headOfficeOrbillingAddress').get('googleAddressType').value;
    console.log(this.brandForm.get('headOfficeOrbillingAddress').get('googleAddressType').value)
  }
  autoCompleteCallback1(data) {
    console.log(data);
    this.brandForm.get('headOfficeOrbillingAddress').get('googleAddressString').setValue(data.data.formatted_address);
    this.brandForm.get('headOfficeOrbillingAddress').get('latitude').setValue(data.data.geometry.location.lat)
    this.brandForm.get('headOfficeOrbillingAddress').get('longitude').setValue(data.data.geometry.location.lng)
  }
}
