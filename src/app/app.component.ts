import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = '# todo';

  listOfTabs = ['All', 'Active', 'Completed'];

  currentTab = 'All';

  setCurrentTab(tabName: string) {
    this.currentTab = tabName;
  }
}
