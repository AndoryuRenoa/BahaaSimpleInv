import { Component, OnInit } from '@angular/core';
import {PrintReportService} from '../print-report.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private report: PrintReportService) { }

  ngOnInit() {
  }

  printReport(){
    console.log("attempting to print");
    this.report.requestReport();
  }

}
