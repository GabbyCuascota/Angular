import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ], //definir todos los componentes a usarse
  //definir todos los pipes -> transforman datos
  imports: [
    BrowserModule,
    FormsModule
  ],  //definimos todos los módulos
  providers: [],  //los servicios
  bootstrap: [AppComponent] //componente principal
})
export class AppModule { }

