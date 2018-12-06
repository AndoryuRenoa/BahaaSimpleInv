import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class IsReceivingStartedService {

  public receivingStarted: boolean = false;

  constructor( private router: Router ) { }
  
  
  goToReceiving(){
    this.router.navigateByUrl('/receiving');

  }


}
