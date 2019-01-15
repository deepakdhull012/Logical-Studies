import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationConfig } from './../../../formConfigs/validationConfig';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  validationConfig: { [key: string]: any; } = {};
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.validationConfig = ValidationConfig.getSignUpConfig();
    this.signUpForm = this.formBuilder.group(this.validationConfig);
  }

  signUp() {
    console.log(this.signUpForm)
  }

}
