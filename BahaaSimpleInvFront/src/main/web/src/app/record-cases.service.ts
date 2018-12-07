import { Injectable } from '@angular/core';
import {Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecordCasesService {
  private numberofCases: number = 0;
  private numberofCasesObserv = new Subject <number>();

  constructor() { }

  setNumberofCases(num: number){
    this.numberofCases = num
    this.numberofCasesObserv.next(num);
  }

  getNumberofCasesAsObservable(){
   return this.numberofCasesObserv.asObservable();
  }

  addToNumOfCases(additional: number){
    //weirdness below in typescript don't know why they're treated as a String

   this.numberofCases = +this.numberofCases+ +additional;
   this.numberofCasesObserv.next(this.numberofCases)
  }

  setObservable(){
    this.numberofCasesObserv.next(this.numberofCases);
  }



}
