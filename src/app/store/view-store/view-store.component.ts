import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FusadminService } from '../../fusadmin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-store',
  templateUrl: './view-store.component.html',
  styleUrls: ['./view-store.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewStoreComponent implements OnInit {
  brands= [];
  storeData: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fusadminService: FusadminService,
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
      // this.brands = res.data;
      this.brands = [
        {

displayName : "Be:yond balu",
select : true,
storeBillingTypeId:1,
_id:6
        }
  ,
  {
    displayName : "Be:yond balu",
    select : true,
    storeBillingTypeId:1,
    _id:6
            }
          ]
    })
  }

  showLog(){
    console.log('hgghfgh');
    
  }
  
}
