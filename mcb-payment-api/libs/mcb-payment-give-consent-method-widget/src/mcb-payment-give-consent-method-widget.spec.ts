import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GiveConsentWidgetService } from './mcb-payment-give-consent-method-widget.service';
import { McbPaymentGiveConsentMethodWidgetComponent } from './mcb-payment-give-consent-method-widget.component';

describe('McbPaymentGiveConsentMethodWidgetComponent', () => {
    let component: McbPaymentGiveConsentMethodWidgetComponent;
    let fixture: ComponentFixture<McbPaymentGiveConsentMethodWidgetComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                McbPaymentGiveConsentMethodWidgetComponent
            ],
            providers: [
                { provide: GiveConsentWidgetService}
            ]
        });
        fixture = TestBed.createComponent(McbPaymentGiveConsentMethodWidgetComponent);
        component = fixture.componentInstance;
    });
});
