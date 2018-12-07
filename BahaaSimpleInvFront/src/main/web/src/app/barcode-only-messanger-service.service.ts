import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subject, BehaviorSubject } from "rxjs";
import { Router } from '@angular/router';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class BarcodeOnlyMessangerServiceService {
  private messageURL = "/api/barcode"
  private unableToSendMessage = new Subject<boolean>();
  private messageSent = new Subject<boolean>();
  private submitted = new Subject<boolean>();
  private item = new BehaviorSubject<String>(null);
  private lastCost = new BehaviorSubject<Number>(null);
  private availableInventory = new BehaviorSubject <Number>(null);
	private unitType = new BehaviorSubject <String>(null);
	private unitMultiplier = new BehaviorSubject<Number>(null);
  
  

  constructor(private http : HttpClient, private router: Router) { }

  attemptSendMessage(message, callback){

    this.http.post(this.messageURL, message, {headers: new HttpHeaders()})
    .subscribe( (data:Config) =>{
      this.setItem(data['item']);
      this.setLastCost(data['lastCost']);
      this.setAvailableInventory(data['availableInventory']);
      this.setUnitType(data['unitType']);
      this.setUnitMultiplier(data['unitMultiplier']);
      },
      (error)=>{
        this.setItem("error sending message");
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
  setItem (result: String){
    this.item.next(result);
  }

  getItem(){
    return this.item.asObservable();

  }
  getLastCost() {
		return this.lastCost.asObservable();
	}
	setLastCost(lastCost: Number) {
		this.lastCost.next(lastCost);
	}
	getAvailableInventory() {
		return this.availableInventory.asObservable();
	}
	setAvailableInventory(availableInventory: Number) {
		this.availableInventory.next(availableInventory);
	}
	getUnitType() {
		return this.unitType.asObservable();
	}
	setUnitType(unitType: String) {
		this.unitType.next(unitType);
	}
	getUnitMultiplier() {
		return this.unitMultiplier.asObservable();
	}
	setUnitMultiplier(unitMultiplier: Number) {
		this.unitMultiplier.next(unitMultiplier);
	}
}
