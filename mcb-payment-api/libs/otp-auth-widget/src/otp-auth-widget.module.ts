import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { OtpAuthWidgetComponent } from './otp-auth-widget.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from '@backbase/ui-ang';
import { SharedStepperModule } from '@mcbpaymentapi/mcb-ui-components-lib/';

@NgModule({
  declarations: [OtpAuthWidgetComponent],
  imports: [
    CommonModule,
    InputTextModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedStepperModule,
    BackbaseCoreModule.withConfig({
      classMap: { OtpAuthWidgetComponent }
    })
  ]
})
export class OtpAuthWidgetModule { }