import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { EDGE_CASES } from './models/contants';

@Component({
  selector: 'bb-edge-cases-ui',
  templateUrl: './edge-cases.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EdgeCasesComponent implements OnInit {

  @Input() image: string | undefined;

  @Input() heading: string | undefined;

  @Input() description: string | undefined;

  edgeCasesLabel = EDGE_CASES;
  
  constructor() { }

  ngOnInit() { }
}