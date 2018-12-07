import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessangerService} from '../messanger.service';
import {RecordCasesService} from '../record-cases.service';
import {RecordSinglesService} from '../record-singles.service';

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
  vendorInput: String ='';
  numofCases: number;
  numofSingles: number;

  messageFormNotLoggedIn: FormGroup;

  message= {barcode: '', vendor: '', itemVendNo: '', numberofCases:'', numberofSingles:'', invoiceNumber:'' };

  constructor( private formBuilder: FormBuilder, private messangerService : MessangerService,
    private recordCases: RecordCasesService, private recordSingles: RecordSinglesService) { }

  ngOnInit() {
    this.messageFormNotLoggedIn = this.formBuilder.group({
      barcode: ['', Validators.required],
      vendor: ['', [Validators.required]],
      itemVendNo: [''],
      quantity: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      invoiceNumber: ['', [Validators.required]]
      });
    this.messangerService.getUnableToSendMessage().subscribe(res => this.unableToSendMessage = res);
    this.messangerService.getMessageSent().subscribe(res => this.messageSent = res);
    this.messangerService.getSubmitted().subscribe(res => this.submitted = res);
    this.messangerService.getVendor().subscribe(res=> this.vendorInput = res);
    this.recordCases.getNumberofCasesAsObservable().subscribe(res=> this.numofCases = res);
    this.recordCases.setObservable();
    this.recordSingles.getNumberofSinglesAsObservable().subscribe(res=> this.numofSingles = res);
    this.recordSingles.setObservable();
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
      this.message = { 
          barcode: this.fnli.barcode.value, 
          vendor: this.fnli.vendor.value,
          itemVendNo: this.fnli.itemVendNo.value,
          numberofCases: this.fnli.quantity.value,
          numberofSingles: 'null',
          invoiceNumber: this.fnli.invoiceNumber.value
        };
        this.recordCases.addToNumOfCases(this.fnli.quantity.value);
      }
      if(this.eachSelected){
        this.message = { 
          barcode: this.fnli.barcode.value, 
          vendor: this.fnli.vendor.value,
          itemVendNo: this.fnli.itemVendNo.value,
          numberofCases: 'null',
          numberofSingles: this.fnli.quantity.value,
          invoiceNumber: this.fnli.invoiceNumber.value
        };
        this.recordSingles.addToNumOfSingles(this.fnli.quantity.value);
      }
      this.resetFormLite();
      return this.messangerService.attemptSendMessage(this.message, ()=>{});

  }

  resetFormLite(){
    this.messageFormNotLoggedIn.controls['quantity'].setValue(null);
    this.selectNiether();
  }

  selectCase(){
    this.caseSelected=true;
    this.eachSelected=false;
    this.missingUnitSelection=false;
    this.messageFormNotLoggedIn.controls['barcode'].setValue(null);
    this.focusTo("quantity");

  }
  selectSingle(){
    this.caseSelected=false;
    this.eachSelected=true;
    this.missingUnitSelection=false;
    this.messageFormNotLoggedIn.controls['barcode'].setValue(null);
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