import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BarcodeOnlyMessangerServiceService} from '../barcode-only-messanger-service.service';
import {Barcode} from '../barcode';
import { Router } from '@angular/router';
import {RecordCasesService} from '../record-cases.service';
import {RecordSinglesService} from '../record-singles.service';

@Component({
  selector: 'app-barcode-reader',
  templateUrl: './barcode-reader.component.html',
  styleUrls: ['./barcode-reader.component.css']
})
export class BarcodeReaderComponent implements OnInit {
  private unableToSendMessage: boolean = false;
  submitted : boolean = false;
  messageSent : boolean = false;
  lastbcSent: String;
  item: String;
  bcResult : Barcode;
  numofCases: number;
  numofSingles: number;
  

  messageFormNotLoggedIn: FormGroup;

  message= {barcode: ''};

  constructor( private formBuilder: FormBuilder, private messangerService : BarcodeOnlyMessangerServiceService,
    private router: Router, private recordCases: RecordCasesService, private recordSingles: RecordSinglesService) { }

  ngOnInit() {
    this.messageFormNotLoggedIn = this.formBuilder.group({
      barcode: ['', Validators.required]
      });
    this.messangerService.getUnableToSendMessage().subscribe(res => this.unableToSendMessage = res);
    this.messangerService.getMessageSent().subscribe(res => this.messageSent = res);
    this.messangerService.getSubmitted().subscribe(res => this.submitted = res);
    this.messangerService.getItem().subscribe(res=> this.item = res);
    this.messangerService.getBarcodeResult().subscribe(res => this.bcResult = res);
    this.recordCases.getNumberofCasesAsObservable().subscribe(res=> this.numofCases = res);
    this.recordCases.setObservable();
    this.recordSingles.getNumberofSinglesAsObservable().subscribe(res=> this.numofSingles = res);
    this.recordSingles.setObservable();
  }
  ngAfterViewInit(){
    this.focusTo("bcInput");
  }

  get fnli(){ return this.messageFormNotLoggedIn.controls}

  sendMessage(){
    this.messangerService.setSubmitted(true);
    this.lastbcSent = this.fnli.barcode.value;
    this.message = { 
      barcode: this.fnli.barcode.value,
    } 
      if(this.messageFormNotLoggedIn.invalid){
        return;
      }
      this.messangerService.setBarcode(this.message.barcode);
      return this.messangerService.attemptSendMessage(this.message, ()=>{});
  }

  resetFormLite(){
    this.messageFormNotLoggedIn.controls['barcode'].setValue(null);
    this.focusTo("bcInput");
  }

  focusTo(idName: string):void {
    let element = document.getElementById(idName);
    element.focus();
 }

 continue(){
   this.router.navigateByUrl("receiving");
  
 }

}
