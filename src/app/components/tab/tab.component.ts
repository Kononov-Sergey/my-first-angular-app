import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent implements OnInit {
  @Input() listOfTabs: string[];

  currentTab: string = '';

  ngOnInit() {
    this.currentTab = this.listOfTabs[0];
  }
}
