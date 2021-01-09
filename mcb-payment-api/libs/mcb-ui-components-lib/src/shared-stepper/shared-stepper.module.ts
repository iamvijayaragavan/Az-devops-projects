import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedStepperComponent } from './shared-stepper.component';

@NgModule({
  imports: [ CommonModule],
  declarations: [ SharedStepperComponent ],
  exports: [ SharedStepperComponent ]
})
export class SharedStepperModule { }
