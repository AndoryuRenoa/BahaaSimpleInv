import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subject } from "rxjs";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MessangerService {
  private messageURL = "/api/newReceiving"
  private unableToSendMessage = new Subject<boolean>();
  private messageSent = new Subject<boolean>();
  private submitted = new Subject<boolean>();
  private vendor = new Subject<String>();
  
  

  constructor(private http : HttpClient, private router: Router) { }

  attemptSendMessage(message, callback){

    this.http.post(this.messageURL, message, {headers: new HttpHeaders(), responseType: 'text' as 'text'})
    .subscribe((res) =>{
    console.log('attempting to send '+message as 'JSON');  
    console.log(res);
    this.setMessageSent(true);
    this.setSubmitted(false);
    },
    (error)=>{
      this.setUnableToSendMessage(true);
    });
    this.setMessageSent(true);
    this.setSubmitted(false);

    return callback && callback();

  }


  setUnableToSendMessage (unableToSendMessage: boolean){
    this.unableToSendMessage.next(unableToSendMessage);
  }

  getUnableToSendMessage(){
    return this.unableToSendMessage.asObservable();
  }
  setMessageSent (unableToSendMessage: boolean){
    this.messageSent.next(unableToSendMessage);
  }

  getMessageSent(){
    return this.messageSent.asObservable();
  }
  setSubmitted (unableToSendMessage: boolean){
    this.submitted.next(unableToSendMessage);
  }

  getSubmitted(){
    return this.submitted.asObservable();
  }
  setVendor(vendor: String){
    this.vendor.next(vendor);
  }
  getVendor(){
    return this.vendor.asObservable();
  }


}