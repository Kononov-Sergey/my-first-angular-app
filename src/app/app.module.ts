import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './components/tab/tab.component';
import { ContainerComponent } from './components/container/container.component';
import { AddInputComponent } from './components/add-input/add-input.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    ContainerComponent,
    AddInputComponent,
    AddBtnComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
