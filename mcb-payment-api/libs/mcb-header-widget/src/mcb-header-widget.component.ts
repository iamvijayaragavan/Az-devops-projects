import { Component, OnInit, ViewChild } from '@angular/core';
import { HEADER } from './model/constants';

@Component({
  selector: 'mcb-mcb-header-widget',
  templateUrl:'./mcb-header-widget.component.html',
  styles: [
  ]
})
export class McbHeaderWidgetComponent implements OnInit {
  readonly headerConstants = HEADER;
  showDialog: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  isDialogOpen(e:any){
    this.showDialog = false;
  }

  cancel():void {
    this.showDialog = true;
  }

}
