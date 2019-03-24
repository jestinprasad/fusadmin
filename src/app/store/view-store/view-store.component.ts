import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FusadminService } from '../../fusadmin.service';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-view-store',
  templateUrl: './view-store.component.html',
  styleUrls: ['./view-store.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewStoreComponent implements OnInit {
  uploadedLogo = [];
  uploadedImages = [];
  brandImage: FormData;
  uploads = [];
  brands= [];
  storeData: any;
  brandCards;
  brandLogos;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fusadminService: FusadminService,
    private commonService: CommonService,
  ) { }

  ngOnInit() {
    this.fusadminService.getSingleStore(this.activatedRoute.snapshot.params.id).subscribe((res) => {
      console.log(res);
      this.storeData = res.data;
    });
  }
  getBrandsByVendorForStore() {
    const data = {
      storeId:this.activatedRoute.snapshot.params.id,
      vendorId:this.storeData.vendor._id
    }
    this.fusadminService.getBrandsByVendorForStore(data).subscribe(res => {
      console.log(res.data);
      this.brands = res.data;
//       this.brands = [
//         {

// displayName : "Be:yond balu",
// select : true,
// storeBillingTypeId:1,
// _id:6
//         }
//   ,
//   {
//     displayName : "Be:yond balu",
//     select : true,
//     storeBillingTypeId:1,
//     _id:6
//             }
//           ]
    })
  }
  checkSchedule(){
    console.log('vh');
    
  }
  showLog(){
    console.log('hgghfgh');
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
    this.fusadminService.uploadCardImage(data)
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
    this.fusadminService.uploadCardImages(data)
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
    this.fusadminService.uploadCardLogo(data)
    .subscribe((response)=>{
      console.log(response);
      this.uploadedLogo = response.successUploads;
    })
  }
  
}
