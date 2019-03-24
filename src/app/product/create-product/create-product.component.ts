import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FusadminService } from '../../fusadmin.service';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  categories;
  brands;
  finalCategories;
  productForm: FormGroup;

  constructor(
    private fb : FormBuilder,
    private commonService: CommonService
  ) { 
    this.createProductForm();
    }

  ngOnInit() {
    this.commonService.getCategories()
    .subscribe((data:any)=>{
      this.categories = data.data;
      console.log(this.categories);
    })
  }
  createProductForm(){
    this.productForm = this.fb.group({
      storeIds: [[],Validators.required],
      categoryId: ["",Validators.required],
      brandId: ["",Validators.required],
      finalCategoryId: ["",Validators.required],
      prioGroups : this.fb.array([]),
      attributes: this.fb.group({
        attributeId: ["", Validators.required],
        values: this.fb.group({
          name: ["", Validators.required]
        })
      }),
      productName: ["", Validators.required],
      productDesc: ["", Validators.required],
      productMrp: ["", Validators.required],
      upcNum: ["", Validators.required],
      keywordsString: ["", Validators.required]
    })

    this.productForm.get("categoryId").valueChanges.subscribe((res)=>{
      console.log(res);
      this.commonService.getBrandsById(res).subscribe((response)=>{
        console.log(response.data);
        this.brands = response.data;
      })
    })
    this.productForm.get("brandId").valueChanges.subscribe((response)=>{
      console.log(response);
      this.commonService.getFinalCatagoriesbyId(response).subscribe((res)=>{
        console.log(res.data);
        this.finalCategories = res.data;
      })
    })

  }
  priarityGroup(data):FormGroup{
    return this.fb.group({
      groupPriority: [data.groupPriority, Validators.required],
      groupIds: [[], Validators.required]
    })
  }
  getBrands(){
    console.log(this.productForm.get('categoryId').value);
    }
}
