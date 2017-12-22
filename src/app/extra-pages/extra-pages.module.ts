import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

import { ExtraPagesRoutingModule } from './extra-pages-routing.module';

import { PageLoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPassword2Component } from './forgot-password/forgot-password.component';
import { Page404Component } from './404/404.component';
import { Page500Component } from './500/500.component';
import { PageConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { PageLockScreenComponent } from './lock-screen/lock-screen.component';
import { PageMaintenanceComponent } from './maintenance/maintenance.component';
import { RegistrationConfirmationComponent } from './ConfirmCode/confirm.component';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UserRegistrationService, UserLoginService, UserParametersService, CognitoUtil} from "../services/cognito.service";
import {AwsUtil} from "../services/aws.service";
import {DynamoDBService} from "../services/ddb.service";

@NgModule({
  imports: [
    CommonModule,
   
    FormsModule,
    ExtraPagesRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  ],
  declarations: [
    PageLoginComponent,
    SignUpComponent,
    PageForgotPasswordComponent,
    ForgotPassword2Component,
    Page404Component,
    Page500Component,
    PageConfirmEmailComponent,
    PageLockScreenComponent,
    PageMaintenanceComponent,
    RegistrationConfirmationComponent
  ],
 /* providers: [
        CognitoUtil,
        AwsUtil,
        DynamoDBService,
        UserRegistrationService,
        UserLoginService,
        UserParametersService]*/
})

export class ExtraPagesModule {}
