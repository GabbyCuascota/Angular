import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //selector o etiqueta
  templateUrl: './app.component.html', //estructura
  styleUrls: ['./app.component.css']  //estilos
})
export class AppComponent{
  nombre = 'Gabriela';
  apellido = 'Cuascota';
  edad = 26;
  sueldo = 1;
  fechaNacimiento = new Date('1991-07-10');
  nombreBoton = 'Cambiar color';
  nombreClase = 'sa-titulo';

  cambiarClaseDeTitulo() {
    const nombreClaseEsTitulo = this.nombreClase === 'sa-titulo';
    if (nombreClaseEsTitulo) {
      this.nombreClase = 'sa-subtitulo';
    } else {
      this.nombreClase = 'sa-titulo';
    }
  }
}
