import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { DisplayErrorWidgetComponent } from './display-error-widget.component';
import { EdgeCasesModule } from '@mcbpaymentapi/mcb-ui-components-lib/';

@NgModule({
  declarations: [DisplayErrorWidgetComponent],
  imports: [
    CommonModule,
    EdgeCasesModule,
    BackbaseCoreModule.withConfig({
      classMap: { DisplayErrorWidgetComponent }
    })
  ]
})
export class DisplayErrorWidgetModule { }