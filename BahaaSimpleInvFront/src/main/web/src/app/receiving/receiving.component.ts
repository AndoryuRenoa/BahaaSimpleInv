import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessangerService} from '../messanger.service';

@Component({
  selector: 'app-receiving',
  templateUrl: './receiving.component.html',
  styleUrls: ['./receiving.component.css']
})
export class ReceivingComponent implements OnInit {
  private unableToSendMessage: boolean = false;
  submitted : boolean = false;

  messageFormNotLoggedIn: FormGroup;

  message= {barcode: '', vendor: '', itemVendNo: '', quantity:'', cost:'' };

  constructor( private formBuilder: FormBuilder, private messangerService : MessangerService) { }

  ngOnInit() {
    this.messageFormNotLoggedIn = this.formBuilder.group({
      barcode: ['', Validators.required],
      vendor: ['', [Validators.required]],
      itemVendNo: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      cost: ['', [Validators.required]]
      });
    //this.messangerService.getUnableToSendMessage().subscribe(res => this.unableToSendMessage = res);
  }

  get fnli(){ return this.messageFormNotLoggedIn.controls}

  sendMessage(){
    this.submitted = true;
      this.message = { 
        barcode: this.fnli.barcode.value, 
        vendor: this.fnli.vendor.value,
        itemVendNo: this.fnli.itemVendorNo.value,
        quantity: this.fnli.quantity.value,
        cost: this.fnli.cost.value,
      };
      if(this.messageFormNotLoggedIn.invalid){
        return;
      }
      
      return this.messangerService.attemptSendMessage(this.message, ()=>{});

  }
    

    

}