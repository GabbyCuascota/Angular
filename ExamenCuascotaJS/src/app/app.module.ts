import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CarruselComponent} from './carrusel/carrusel.component';


import {TablaComponent} from './Tabla/tabla.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/primeng';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CalendarModule} from 'primeng/calendar';
import {FormularioComponent} from './formulario/formulario.component';
import {VistaDetalladaComponent} from './vista-detallada.component/vista-detallada.component';
import {VistaPreviaComponent} from './vista-previa/vista-previa.component';
import {FormularioEntrenadorComponent} from './formulario-entrenador/formulario-entrenador.component';
import {FormularioPokemonComponent} from './formulario-pokemon/formulario-pokemon.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    TablaComponent,
    FormularioComponent,
    VistaDetalladaComponent,
    VistaPreviaComponent,
    FormularioEntrenadorComponent,
    FormularioPokemonComponent
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
    FormsModule,
    TableModule,
    MatGridListModule,
    MatDatepickerModule,
    CalendarModule,
    MatNativeDateModule,
    MatCardModule,


    // MenuItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
