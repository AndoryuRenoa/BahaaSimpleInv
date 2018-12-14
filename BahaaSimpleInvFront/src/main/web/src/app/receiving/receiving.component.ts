import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessangerService} from '../messanger.service';
import {RecordCasesService} from '../record-cases.service';
import {RecordSinglesService} from '../record-singles.service';
import {BarcodeOnlyMessangerServiceService} from '../barcode-only-messanger-service.service';
import {GetVendorsService} from '../get-vendors.service';
import {Vendors} from '../vendors';
import {Barcode} from '../barcode';
import {Message} from '../message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receiving',
  templateUrl: './receiving.component.html',
  styleUrls: ['./receiving.component.css']
})
export class ReceivingComponent implements OnInit {
  private unableToSendMessage: boolean = false;
  submitted : boolean = false;
  messageSent : boolean = false;
  caseSelected: boolean = false;
  eachSelected: boolean = false;
  missingUnitSelection: boolean = true;
  numofCases: number;
  numofSingles: number;
  vendor: Vendors;
  itemVendNo: String;
  barcode: String;
  caseSize: String;
  invoiceNumber: String;
  barcodeResult : Barcode;
  lasCost: Number;


  messageFormNotLoggedIn: FormGroup;

  message : Message;

  constructor( private formBuilder: FormBuilder, private messangerService : MessangerService,
    private recordCases: RecordCasesService, private recordSingles: RecordSinglesService,
    private barcodeService: BarcodeOnlyMessangerServiceService, private vendorService: GetVendorsService,
    private router: Router ) { }

  ngOnInit() {
    this.messageFormNotLoggedIn = this.formBuilder.group({
      barcode: [''],
      vendor: [''],
      quantity: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      invoiceNumber: ['']
      });
    this.messangerService.getUnableToSendMessage().subscribe(res => this.unableToSendMessage = res);
    this.messangerService.getMessageSent().subscribe(res => this.messageSent = res);
    this.messangerService.getSubmitted().subscribe(res => this.submitted = res);
    this.vendorService.getSelectedVendor().subscribe(res=> this.vendor = res);
    this.vendorService.getInvoiceNumber().subscribe(res=> this.invoiceNumber=res);
    this.barcodeService.getBarcode().subscribe(res=> this.barcode = res);
    this.recordCases.getNumberofCasesAsObservable().subscribe(res=> this.numofCases = res);
    this.recordCases.setObservable();
    this.recordSingles.getNumberofSinglesAsObservable().subscribe(res=> this.numofSingles = res);
    this.recordSingles.setObservable();
    this.barcodeService.getBarcodeResult().subscribe(res => this.barcodeResult = res);
    this.vendorService.getCurrentVendor();
    if (this.vendor.vendorNo == null){
      alert("The device that started this session never set the vendor for this session!");
    }
  }

  get fnli(){ return this.messageFormNotLoggedIn.controls}

  sendMessage(){
    this.messangerService.setSubmitted(true);
    this.messangerService.setVendor(this.fnli.vendor.value);
    if (this.missingUnitSelection){
      return;
    }
    if(this.messageFormNotLoggedIn.invalid){
      return;
    }
    if(this.caseSelected){
      let multipliedQuant : Number = +this.barcodeResult.unitMultiplier*this.fnli.quantity.value;
      this.message = { 
          barcode: this.barcode, 
          vendor: this.vendor.name,
          quantity: multipliedQuant,
          invoiceNumber: this.invoiceNumber,
          lastCost: this.barcodeResult.lastCost, 
          itemNo: this.barcodeResult.itemNo    
        };
        this.recordCases.addToNumOfCases(this.fnli.quantity.value);
      }
      if(this.eachSelected){
        this.message = { 
          barcode: this.barcode, 
          vendor: this.vendor.name,
          quantity: this.fnli.quantity.value,
          invoiceNumber: this.invoiceNumber,
          lastCost: this.barcodeResult.lastCost, 
          itemNo: this.barcodeResult.itemNo
        };
        this.recordSingles.addToNumOfSingles(this.fnli.quantity.value);
      }
      this.messangerService.attemptSendMessage(this.message, ()=>{});
      this.resetFormLite();
      this.barcodeService.setBarcodeResultToNull();
      this.router.navigateByUrl("reader");
  }

  resetFormLite(){
    this.messageFormNotLoggedIn.controls['quantity'].setValue(null);
    this.selectNiether();
  }

  selectCase(){
    this.caseSelected=true;
    this.eachSelected=false;
    this.missingUnitSelection=false;
    this.focusTo("quantity");

  }
  selectSingle(){
    this.caseSelected=false;
    this.eachSelected=true;
    this.missingUnitSelection=false;
    this.focusTo("quantity");
  }
  selectNiether(){
    this.caseSelected=false;
    this.eachSelected=false;
    this.missingUnitSelection=true;
  }

  focusTo(idName: string):void {
    let element = document.getElementById(idName);
    element.focus();
 }

    

}