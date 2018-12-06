import { Component, OnInit } from '@angular/core';
import {PrintReportService} from '../print-report.service';
import {IsReceivingStartedService} from '../is-receiving-started.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isReceivingStarted: boolean = false;


  constructor(private report: PrintReportService, private isReceiving : IsReceivingStartedService ) { }

  ngOnInit() {
    this.isReceivingStarted=this.isReceiving.receivingStarted
  }

  printReport(){
    if(confirm("Are you sure you are ready to finalize the receiving report?")){
      console.log("attempting to print");
      this.report.requestReport();
      this.isReceiving.receivingStarted=false;
      this.isReceivingStarted=false;  
    }
  }
  startReceiving(){
    this.isReceiving.receivingStarted=true;
    this.isReceiving.goToReceiving();

  }

}
