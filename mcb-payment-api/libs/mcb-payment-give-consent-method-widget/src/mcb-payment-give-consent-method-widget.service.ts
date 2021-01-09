
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class GiveConsentWidgetService {
  constructor(private http: HttpClient) {}

  getConsentScreenData(request: any) {
    const params = request;
    const url = '';
    return this.http.get<any>(url, { params });
  }

  giveConsent() {
    const url = '';
    return this.http.get<any>( url);
  }
}