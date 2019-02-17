import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';
import { FusadminService } from '../../fusadmin.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-attribute',
  templateUrl: './create-attribute.component.html',
  styleUrls: ['./create-attribute.component.css']
})
export class CreateAttributeComponent implements OnInit {
  attributeValues;
  attributeCategory;
  attributeName;
  attributeDisplayName;
  categories = [];
  values = [];
createAttributeForm:FormGroup;
isDisable = false;
  constructor(
    private commonService: CommonService,
    private fusadminService: FusadminService,
    private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute
  ) {
    this.createForm()
   }

  ngOnInit() {
    this.commonService.getCategories().subscribe((data: any) => {
      this.categories = data.data;
      console.log(data);
    });
  }

  createForm(){
    this.createAttributeForm = this.fb.group({
      name: ['', Validators.required],
      displayName: ['', Validators.required],
      categoryId: [null, Validators.required],
      value: ['', Validators.required]
    })
  }

  delete(i){
    this.values.splice(i,1)
  }
reset(){
  this.isDisable=false;
  this.createAttributeForm.reset();
  this.values = [];
}
  addAttribute(){
    this.attributeCategory = this.createAttributeForm.value.categoryId;
    this.attributeName = this.createAttributeForm.value.name;
    this.attributeDisplayName = this.createAttributeForm.value.displayName;    
    this.isDisable  = true; 
    if(this.createAttributeForm.get('value').value!==''){
      this.values.push(this.createAttributeForm.get('value').value);
      this.createAttributeForm.get('value').setValue('')
  console.log('ddd',this.values);
    }
  }

  onSubmit(){
    console.log("create form",this.attributeCategory,this.attributeName, this.attributeDisplayName );
    console.log("values",this.values);

    this.attributeValues = {
      name: this.attributeName,
      displayName:this.attributeDisplayName,
      categoryId: this.attributeCategory,
      value: [this.values]
     }
     console.log(this.attributeValues);

     this.fusadminService.createAttribute(this.attributeValues)
     .subscribe((data)=>{
       console.log("Attribute Created", data);
      this.route.navigate(['./..'], {relativeTo: this.router});       
     })

  }

  

}
