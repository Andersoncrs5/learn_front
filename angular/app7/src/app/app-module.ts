import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Diretive } from './diretive/diretive';
import { HighlightDirective } from './diretives/highlight.directive';
import { DisabledDirective } from './diretives/disabled.directive';
import { StyleDirective } from './diretives/style.directive';

@NgModule({
  declarations: [
    App,
    Diretive,
    HighlightDirective,
    DisabledDirective,
    StyleDirective
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
