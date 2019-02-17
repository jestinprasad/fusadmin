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

  createStore(value) {
    const route = 'stores';
    return this.api.post(environment.apiURL + route, value);
  }
  createAttribute(value){
    const route = 'attributes';
    return this.api.post(environment.apiURL + route, value)
  }
  updateVendor(value, id) {
    const route = `vendors/${id}`;
    return this.api.put(environment.apiURL + route, value);
  }
  getSingleVendor(id) {
    const route = `vendors?vendorId=${id}`;
    return this.api.get(environment.apiURL + route);
  }
  getSingleStore(id) {
    const route = `stores?storeId=${id}`;
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
  getBrand(id) {
    const route = `brands?brandId=${id}`;
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
  getReviews(status,pageno = 1, perpage = 10) {
    const route = `reviewlist/${status}?minData=true&page=${pageno}&pageSize=${perpage}`;
    return this.api.get(environment.apiURL + route);
  }
  getFeedbaks(status,pageno = 1, perpage = 10) {
    const route = `feedbackList/${status}?minData=true&page=${pageno}&pageSize=${perpage}`;
    return this.api.get(environment.apiURL + route);
  }
  getRequests(status,pageno = 1, perpage = 10) {
    const route = `customerRequestList/${status}?minData=true&page=${pageno}&pageSize=${perpage}`;
    return this.api.get(environment.apiURL + route);
  }
  setStockStatus(data){
    const route = `customerRequestStatus/${data.id}`;
    return this.api.put(environment.apiURL + route, data.status);
  }
  approveFeedback(data){
    const route = `feedbackStatus/${data.id}`;
    return this.api.put(environment.apiURL + route, data.status);
  }
  approveReview(data){
    const route = `reviewStatus/${data.id}`;
    return this.api.put(environment.apiURL + route, data.status);
  }
  createBrand(value){
      const route = 'brands';
      return this.api.post(environment.apiURL + route, value)
  }
  UpdateBrand(id, value) {
    const route = `brands/${id}`;
    return this.api.put(environment.apiURL + route, value);
  }
  getBrandsByVendorForStore(data){
    const route = `brands?vendor=${data.vendorId}&markStore=${data.storeId}`;
    return this.api.get(environment.apiURL + route);
  }
}
