import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorDialogComponent } from './error-dialog.component';
import { ModalModule } from '@backbase/ui-ang';

@NgModule({
  imports: [ CommonModule, ModalModule ],
  declarations: [ ErrorDialogComponent ],
  exports: [ ErrorDialogComponent ]
})
export class ErrorDialogModule { }
