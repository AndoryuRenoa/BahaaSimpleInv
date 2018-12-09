import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Vendors} from './vendors';

@Injectable({
  providedIn: 'root'
})
export class GetVendorsService {
  private vendorSubject = new BehaviorSubject([]);
  vendorList : Vendors[];
  private messageURL = "/api/vendors"
  private selectedVendor = new BehaviorSubject<Vendors>(null);
  private invoiceNumber = new BehaviorSubject<String>(null);

  constructor(private http : HttpClient) {}

  getFromServer(){
    this.http.get(this.messageURL, {headers: new HttpHeaders()})
    .subscribe((res: Vendors[]) =>{
      this.vendorSubject.next(res);
      console.log(res);

    });
  }
  getVendorSubject(){
    return this.vendorSubject.asObservable();
  }

  getSelectedVendor(){
    return this.selectedVendor.asObservable();
  }

  setSelectedVendor (vendor : Vendors){
    this.selectedVendor.next(vendor);
  }

  getInvoiceNumber (){
    return this.invoiceNumber.asObservable();
  }

  setInvoiceNumber (inv: String){
   this.invoiceNumber.next(inv);
  }


}
