import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SESSION_KEYS } from 'libs/common-models/common-constants';
import { DataSharingService } from 'libs/common-services-lib/src/lib/data-sharing.service';
import { UtilsService } from 'libs/common-services-lib/src/lib/util.service';
import { GiveConsentWidgetService } from './mcb-payment-give-consent-method-widget.service';
import { GIVE_CONSENT } from './model/constants';

@Component({
  selector: 'mcb-mcb-payment-give-consent-method-widget',
  templateUrl: 'mcb-payment-give-consent-method-widget.component.html',
  styles: [
  ]
})
export class McbPaymentGiveConsentMethodWidgetComponent implements OnInit {
  readonly consentPageConstants:any = GIVE_CONSENT;
  readonly sessionKeys = SESSION_KEYS;

  readonly stepperData = {
    pageName: this.consentPageConstants.pageName,
    pageCount: this.consentPageConstants.pageCount
  }

  userInfo:any;

  constructor(private consentService: GiveConsentWidgetService, private dataService:DataSharingService, private utils: UtilsService) { }

  ngOnInit(): void {
    this.userInfo = {
      ...
      this.utils.getDataFromSession(this.sessionKeys.userInfo)
    }
  }

    /***
   * @author Priyanka Jhanwar
   * @description This function calls a service method that returns information about purchase.
   */
  onLoadConsentScreen(request: any){
    this.consentService.getConsentScreenData(request).subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
       console.log(error);
      }
    );
  }

  @Output() navigateToAccountSelector = new EventEmitter();

  giveConsent(){
    // this.consentService.giveConsent().subscribe(
    //   (data) => {
    //     console.log(data)
    //   },
    //   (error) => {
    //    console.log(error);
    //   }
    // );
    this.navigateToAccountSelector.emit();
  }
}
