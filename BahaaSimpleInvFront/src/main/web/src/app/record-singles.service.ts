import { Injectable } from '@angular/core';
import {Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecordSinglesService {
  private numberofSingles: number = 0;
  private numberofSinglesObserv = new Subject <number>();

  constructor() { }

  setNumberofSingles(num: number){
    this.numberofSingles = num
    this.numberofSinglesObserv.next(num);
  }

  getNumberofSinglesAsObservable(){
   return this.numberofSinglesObserv.asObservable();
  }

  addToNumOfSingles(additional: number){
    //weirdness below in typescript don't know why they're treated as a String

   this.numberofSingles = +this.numberofSingles+ +additional;
   this.numberofSinglesObserv.next(this.numberofSingles)
  }

  setObservable(){
    this.numberofSinglesObserv.next(this.numberofSingles);
  }

}
