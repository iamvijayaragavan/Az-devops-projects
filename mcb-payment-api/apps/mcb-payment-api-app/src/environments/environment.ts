import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';

import { Item } from '@backbase/foundation-ang/web-sdk';
import { ExternalServices } from '@backbase/foundation-ang/start';

import { Environment } from './type';
import { mockProviders } from './mockproviders';

const services: ExternalServices = {};

const pageModel: Item = {
  name: 'app-container',
  properties: {},
  children: [ 
      {
        name: 'deck-container',
        properties: {
          classId: 'DeckContainerComponent',
        },
        children: [
          {
            name: 'panel-container-authentication-widget',
            properties: {
              classId: 'PanelContainerComponent',
              route: 'authentication-methods',
            },
            children: [
              {
                name: 'mcb-payment-authentication-method-widget',
                properties: {
                  classId: 'McbPaymentAuthenticationMethodWidgetComponent',
                  'output.navigateToIBCredentials': 'navigation:panel-container-Ib-credentials-widget',
                  'output.navigateToJuiceApp': 'navigation:',
                },
              },
            ],
          },
          {
            name: 'panel-container-Ib-credentials-widget',
            properties: {
              classId: 'PanelContainerComponent',
              route: 'login',
            },
            children: [
              {
                name: 'ib-credential-widget',
                properties: {
                  classId: 'IbCredentialWidgetComponent',
                  'output.navigateToConsent': 'navigation:panel-container-mcb-payment-give-consent-method-widget',
                }
              }
            ],
          },
          {
            name: 'panel-container-mcb-payment-give-consent-method-widget',
            properties: {
              classId: 'PanelContainerComponent',
              route: 'consent',
            },
            children: [
              {
                name: 'mcb-header',
                properties: {
                  classId: 'McbHeaderWidgetComponent',
                }
              },
              {
                name: 'mcb-select-account-widget-extended',
                properties: {
                  classId: 'McbPaymentGiveConsentMethodWidgetComponent',
                  'output.navigateToAccountSelector': 'navigation:panel-container-mcb-account-selector-widget',
                }
              },
              {
                name: 'mcb-footer',
                properties: {
                  classId: 'McbFooterWidgetComponent',
                }
              }
            ],
          },
          {
            name:'panel-container-mcb-account-selector-widget',
            properties: {
              classId: 'PanelContainerComponent',
              route: 'selected-account',
            },
            children:[
              {
                name: 'mcb-header',
                properties: {
                  classId: 'McbHeaderWidgetComponent',
                }
              },
              {
                name: 'account-selector-widget',
                properties: {
                  classId: 'McbSelectAccountWidgetExtendedComponent',
                  'output.navigateToOtp' : 'navigation:panel-container-mcb-otp-auth-widget'
                }
              },
              {
                name: 'mcb-footer',
                properties: {
                  classId: 'McbFooterWidgetComponent',
                }
              }
            ]
          },
          {
            name:'panel-container-mcb-otp-auth-widget',
            properties: {
              classId: 'PanelContainerComponent',
              route: 'enter-otp',
            },
            children:[
              {
                name: 'mcb-header',
                properties: {
                  classId: 'McbHeaderWidgetComponent',
                }
              },
              {
                name: 'otp-auth-widget',
                properties: {
                  classId: 'OtpAuthWidgetComponent',
                  'output.navigateToError' : 'navigation:panel-container-display-error',
                  'output.navigateToAccounts' : 'navigation:panel-container-mcb-account-selector-widget',
                }
              },
              {
                name: 'mcb-footer',
                properties: {
                  classId: 'McbFooterWidgetComponent',
                }
              }
            ]
          },
          {
            name:'panel-container-display-error',
            properties:{
              classId: 'PanelContainerComponent',
              route: 'error',
            },
            children:[
              {
                name: 'mcb-header',
                properties: {
                  classId: 'McbHeaderWidgetComponent',
                }
              },
              {
                name: 'display-error-widget',
                properties: {
                  classId: 'DisplayErrorWidgetComponent',
                }
              },
              {
                name: 'mcb-footer',
                properties: {
                  classId: 'McbFooterWidgetComponent',
                }
              }
            ]
          } 
        ],
      },
  ]
};

export const environment: Environment = {
  production: false,
  mockProviders,
  bootstrap: {
    pageModel,
    services,
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
