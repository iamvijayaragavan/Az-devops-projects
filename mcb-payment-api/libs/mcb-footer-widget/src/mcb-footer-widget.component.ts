import { Component, OnInit } from '@angular/core';
import { FOOTER_CONTENT } from './model/constants';

@Component({
  selector: 'mcb-mcb-footer-widget',
  templateUrl: './mcb-footer-widget.component.html',
  styles: [
  ]
})
export class McbFooterWidgetComponent implements OnInit {

  readonly footerContent = FOOTER_CONTENT;

  constructor() { }

  ngOnInit(): void {
  }

}
