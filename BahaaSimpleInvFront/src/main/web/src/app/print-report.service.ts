import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Config } from 'protractor';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintReportService {

  constructor(private http: HttpClient) { }


  requestReport(){
    this.http.get('/api/printReport', {headers: new HttpHeaders(), responseType: 'text' as 'text'}).subscribe((res) =>{  
      console.log(res);
    });
  }
}
