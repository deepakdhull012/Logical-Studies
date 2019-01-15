import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationConfig } from './../../formConfigs/validationConfig';
import { SignInService } from './../../services/sign-in.service';
import { CommonService } from './../../services/common.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})

export class SignInPage implements OnInit, AfterViewInit {

  validationConfig: { [key: string]: any; } = {};
  loginForm: FormGroup;
  keepMeLogin = false;
  appName = 'Logical Studies';
  passwordMode = 'password';
  colorRed = '#f00';
  @ViewChild('password', { read: ElementRef }) password: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private signInService: SignInService,
    private router: Router,
    private facbook: Facebook,
    private googlePlus: GooglePlus,
    private commonService: CommonService
  ) {
    
  }

  ngOnInit() {
    this.validationConfig = ValidationConfig.getLoginConfig();
    this.loginForm = this.formBuilder.group(this.validationConfig);
  }
  ngAfterViewInit() {
    this.passwordMode = this.password.nativeElement.attributes.type.nodeValue;
    console.log(this.loginForm.get('email'));
  }
  login() {
    this.commonService.showLoader('Please wait logging in..');
    console.log(this.loginForm.value, this.loginForm.valid);
    const loginFormValue = this.loginForm.value;
    const loginInfo = JSON.stringify({ email: loginFormValue.email, password: loginFormValue.password });
    this.signInService.loginUser(loginInfo).then((loginResponse) => {
      this.commonService.dismissLoader();
      if (loginResponse) {
        this.commonService.showToast('Login Success');
        localStorage.setItem('loggedInUserId', loginResponse._id);
        localStorage.setItem('keepMeLogin', loginFormValue.keepMeLogin);
        this.router.navigate(['../tabs']);
      } else {
        // Show Login Failure Toast
        this.commonService.showToast('Login Failed');
      }
    }).catch((err) => {
      this.commonService.dismissLoader();
    });

  }
  switchPasswordMode() {
    this.passwordMode = this.password.nativeElement.attributes.type.nodeValue;
    if (this.passwordMode === 'password') {
      this.passwordMode = 'text';
    } else {
      this.passwordMode = 'password';
    }
    this.password.nativeElement.attributes.type.nodeValue = this.passwordMode;
  }
  forgotPassword() {
    this.router.navigate(['verify', 'forgotPassword']);
  }
  facebookLogin() {
    this.facbook.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        this.router.navigate(['../landing']);
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }
  googleLogin() {
    this.googlePlus.login({})
      .then(res => {
        this.router.navigate(['../landing']);
      })
      .catch(err => console.error(err));
  }
  registerNewUser() {
    this.router.navigate(['verify', 'register']);
  }

}

