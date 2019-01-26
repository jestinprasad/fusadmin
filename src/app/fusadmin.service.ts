import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

// const environment.apiURL = 'http://fusadmintest.groeitech.com/';

@Injectable({
  providedIn: 'root'
})
export class FusadminService {

  constructor(
    private api: ApiService
  ) { }

  createVendor(value) {
    const route = 'vendors';
    return this.api.post(environment.apiURL + route, value);
  }
  updateVendor(value, id) {
    const route = `vendors/${id}`;
    return this.api.put(environment.apiURL + route, value);
  }
  getSingleVendor(id) {
    const route = `vendors?vendorId=${id}`;
    return this.api.get(environment.apiURL + route);
  }
  getVendors(pageno = 1, perpage = 10) {
    const route = `vendors/vendorlist?page=${pageno}&pageSize=${perpage}`;
    return this.api.get(environment.apiURL + route);
  }
  getUsers(pageno = 1, perpage = 10) {
    const route = `common/customerList?page=${pageno}&pageSize=${perpage}`;
    return this.api.get(environment.apiURL + route);
  }
  getBrands(pageno = 1, perpage = 10) {
    const route = `brands/brandlist?page=${pageno}&pageSize=${perpage}`;
    return this.api.get(environment.apiURL + route);
  }
  getOffers(pageno = 1, perpage = 10) {
    const route = `offerlist?page=${pageno}&pageSize=${perpage}`;
    return this.api.get(environment.apiURL + route);
  }
  getStores(pageno = 1, perpage = 10) {
    const route = `store/storelist?page=${pageno}&pageSize=${perpage}`;
    return this.api.get(environment.apiURL + route);
  }
  getAttributes(pageno = 1, perpage = 10) {
    const route = `attributes/attributelist?page=${pageno}&pageSize=${perpage}`;
    return this.api.get(environment.apiURL + route);
  }
  getProducts(pageno = 1, perpage = 10) {
    const route = `productlist?page=${pageno}&pageSize=${perpage}`;
    return this.api.get(environment.apiURL + route);
  }

}
