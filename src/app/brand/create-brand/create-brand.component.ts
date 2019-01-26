import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnInit {
  isSchedule = false;
  exactAddress = 'google';
  brandForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createBrandForm();
  }

  ngOnInit() {
  }
  createBrandForm() {
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
