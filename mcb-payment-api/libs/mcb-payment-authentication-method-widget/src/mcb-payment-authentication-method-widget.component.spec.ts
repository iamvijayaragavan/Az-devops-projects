import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { McbPaymentAuthenticationMethodWidgetComponent } from './mcb-payment-authentication-method-widget.component';

describe('McbPaymentAuthenticationMethodWidgetComponent', () => {
  let fixture: ComponentFixture<McbPaymentAuthenticationMethodWidgetComponent>;
  let component: McbPaymentAuthenticationMethodWidgetComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [McbPaymentAuthenticationMethodWidgetComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [],
    })
      .overrideComponent(McbPaymentAuthenticationMethodWidgetComponent, {})
      .compileComponents();
    fixture = TestBed.createComponent(McbPaymentAuthenticationMethodWidgetComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should emit event', () => {
    let data = 'Internet Banking';
    expect(component.onRedirectTo(data));
  });

  it('should run #onRedirectTo()', async () => {
    component.navigateToIBCredentials = component.navigateToIBCredentials || {};
    component.navigateToIBCredentials.emit;
    component.navigateToJuiceApp = component.navigateToJuiceApp || {};
    component.navigateToJuiceApp.emit;
    component.onRedirectTo({
      title: 'Internet Banking',
    });
  });
});
