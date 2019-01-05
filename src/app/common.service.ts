import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

const apiURL: string = 'http://fusadmintest.groeitech.com/brands';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient    
  ) { }

  getBrands(id?){
    let url = apiURL;
    return this.http.get(url);
  }

}
