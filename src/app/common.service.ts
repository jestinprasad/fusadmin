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

  getBrands(id?) {
    const url = environment.apiURL + 'brands';
    return this.api.get(url);
  }
  getCategories() {
    const url = environment.apiURL + 'foundation/category';
    return this.api.get(url);
  }

}
