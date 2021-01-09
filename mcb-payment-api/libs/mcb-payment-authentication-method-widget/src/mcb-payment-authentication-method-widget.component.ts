import { Component, EventEmitter, Output } from '@angular/core';
import { AUTHENTICATION_METHODS_DETAILS } from './model/constants';
import { EDGE_CASES } from 'libs/common-models/common-constants';
import { UtilsService } from 'libs/common-services-lib/src/lib/util.service';


@Component({
  selector: 'mcb-mcb-payment-authentication-method-widget',
  templateUrl: './mcb-payment-authentication-method-widget.component.html',
})
export class McbPaymentAuthenticationMethodWidgetComponent {

  readonly authDetails = AUTHENTICATION_METHODS_DETAILS;

  readonly errorCases = EDGE_CASES;

  constructor(private utils: UtilsService) {}

  @Output() navigateToIBCredentials = new EventEmitter();
  @Output() navigateToJuiceApp = new EventEmitter();

  onRedirectTo(item:any): void {
    item.title === this.authDetails.authenticationMethods[0].title ? 
    this.navigateToIBCredentials.emit() : this.navigateToJuiceApp.emit();
  }

  cancel():void {
    this.utils.cancel();
  }

}
