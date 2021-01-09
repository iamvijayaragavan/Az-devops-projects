import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { McbPaymentGiveConsentMethodWidgetModule } from '@mcbpaymentapi/mcb-payment-give-consent-method-widget';
import { DeckContainerModule, PanelContainerModule } from '@backbase/universal-ang/containers';
import { McbPaymentAuthenticationMethodWidgetModule } from '@mcbpaymentapi/mcb-payment-authentication-method-widget';
import { IbCredentialWidgetModule } from '@mcbpaymentapi/ib-credential-widget';
import { ContainersModule } from '@backbase/universal-ang/containers';
import { McbHeaderWidgetModule } from '@mcbpaymentapi/mcb-header-widget';
import { McbFooterWidgetModule } from '@mcbpaymentapi/mcb-footer-widget';
import { McbSelectAccountWidgetExtendedModule } from '@mcbpaymentapi/mcb-select-account-widget-extended';
import { OtpAuthWidgetModule } from '@mcbpaymentapi/otp-auth-widget';
import { DisplayErrorWidgetModule } from '@mcbpaymentapi/display-error-widget';
import { CommonServicesLibModule } from '@mcbpaymentapi/common-services-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BackbaseCoreModule,
    RouterModule.forRoot([], { initialNavigation: false, useHash: true }),
    BackbaseCoreModule.forRoot({
    features: {
        THEME_V2: true
    }
}),
    McbPaymentGiveConsentMethodWidgetModule,
    DeckContainerModule,
    PanelContainerModule,
    McbPaymentAuthenticationMethodWidgetModule,

    IbCredentialWidgetModule,
    ContainersModule,
    McbHeaderWidgetModule,
    McbFooterWidgetModule,
    McbSelectAccountWidgetExtendedModule,
    OtpAuthWidgetModule,
    DisplayErrorWidgetModule,
    CommonServicesLibModule
  ],
  providers: [
    ...environment.mockProviders || []],
  bootstrap: [AppComponent]
})
export class AppModule { }
