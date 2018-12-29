import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  name: string;
  email: string;
  password: string;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    })
  }

  onRegisterSubmit(){
    alert(this.registerForm.value.name);
    console.log(this.registerForm.value);
  }

}
