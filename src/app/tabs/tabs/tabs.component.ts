import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
 tabs: Array<TabComponent> = [];

  constructor() { }

  ngOnInit() {

  }

  addTab(tab: TabComponent) {
    this.tabs.push(tab);
    this.select(this.tabs[0]);
  }

  select(tab: TabComponent) {
    this.tabs.forEach(x => x.selected = false);
    tab.selected = true;
  }

}
