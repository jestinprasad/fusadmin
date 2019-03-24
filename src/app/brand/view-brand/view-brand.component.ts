import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { FusadminService } from '../../fusadmin.service';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-view-brand',
  templateUrl: './view-brand.component.html',
  styleUrls: ['./view-brand.component.css']
})
export class ViewBrandComponent implements OnInit {

  brandCards: any;
  uploads: any;
  brandImage: any;
  uploadedImages: any;
  uploadedLogo: any;
  brandLogos: any;
  finalCategorie: FormControl;
  brandData: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private fusadminService:FusadminService,
    private commonService: CommonService
  ) { 
    if (this.activatedRoute.snapshot.params.id) {
      console.log('params',this.activatedRoute.snapshot.params.id);
      this.fusadminService.getBrand(this.activatedRoute.snapshot.params.id).subscribe(res=>{
        this.brandData = res.data;
        console.log(res.data, this.brandData);
      })      
    }
  }
  getAttributes(){
    console.log('log',this.finalCategorie)
  }

  ngOnInit() {
    this.finalCategorie.valueChanges.subscribe(res=>{
      console.log(res);
    })
  }

  brandCard(event){
    console.log(event.target.files);
  const data = this.commonService.newFormData(event.target.files);
  console.log(data);
  this.brandCards = data;
  
 }

 brandLogo(event){
   console.log(event.target.files);
 const data = this.commonService.newFormData(event.target.files);
 console.log(data);
 this.brandLogos = data;
 
}

brandImages(event){
 console.log(event.target.files);
const data = this.commonService.newFormData(event.target.files);
console.log(data);
this.brandImage = data;

}

 uploadBrandCard(){
   const data = {
     storeId:this.activatedRoute.snapshot.params.id,
     brandCard:this.brandCards
   }
   this.fusadminService.uploadBrandCardImage(data)
   .subscribe((response)=>{
     console.log(response);
     this.uploads = response.successUploads;
   })
 }

 uploadBrandImages(){
   const data = {
     storeId:this.activatedRoute.snapshot.params.id,
     brandCard:this.brandImage
   }
   this.fusadminService.uploadBrandCardImages(data)
   .subscribe((response)=>{
     console.log(response);
     this.uploadedImages = response.successUploads;
   })
 }

 uploadBrandLogo(){
   const data = {
     storeId:this.activatedRoute.snapshot.params.id,
     brandCard:this.brandLogos
   }
   this.fusadminService.uploadBrandCardLogo(data)
   .subscribe((response)=>{
     console.log(response);
     this.uploadedLogo = response.successUploads;
   })
 }
}
