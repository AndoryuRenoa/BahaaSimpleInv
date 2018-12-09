import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Config } from 'protractor';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrintReportService {
  reportComplete = new Subject<Boolean>();

  constructor(private http: HttpClient) { }


  requestReport(){
    this.http.get('/api/printReport', {headers: new HttpHeaders(), responseType: 'text' as 'text'}).subscribe((res) =>{
      if(res == "success"){
        this.reportComplete.next(true);
      }  
      console.log(res);
    });
  }

  getReportStatus(){
    return this.reportComplete.asObservable();
  }
}
