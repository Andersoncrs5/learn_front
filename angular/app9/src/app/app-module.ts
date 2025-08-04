import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CardTextTitle } from './components/card/directive/card-text-title';
import { CardTextSubtitle } from './components/card/directive/card-text-subtitle';
import { CardTextDescription } from './components/card/directive/card-text-description';

@NgModule({
  declarations: [
    App,
    CardTextTitle,
    CardTextSubtitle,
    CardTextDescription
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
