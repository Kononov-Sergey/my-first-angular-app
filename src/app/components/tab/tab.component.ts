import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent implements OnInit {
  @Input() listOfTabs: string[];

  @Input() currentTab: string;

  @Output() changeTabEvent = new EventEmitter<string>();

  changeCurrentTabHandler(value: string) {
    this.changeTabEvent.emit(value);
  }

  ngOnInit() {
    this.currentTab = this.listOfTabs[0];
  }
}
