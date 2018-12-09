import { Component, OnInit } from '@angular/core';
import {PrintReportService} from '../print-report.service';
import {IsReceivingStartedService} from '../is-receiving-started.service';
import {GetVendorsService} from '../get-vendors.service';
import { Router } from '@angular/router';
import {RecordCasesService} from '../record-cases.service';
import {RecordSinglesService} from '../record-singles.service';
import {BarcodeOnlyMessangerServiceService} from '../barcode-only-messanger-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isReceivingStarted: boolean = false;


  constructor(private report: PrintReportService, private isReceiving : IsReceivingStartedService,
    private getVendors:GetVendorsService, private router: Router, private recordCases: RecordCasesService, 
    private recordSingles: RecordSinglesService, private barcodeService: BarcodeOnlyMessangerServiceService ) { }

  ngOnInit() {
    this.isReceivingStarted=this.isReceiving.receivingStarted
    this.getVendors.getFromServer();
  }

  printReport(){
    if(confirm("Are you sure you are ready to finalize the receiving report? Creating the report will result "+
    "in clearing the current work from memory in preparation for the next report")){
      console.log("attempting to print");
      this.report.requestReport();
      this.recordCases.setNumberofCases(0);
      this.recordSingles.setNumberofSingles(0);
      this.barcodeService.setBarcodeResultToNull();
      this.isReceiving.receivingStarted=false;
      this.isReceivingStarted=false;  
    }
  }
  startReceiving(){
    this.isReceiving.receivingStarted=true;
    this.router.navigateByUrl("vendors");

  }
  continueReceiving(){
    this.router.navigateByUrl("reader");
  }

}
