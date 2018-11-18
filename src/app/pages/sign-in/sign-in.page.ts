import { Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationConfig } from './../../formConfigs/validationConfig';
import { SignInService } from '../../services/sign-in.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit, AfterViewInit {
  validationConfig: { [key: string]: any; } = {};
  loginForm: FormGroup;
  keepMeLogin: boolean = false;
  appName = 'Logical Studies';
  passwordMode: string = 'password';
  @ViewChild('password',{ read: ElementRef }) password: ElementRef;
  constructor(
    private formBuilder:FormBuilder,
    private signInService: SignInService,
    private router: Router
    ) {
    this.validationConfig = ValidationConfig.getLoginConfig();
    this.loginForm = this.formBuilder.group(this.validationConfig);
  }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    this.passwordMode = this.password.nativeElement.attributes.type.nodeValue;
  }
  login() {
    console.log(this.loginForm.value,this.loginForm.valid);
    const loginFormValue = this.loginForm.value;
    const loginInfo = JSON.stringify({email:loginFormValue.email,password:loginFormValue.password});
    this.signInService.loginUser(loginInfo).subscribe((loginResponse) => {
      if (loginResponse) {
        localStorage.setItem('loggedInUserId',loginResponse._id);
        this.router.navigate(['../landing'])
      }
    });

  }
  switchPasswordMode() {
    console.log('called');
    this.passwordMode = this.password.nativeElement.attributes.type.nodeValue;
    console.log(this.passwordMode)
    if (this.passwordMode == 'password') {
      this.passwordMode = 'text';
    }
    else {
      this.passwordMode = 'password';
    }
    this.password.nativeElement.attributes.type.nodeValue = this.passwordMode;
  }
  forgotPassword() {
    console.log('Forgot password');
  }
  facebookLogin() {
    console.log('Facebook login');
  }
  googleLogin() {
    console.log('Gmail login');
  }
  registerNewUser() {
    console.log('Register New User');
  }

  }

