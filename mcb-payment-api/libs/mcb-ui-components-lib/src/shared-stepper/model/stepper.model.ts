class ActiveState {
    public label: string ='';
    public isActive: boolean = true;
    public isChecked: boolean = false;
}
class InactiveState {
    public label: string ='';
    public isActive: boolean = false;
    public isChecked: boolean = false;
}
export class StepperModel {
    public first: ActiveState = new ActiveState();
    public second: InactiveState = new InactiveState();
    public third: InactiveState = new InactiveState();
}
