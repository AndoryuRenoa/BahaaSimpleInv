import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BarcodeOnlyMessangerServiceService} from '../barcode-only-messanger-service.service';

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
  item: String

  messageFormNotLoggedIn: FormGroup;

  message= {barcode: ''};

  constructor( private formBuilder: FormBuilder, private messangerService : BarcodeOnlyMessangerServiceService) { }

  ngOnInit() {
    this.messageFormNotLoggedIn = this.formBuilder.group({
      barcode: ['', Validators.required]
      });
    this.messangerService.getUnableToSendMessage().subscribe(res => this.unableToSendMessage = res);
    this.messangerService.getMessageSent().subscribe(res => this.messageSent = res);
    this.messangerService.getSubmitted().subscribe(res => this.submitted = res);
    this.messangerService.getItem().subscribe(res=> this.item = res);
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
   console.log("continue pressed")
 }

}
