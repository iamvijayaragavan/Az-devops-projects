import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { UtilsService } from 'libs/common-services-lib/src/lib/util.service';
import { ERROR_DIALOG } from './model/constants';

@Component({
  selector: 'bb-error-dialog-ui',
  templateUrl: './error-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorDialogComponent implements OnInit {
  readonly dialogConstants = ERROR_DIALOG;

  @Input() showDialog: any;//Take the value from parent component to open or close the dialog
  @Input() isTypeError:any; //Take the type of dialog confirm or info //true or false
  @Input() title:any;
  @Input() description:any;
  @Output() isDialogOpen = new EventEmitter<boolean>();//Passes the state of dialog open or close

  constructor(private utils: UtilsService) { }

  ngOnInit() {  }

  buttonColor = 'primary';

  /**
   * Close this dialoge without confiming
   */
  closeDialog() {
    this.showDialog = false;
    this.isDialogOpen.emit(false);
  }

  /**
   * Close the dialog after confirmation
   */
  onConfirmDialog() {
    this.utils.cancel();
    this.closeDialog();
  }
}