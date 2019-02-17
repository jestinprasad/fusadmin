import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData:any;
  phone:any;
  password:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fusAdmin:  CommonService   
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.data);
    this.loginData = this.activatedRoute.snapshot.data.data;
  }
  logIn(){
    const data = {
      phone: this.phone,
      password: this.password
    };
    this.fusAdmin.adminLogin(data).subscribe(res=>{
      console.log(res.data.token);
      localStorage.setItem('user', res.data.token);
    })
  }
}
