import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ShowLoginService} from './show-login.service';
import {ShowLogoutService} from './show-logout.service';
import { Config } from 'protractor';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintReportService {

  constructor(private http: HttpClient) { }


  requestReport(){
    this.http.get('/test/user')
  }
}
