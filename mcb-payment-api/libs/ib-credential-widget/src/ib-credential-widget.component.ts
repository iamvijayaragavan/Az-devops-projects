import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UtilsService } from 'libs/common-services-lib/src/lib/util.service';
import { LOGIN_PAGE } from './model/constants';
import { DataSharingService } from 'libs/common-services-lib/src/lib/data-sharing.service';
import { SESSION_KEYS } from 'libs/common-models/common-constants';

@Component({
  selector: 'mcb-ib-credential-widget',
  templateUrl:'./ib-credential-custom.component.html',
  styles: [
  ]
})
export class IbCredentialWidgetComponent implements OnInit {
  readonly loginPageConstants:any = LOGIN_PAGE;
  readonly sessionKeys = SESSION_KEYS;
  user:any;

  constructor(private utils: UtilsService, private dataService:DataSharingService) {
      this.user = {
        amount:'16,458.00',
        number:'+239****898',
        marchent: 'Mari Deal Ltd',
        marchentUrl:'https://xebia.com/',
        billRef:'13568235',
        accountRef:'35446',
        description:'Booking for 3 days stay at Riu Hotel from 27th to 29th August 2019. All-Inclusive, Superior Room, 1 Adult.'
      }

      this.utils.setDataToSession(this.sessionKeys.userInfo, this.user);
      
   }

   @Output() navigateToConsent = new EventEmitter();

  onRedirectTo(): void {
    this.navigateToConsent.emit();
  }
  ngOnInit(): void {
   }

  /***
   * @author Arun Thakur
   * @description This function calls a util function which will navigate back to previous screen.
   */
  back():void {
    this.utils.browserBack();
  }

  cancel():void {
    this.utils.cancel();
  }
}
