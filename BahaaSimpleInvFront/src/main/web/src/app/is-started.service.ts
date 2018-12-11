import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IsStartedService {
  getURL = "/api/getInProgress"
  setURL = "/api/setInProgress"

  private isStarted = new BehaviorSubject<Boolean>(false);

  constructor(private http : HttpClient) { }
  getFromServer(){
    this.http.get(this.getURL, {headers: new HttpHeaders()})
    .subscribe((res: Boolean) =>{
      this.isStarted.next(res);
      console.log(res);
    });
    return this.isStarted.asObservable();
  }

  setToServer(status : Boolean){
    var message = {
      isRunning: status
    }
    this.isStarted.next(status);
    this.http.post(this.setURL, message, {headers : new HttpHeaders(), responseType: 'text' as 'text'})
    .subscribe((error)=> console.log(error)); 

  }
}
