import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getCampaign(){
    return this.http.get('https://emaillead.aturtoko.id/api/v1/campaign').pipe(map((response: any) => response.data));
  }

  getTemplate(){
    return this.http.get('https://emaillead.aturtoko.id/api/v1/template').pipe(map((response: any) => response.data));
  }
}
