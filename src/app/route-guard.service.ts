import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private router:Router) { }
  canLoad(): boolean {
    console.log(localStorage.getItem('user'));
    
    if (localStorage.getItem('user')) {
       return true; 
    }
          this.router.navigate(['./']);
          return false;		
    }
}
