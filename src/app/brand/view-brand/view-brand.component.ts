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

}
