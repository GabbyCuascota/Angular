import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PeliculaBannerComponent } from './peliculas/pelicula-banner/pelicula-banner.component';
import { EjercicioBotonComponent } from './Ejercicio/ejercicio-boton/ejercicio-boton.component';
import { GrillaComponent } from './grilla/grilla.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent,
    EjercicioBotonComponent,
    GrillaComponent
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

