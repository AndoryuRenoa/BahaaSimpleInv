import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetVendorsService} from '../get-vendors.service';
import {Vendors} from '../vendors';


@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  listOfVendors : Vendors[];
  selectedOption : Vendors;
  placeHolder: Vendors = {name:"please select vendor", vendorNo: null} as Vendors;
  nothingSelected : boolean = false;  
  invoiceInput: string;


  constructor(private getVendors: GetVendorsService,  private router: Router) { }

  ngOnInit() {
    this.selectedOption = this.placeHolder;
    this.getVendors.getFromServer();
    this.getVendors.getVendorSubject().subscribe((res)=> this.listOfVendors = res);
  }
  continue(){
    if (this.selectedOption.vendorNo != null && this.invoiceInput != null){
      this.getVendors.setSelectedVendor(this.selectedOption);
      this.getVendors.setInvoiceNumber(this.invoiceInput);
      this.getVendors.setCurrentVendor();
      this.router.navigateByUrl("reader");
    } else{
      this.nothingSelected = true;

    }
  }
  print(){
    console.log("vendorNo "+this.selectedOption.vendorNo);
    console.log("invoice "+this.invoiceInput)
  }

}
