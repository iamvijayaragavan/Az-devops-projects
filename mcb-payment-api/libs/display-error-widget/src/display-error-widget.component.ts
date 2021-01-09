import { Component, Input, OnInit } from '@angular/core';
import { EDGE_CASES } from 'libs/common-models/common-constants';
import { DataSharingService } from 'libs/common-services-lib/src/lib/data-sharing.service';

@Component({
  selector: 'mcb-display-error-widget',
  templateUrl:'./display-error-widget.component.html',
  styles: [
  ]
})
export class DisplayErrorWidgetComponent implements OnInit {
  readonly errorPageConstants:any = EDGE_CASES;
  errorType:any;
  @Input() error: string | undefined;

  constructor(private dataService:DataSharingService) {
    document.body.className = "mcb-error-page";
  }

  ngOnDestroy(){
      document.body.className="";
  }

  ngOnInit(): void {
    let error = this.dataService.getData().error;
    /**
     * Switch case to detect type of error case to display the data accordingly
     */
    switch(error){
      case this.errorPageConstants.authorizationFailed.imageName: {
        this.errorType = this.errorPageConstants.authorizationFailed;
        break;
      }

      case this.errorPageConstants.sessionTimeOut.imageName: {
        this.errorType = this.errorPageConstants.sessionTimeOut;
        break;
      }

      case this.errorPageConstants.somethingWentWrong.imageName: {
        this.errorType = this.errorPageConstants.somethingWentWrong;
        break;
      }

      case this.errorPageConstants.comeSeeUs.imageName: {
        this.errorType = this.errorPageConstants.comeSeeUs;
        break;
      }

      default: {
        this.errorType = this.errorPageConstants.somethingWentWrong;
        break;
      }
    } 
  }


}
