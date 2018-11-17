import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationConfig } from './../../formConfigs/validationConfig';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  validationConfig: { [key: string]: any; } = {};
  loginForm: FormGroup;
  keepMeLogin: boolean = false;
  constructor(private formBuilder:FormBuilder) {
    this.validationConfig = ValidationConfig.getLoginConfig();
    this.loginForm = this.formBuilder.group(this.validationConfig);
  }

  ngOnInit(){
    
  }
  login(){
    console.log(this.loginForm.value,this.loginForm.valid);
  }
  showPassword(){

  }

  }

