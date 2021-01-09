import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeCasesModule } from './edge-cases/edge-cases.module';
import { SharedStepperModule } from './shared-stepper/shared-stepper.module';
import { ErrorDialogModule } from './error-dialog/error-dialog.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EdgeCasesModule,
    SharedStepperModule,
    ErrorDialogModule
  ],
  exports: [EdgeCasesModule, SharedStepperModule, ErrorDialogModule]
})
export class McbUiComponentsLibModule { }