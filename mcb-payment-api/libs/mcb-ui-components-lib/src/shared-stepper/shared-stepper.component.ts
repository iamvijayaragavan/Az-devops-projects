import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { StepperModel } from './model/stepper.model';

@Component({
  selector: 'bb-shared-stepper-ui',
  templateUrl: './shared-stepper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedStepperComponent implements OnInit {
  @Input() stepperData:any;
  stepperStatus = new StepperModel();
  constructor() { }

  ngOnInit() { 
    if(this.stepperData.pageCount === '1'){
      this.stepperStatus.first.label = this.stepperData.pageName;
    }else if(this.stepperData.pageCount === '2'){
      this.stepperStatus.first.isActive = false;
      this.stepperStatus.first.isChecked = true;
      this.stepperStatus.second.label = this.stepperData.pageName;
      this.stepperStatus.second.isActive = true;
    }else if(this.stepperData.pageCount === '3'){
      this.stepperStatus.second.isActive = false;
      this.stepperStatus.second.isChecked = true;
      this.stepperStatus.first.isChecked = true;
      this.stepperStatus.third.label = this.stepperData.pageName;
      this.stepperStatus.third.isActive = true;
    }
  }
}