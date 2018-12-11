import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Vendors} from './vendors';
import {CurrentVendor} from './current-vendor';


@Injectable({
  providedIn: 'root'
})
export class GetVendorsService {
  private vendorSubject = new BehaviorSubject([]);
  vendorList : Vendors[];
  private messageURL = "/api/vendors"
  private setVendorURL = "api/setCurrentVendor"
  private getVendorURL = "api/getCurrentVendor"
  private selectedVendor = new BehaviorSubject<Vendors>(null);
  private invoiceNumber = new BehaviorSubject<String>(null);
  private currentVendor : CurrentVendor ={
    vendorName: '',
    invoiceNumber: '',
  }

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

  setCurrentVendor(){
    this.selectedVendor.asObservable().subscribe((res : Vendors)=> this.currentVendor.vendorName = res.name);
    this.invoiceNumber.asObservable().subscribe((res)=> this.currentVendor.invoiceNumber = res);
    this.http.post(this.setVendorURL, this.currentVendor, {headers: new HttpHeaders(), responseType: 'text' as 'text'})
    .subscribe((res) =>{
      console.log(res);
    });
  }

  getCurrentVendor(){
    this.http.get(this.getVendorURL, {headers: new HttpHeaders()})
    .subscribe((res: CurrentVendor) =>{
      var vendor: Vendors;
      this.vendorSubject.asObservable().subscribe((vendorList)=>{
        vendor = vendorList.find( x=>  x.name === res.vendorName);
      })
      this.selectedVendor.next(vendor);
      this.setInvoiceNumber(res.invoiceNumber);
      console.log(res);
    });

  }


}
