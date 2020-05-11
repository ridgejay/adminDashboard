import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
  }

  toggleSideBar() {
    this.toggleSidebarForMe.emit();
     HC_exporting(Highcharts);

     setTimeout(() => {
       window.dispatchEvent(new Event("resize"));
     }, 300);
  }

}
