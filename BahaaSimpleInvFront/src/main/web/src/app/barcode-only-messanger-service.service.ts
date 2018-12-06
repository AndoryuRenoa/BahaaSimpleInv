import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subject } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BarcodeOnlyMessangerServiceService {
  private messageURL = "/api/barcode"
  private unableToSendMessage = new Subject<boolean>();
  private messageSent = new Subject<boolean>();
  private submitted = new Subject<boolean>();
  private result = new Subject<String>();
  
  

  constructor(private http : HttpClient, private router: Router) { }

  attemptSendMessage(message, callback){

    this.http.post(this.messageURL, message, {headers: new HttpHeaders(), responseType: 'text' as 'text'})
    .subscribe((res) =>{
      console.log('attempting to send '+message as 'JSON');  
      console.log("result is: "+res);
      this.setResult(res);
      },
      (error)=>{
        this.setResult("error sending message");
        console.log("error");
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
  setResult (result: String){
    this.result.next(result);
  }

  getResult(){
    return this.result.asObservable();

  }
}
