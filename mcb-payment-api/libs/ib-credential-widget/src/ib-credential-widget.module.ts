import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { IbCredentialWidgetComponent } from './ib-credential-widget.component';
import { FieldsetModule } from '@backbase/ui-ang';
import { InputTextModule } from '@backbase/ui-ang';
import { InputPasswordModule } from '@backbase/ui-ang';
import { InputValidationMessageModule } from '@backbase/ui-ang';
import { ButtonModule } from '@backbase/ui-ang';
import { IconModule } from '@backbase/ui-ang';
import { LoginWidgetModule } from '@backbase/login-widget-ang';
import { ProductSummaryListWidgetModule } from '@backbase/retail-ang/product-summary';

@NgModule({
  declarations: [IbCredentialWidgetComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { IbCredentialWidgetComponent }
    }),
    FieldsetModule,
    InputTextModule,
    InputPasswordModule,
    InputValidationMessageModule,
    ButtonModule,
    IconModule,
    LoginWidgetModule,
    ProductSummaryListWidgetModule
  ]
})
export class IbCredentialWidgetModule { }