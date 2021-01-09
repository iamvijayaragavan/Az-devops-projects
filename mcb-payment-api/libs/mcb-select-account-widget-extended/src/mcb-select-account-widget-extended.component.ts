import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SESSION_KEYS } from 'libs/common-models/common-constants';
import { DataSharingService } from 'libs/common-services-lib/src/lib/data-sharing.service';
import { UtilsService } from 'libs/common-services-lib/src/lib/util.service';
import { ACCOUNT_SELECTOR_CONTENT } from './model/constants';

@Component({
  selector: 'mcb-select-account-widget-extended',
  templateUrl: './mcb-select-account-widget-extended.component.html',
})
export class McbSelectAccountWidgetExtendedComponent implements OnInit {

  readonly accountSelectorLables = ACCOUNT_SELECTOR_CONTENT;
  readonly sessionKeys = SESSION_KEYS;

  readonly stepperData = {
    pageName: this.accountSelectorLables.pageName,
    pageCount: this.accountSelectorLables.pageCount
  }

  userInfo:any;
  selectedAccount: any;

  @Output() navigateToOtp = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private utils: UtilsService, private dataService:DataSharingService) {}

  form = this.formBuilder.group({
    accountType: [{ value: '', disabled: false }, Validators.required],
  });

  onRadioTemplateFormSubmit() {
    console.log(this.form.value);
    this.navigateToOtp.emit();
  }

  back(): void {
    this.utils.browserBack();
  }

  ngOnInit(): void {
    this.userInfo = {
      ...
      this.utils.getDataFromSession(this.sessionKeys.userInfo)
    }
  }
}
