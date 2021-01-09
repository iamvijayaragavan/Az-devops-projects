/**
 * @author Arun Thakur
 * @description This shared service can be used to access the data between different components.
 * 
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private data:any = {};
  private userData:any = {};
  constructor() { }

  /**
   * This function can be used to set data from anywhere in the app.
   * @param name any string
   * @param value any type of value
   */
  setData(name:any, value:any){
    this.data[name] = value;
  }

  /**
   * This function can be sed access the data set by setData() method.
   */
  getData(){
    return this.data;
  }

  // setUserInfo(value:any){
  //   this.userData = value;
  //   console.log(this.userData);
  // }

  // getUserInfo(){
  //   this.userData;
  //   console.log(this.userData);
  // }
}
