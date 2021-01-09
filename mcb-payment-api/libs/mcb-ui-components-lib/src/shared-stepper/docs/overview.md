###### Overview
# shared stepper ui componenet
# selectore - bb-shared-stepper-ui
# Reference - 


# Import SharedStepperModule in your component StepperModule and add this module in array of imports-

    import { SharedStepperModule } from './../../ui-components-lib/src/shared-stepper/shared-stepper.module';

# Write below code in html-

    <bb-shared-stepper-ui [stepperData]="stepperData"></bb-shared-stepper-ui>

# Provide below object as Input from component.ts-

    stepperData = {
        pageName:'Give consent', //name of page
        pageCount:'1' //number of page
    }