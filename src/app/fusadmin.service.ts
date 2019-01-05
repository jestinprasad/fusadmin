import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

const apiURL: string = 'http://fusadmintest.groeitech.com/brands';

@Injectable({
  providedIn: 'root'
})
export class FusadminService {

  constructor(
    private http: HttpClient
  ) { }

  createVendor(value){
    return this.http.post(apiURL, value);      
   }
  
}
