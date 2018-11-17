import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SignInPage } from './sign-in.page';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CoreModule } from './../../modules/core/core.module';

const signInRoutes: Routes = [
  {
    path: '',
    component: SignInPage
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    RouterModule.forChild(signInRoutes)
  ],
  declarations: [SignInPage, RegisterComponent, ForgotPasswordComponent, ChangePasswordComponent],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SignInPageModule {}
