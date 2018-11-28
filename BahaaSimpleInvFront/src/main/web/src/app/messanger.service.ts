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

  constructor(private http : HttpClient, private router: Router) { }

  attemptSendMessage(message, callback){

    this.http.post(this.messageURL, message, {headers: new HttpHeaders(), responseType: 'text' as 'text'})
    .subscribe((res) =>{
    console.log('attempting to send '+message as 'JSON');  
    console.log(res);
    if (!(res == "success!")){
      this.setUnableToSendMessage(true);
    } else{
      this.router.navigate(['/']);
    }
    });

    return callback && callback();

  }


  setUnableToSendMessage (unableToSendMessage: boolean){
    this.unableToSendMessage.next(unableToSendMessage);
  }

  getUnableToSendMessage(){
    return this.unableToSendMessage.asObservable();
  }
}