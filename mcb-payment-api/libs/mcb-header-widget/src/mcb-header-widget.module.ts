import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { McbHeaderWidgetComponent } from './mcb-header-widget.component';
import { IconModule } from '@backbase/ui-ang';
import { ErrorDialogModule } from 'libs/mcb-ui-components-lib/src/error-dialog/error-dialog.module';

@NgModule({
  declarations: [McbHeaderWidgetComponent],
  imports: [
    CommonModule,
    ErrorDialogModule,
    BackbaseCoreModule.withConfig({
      classMap: { McbHeaderWidgetComponent }
    }),
    IconModule
  ]
})
export class McbHeaderWidgetModule { }