import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { McbSelectAccountWidgetExtendedComponent } from './mcb-select-account-widget-extended.component';
import { ProductSummaryAccountSelectorWidgetModule } from '@backbase/product-summary-account-selector-widget-ang';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputRadioGroupModule } from '@backbase/ui-ang';
import { SharedStepperModule } from '@mcbpaymentapi/mcb-ui-components-lib/';

@NgModule({
  declarations: [McbSelectAccountWidgetExtendedComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { McbSelectAccountWidgetExtendedComponent }
    }),
    ProductSummaryAccountSelectorWidgetModule,
    FormsModule,
    ReactiveFormsModule,
    InputRadioGroupModule,
    SharedStepperModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class McbSelectAccountWidgetExtendedModule { }