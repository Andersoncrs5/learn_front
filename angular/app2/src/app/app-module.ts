import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Bind } from './bind/bind';
import { BindAttribute } from './bind-attribute/bind-attribute';
import { BindStyle } from './bind-style/bind-style';

@NgModule({
  declarations: [
    App,
    Bind,
    BindAttribute,
    BindStyle
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
