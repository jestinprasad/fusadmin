import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-bulkupload',
  templateUrl: './bulkupload.component.html',
  styleUrls: ['./bulkupload.component.css']
})
export class BulkuploadComponent implements OnInit {
  catId: any;
  categoryId: any;
  brandId:any;
  categories = [];
  brands = [];
  constructor(
    private commonService: CommonService    
  ) { }

  ngOnInit() {
    this.commonService.getCategories()
    .subscribe((data:any)=>{
      this.categories = data.data;
      console.log(this.categories);
    })
  }
  getBrands(){
    console.log(this.categoryId);
    this.brandId = null;
    this.brands=[];
    this.commonService.getBrandsById(this.categoryId).subscribe((response)=>{
      console.log(response.data);
      this.brands = response.data;
})
  }


get downloadLink() {
    const url = environment.apiURL + `bulkProduct/getTemplate/${this.categoryId}/${this.brandId}`;
    return url;    
}
getStores(){
    console.log(this.catId);
}
  
}
