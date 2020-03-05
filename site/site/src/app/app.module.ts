import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';

import { ObjetivoComponent } from './objetivo/objetivo.component'
import { HelloComponent } from './hello/hello.component'
import { ClienteModule } from './cliente/cliente.module';


@NgModule({
  declarations: [
    AppComponent, ObjetivoComponent, HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
