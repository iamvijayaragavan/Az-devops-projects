import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OTP_AUTH } from './model/constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EDGE_CASES, SESSION_KEYS } from 'libs/common-models/common-constants';
import { DataSharingService } from 'libs/common-services-lib/src/lib/data-sharing.service';
import { UtilsService } from 'libs/common-services-lib/src/lib/util.service';

@Component({
  selector: 'mcb-otp-auth-widget',
  templateUrl: './otp-auth-widget.component.html',
  styles: [
  ]
})
export class OtpAuthWidgetComponent implements OnInit {
  readonly otpAuthConstants:any = OTP_AUTH; //OTP page constants
  readonly edgeCaseConstants:any = EDGE_CASES; //edge case global constants
  readonly sessionKeys = SESSION_KEYS;
  userInfo:any;

  //Validation and form object for OTP form
  otpForm = new FormGroup({
    otp: new FormControl('', [Validators.minLength(6), Validators.required, Validators.maxLength(6)]),
  });

  // Data to stepper progress bar data on top of the page
  readonly stepperData = {
    pageName: this.otpAuthConstants.pageName,
    pageCount: this.otpAuthConstants.pageCount
  }

  @Output() navigateToError = new EventEmitter(); //Navigation object for Error Page
  @Output() navigateToAccounts = new EventEmitter(); //Navigation object for Select Accounts Page

  constructor(private dataService:DataSharingService, private utils: UtilsService,) { 

  }

  ngOnInit(): void {
    this.userInfo = {
      ...
      this.utils.getDataFromSession(this.sessionKeys.userInfo)
    };
  }

  /**
   * Submit the otp form
   */
  onSubmit(){
    this.dataService.setData('error',this.edgeCaseConstants.authorizationFailed.imageName);
    this.navigateToError.emit();   
  }

  /**
   * Navigation to come see us edge case page
   */
  comeSeeUs(){
    this.dataService.setData('error',this.edgeCaseConstants.comeSeeUs.imageName);
    this.navigateToError.emit(); 
  }

  /**
   * Resends the otp on demand
   */
  resendOTP(){

  }

  /**
   * Navigates to select account page
   */
  navigateToAccountPage(){
    this.utils.browserBack();
  }
}
