import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiURL = 'http://fusadmintest.groeitech.com/';

@Injectable({
  providedIn: 'root'
})
export class FusadminService {

  constructor(
    private http: HttpClient
  ) { }

  createVendor(value) {
    const route = 'vendors';
    return this.http.post(apiURL + route, value);
  }
  getVendors(pageno = 1, perpage = 10) {
    const route = `vendors/vendorlist?page=${pageno}&pageSize=${perpage}`;
    return this.http.get(apiURL + route);
  }

}
