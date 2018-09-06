import { Component, OnInit, AfterContentInit, ContentChildren, QueryList  } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) // ask for type component or variable name
  tabs: QueryList<TabComponent>;
 // tabs: Array<TabComponent> = [];

  constructor() { }

  ngOnInit() {}

  ngAfterContentInit() {
    this.select(this.tabs.first);
  }

  // addTab(tab: TabComponent) {
  //   this.tabs.push(tab);
  //   this.select(this.tabs[0]);
  // }

  select(tab: TabComponent) {
    this.tabs.forEach(x => x.selected = false);
    tab.selected = true;
  }

}
