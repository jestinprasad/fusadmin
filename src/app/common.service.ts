import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private api: ApiService
  ) { }
adminLogin(value){
  const route = 'common/adminLogin';
  return this.api.post(environment.apiURL + route, value)
}
  getBrands(id?) {
    const url = environment.apiURL + 'brands';
    return this.api.get(url);
  }
  getCategories() {
    const url = environment.apiURL + 'foundation/category';
    return this.api.get(url);
  }
  getCatagoriesbyId(data) {
    const url = environment.apiURL + `vendors/relatedLists?vendorId=${data}`
    return this.api.get(url)
  }
  getCities(){
    const url = environment.apiURL + `foundation/cities?stateId=1`;
    return this.api.get(url)
  }
  getVendors() {
    const url = environment.apiURL + 'vendors';
    return this.api.get(url);
  }
  getStates() {
    const url = environment.apiURL + 'foundation/states?countryId=1';
    return this.api.get(url);
  }
}
