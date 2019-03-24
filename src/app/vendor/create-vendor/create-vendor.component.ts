import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FusadminService } from '../../fusadmin.service';
import { CommonService } from '../../common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.css']
})
export class CreateVendorComponent implements OnInit {
  submitted = false;
  num: any;
  numbers = [];
  brands = [];
  vendorForm: FormGroup;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  categories = [];
  vendorDetails: any;
  form: string;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private fusAdminService: FusadminService,
    private commonService: CommonService,
    private router: ActivatedRoute,
    private route: Router
  ) {
    console.log('id', this.router.snapshot.params.id);
    const id = this.router.snapshot.params.id;
    this.createForm();
    if (id) {
      this.form = 'Update';
      this.fusAdminService.getSingleVendor(id).subscribe((result: any) => {
        console.log(result);
        this.vendorDetails = result.data;
        this.createForm(this.vendorDetails);
      });
    } else {
      this.form = 'Create';
      this.createForm();
    }
  }

  ngOnInit() {
    this.commonService.getBrands()
      .subscribe((data: any) => {
        this.brands = data.data;
        console.log(data);
      });
    this.commonService.getCategories().subscribe((data: any) => {
      this.categories = data.data;
      console.log(data);
    });
  }
  createForm(data?) {
    this.vendorForm = this.fb.group({
      name: [data ? data.name : '', Validators.required],
      email: [data ? data.email : '', Validators.required],
      phone: [data ? data.phone : '', Validators.required],
      gender: [data ? data.gender : '', Validators.required],
      categories: [data ? data.categories : '', Validators.required],
      brands: [data ? data.brands : '', Validators.required]
    });
  }
  get f() { return this.vendorForm.controls; }
  


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.vendorForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)')
    console.log(this.vendorForm.value);
    if (this.form === 'Create') {
      this.fusAdminService.createVendor(this.vendorForm.value)
        .subscribe(data => {
          console.log('vendor created', data);
          this.route.navigate(['./..'], {relativeTo: this.router});
        });
    } else {
      this.fusAdminService.updateVendor(this.vendorForm.value, this.router.snapshot.params.id)
      .subscribe(data => {
        console.log('vendor Updated', data);
        this.route.navigate(['./../..'], {relativeTo: this.router});
      });
    }

  }



  // addBrands(brands) {
  //   this.num = this.numbers.length > 0 ? this.numbers.length : 0;
  //   this.numbers.push(this.num);
  // }
  removeBrand(index) {
    this.vendorForm.get('brands').value.splice(index, 1);
    console.log(this.vendorForm.get('brands'));
  }
}
