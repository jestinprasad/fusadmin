import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FusadminService } from '../../fusadmin.service';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.css']
})
export class CreateVendorComponent implements OnInit {
  num: any;
  numbers = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private fusAdminService: FusadminService,
    private commonService: CommonService
    
  ) {}

  ngOnInit() {
  }

  vendorForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    gender: ['', Validators.required],
    categories: ['', Validators.required],
    brands: ["",Validators.required]
  })

  onSubmit(){
    console.log(this.vendorForm.value);

    this.fusAdminService.createVendor(this.vendorForm.value)
    .subscribe(data => {
      console.log("vendor created", data);
    })
  }



  // addBrands(brands) {

  //   // this.commonService.getBrands()
  //   // .subscribe(data =>{
  //   //    console.log(data);
  //   //   })
  //   this.num = this.numbers.length > 0 ? this.numbers.length : 0;
  //   this.numbers.push(this.num);
  // }
  removeBrand(index) {
    this.vendorForm.get('brands').value.splice(index, 1);
    console.log(this.vendorForm.get('brands'))
  }
}
