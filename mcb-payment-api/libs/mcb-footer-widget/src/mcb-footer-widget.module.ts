import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { McbFooterWidgetComponent } from './mcb-footer-widget.component';

@NgModule({
  declarations: [McbFooterWidgetComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { McbFooterWidgetComponent }
    })
  ]
})
export class McbFooterWidgetModule { }