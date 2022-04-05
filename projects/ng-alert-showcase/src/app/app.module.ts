import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSimpleAlertModule } from 'projects/ng-simple-alert/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSimpleAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
