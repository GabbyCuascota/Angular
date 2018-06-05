import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CarruselComponent} from './Carrusel/carrusel.component';
import {EntrenadorComponent} from './Entrenador/entrenador.component';
import {PokemonComponent} from './Pokemon/pokemon.component';
import {SimpleCardComponent} from './SimpleCard/simpleCard.component';
import {TablaComponent} from './Tabla/tabla.component';
import {EstadoComponent} from './Estado/estado.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/primeng';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    EntrenadorComponent,
    PokemonComponent,
    SimpleCardComponent,
    TablaComponent,
    EstadoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    AccordionModule,
    FormsModule
    // MenuItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
