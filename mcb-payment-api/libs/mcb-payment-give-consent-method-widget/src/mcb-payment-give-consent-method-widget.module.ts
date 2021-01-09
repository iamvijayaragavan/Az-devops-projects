import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { McbPaymentGiveConsentMethodWidgetComponent } from './mcb-payment-give-consent-method-widget.component';
import { SharedStepperModule } from '@mcbpaymentapi/mcb-ui-components-lib';

@NgModule({
  declarations: [McbPaymentGiveConsentMethodWidgetComponent],
  imports: [
    CommonModule,
    SharedStepperModule,
    BackbaseCoreModule.withConfig({
      classMap: { McbPaymentGiveConsentMethodWidgetComponent }
    })
  ]
})
export class McbPaymentGiveConsentMethodWidgetModule { }