import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { McbPaymentAuthenticationMethodWidgetComponent } from './mcb-payment-authentication-method-widget.component';
import { IconModule, ButtonModule } from '@backbase/ui-ang';
import { EdgeCasesModule } from '@mcbpaymentapi/mcb-ui-components-lib';

const uiComponents = [
  IconModule,
  ButtonModule,
]

@NgModule({
  declarations: [McbPaymentAuthenticationMethodWidgetComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { McbPaymentAuthenticationMethodWidgetComponent },
    }),
    uiComponents,
    EdgeCasesModule,
  ],
})
export class McbPaymentAuthenticationMethodWidgetModule {}