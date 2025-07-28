import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { TwoBind } from './two-bind/two-bind';
import { StructConditional } from './struct-conditional/struct-conditional';
import { StructLoop } from './struct-loop/struct-loop';
import { StructStyle } from './struct-style/struct-style';

@NgModule({
  declarations: [
    App,
    TwoBind,
    StructConditional,
    StructLoop,
    StructStyle
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
