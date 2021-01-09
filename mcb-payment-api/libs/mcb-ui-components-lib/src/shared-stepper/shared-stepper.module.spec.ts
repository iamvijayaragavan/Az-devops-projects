import { SharedStepperModule } from './shared-stepper.module';

describe('SharedStepperModule', () => {
  let sharedStepperModule: SharedStepperModule;

  beforeEach(() => {
    sharedStepperModule = new SharedStepperModule();
  });

  it('should create an instance', () => {
    expect(sharedStepperModule).toBeTruthy();
  });
});
