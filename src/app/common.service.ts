import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiURL = 'http://fusadmintest.groeitech.com/';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient
  ) { }

  getBrands(id?) {
    const url = apiURL + 'brands';
    return this.http.get(url);
  }
  getCategories() {
    const url = apiURL + 'foundation/category';
    return this.http.get(url);
  }

}
