import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {
  isSchedule = false;
  exactAddress = 'google';
  brandForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.editBrandForm();
    
  }

  ngOnInit() {
  }

  editBrandForm() {
    this.brandForm = this.fb.group({
      displayName: ['', [Validators.required]],
      webUrl: ['', Validators.required],
      categories: [[], Validators.required],
      gstin: ['', [Validators.required]],
      announcements: this.fb.group({
        message: [''],
        scheduled: [false, [Validators.required]],
        fromDate: ['', [Validators.required]],
        toDate: ['', [Validators.required]]
            }),
            headOfficeOrbillingAddress:this.fb.group({
              addressString:[''],
              cityId:[null],
              stateId:[null],
              countryId:[null],
              googleAddressString:[''],
              latitude:[''],
              longitude:[''],
              placeId:[''],
              zipCode: ['', [Validators.required]]
            }),
            description:['']
    })
  }

  onSubmit(){
    console.log(this.brandForm.value);
  }

  checkSchedule() {
    this.isSchedule = !this.isSchedule;
  }
  autoCompleteCallback1(data) {
    console.log(data);
  }

}
