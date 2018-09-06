import { Component, Input } from '@angular/core';
// import { TabsComponent } from 'src/app/tabs/tabs/tabs.component';

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent { // implements OnInit {
  @Input() selected: boolean;
  @Input() title: string;

  // constructor(private tabs: TabsComponent) { }
  constructor() { }

  // ngOnInit() {
  //   this.tabs.addTab(this);
  // }

}
