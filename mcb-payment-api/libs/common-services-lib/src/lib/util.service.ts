/**
 * @author Arun Thakur
 * @description This is util service class for all the common functions used in the project.
 */
import { Inject, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { isStorageAvailable, SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { SESSION_KEYS } from 'libs/common-models/common-constants';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  readonly sessionKeys = SESSION_KEYS;
  constructor(private location: Location, @Inject(SESSION_STORAGE) private storage: StorageService) { }

  /**
   * This function can be called from anywhere in the project to navigate back to previous screen
   */
  browserBack(): void {
    this.location.back()
  }

  /**
   * This function is to cancel the transaction or session at any point of time in application flow
   * This will navigate user to marchent page
   */
  cancel():void {
    let marchentUrl = this.storage.get(this.sessionKeys.userInfo).marchentUrl;
    this.storage.clear();
    location.href = marchentUrl ? marchentUrl : '/';
  }

  /**
   * 
   * @param name key name in string format
   * @param value any type of data to store
   */
  public setDataToSession(name:string, value:any): any {
    if(this.storage.has(name))
    this.storage.set(name,null);
    this.storage.set(name, value);
    return {name:value};
  }

  public getDataFromSession(name:string){
    return this.storage.get(name);
  }
}