import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //selector o etiqueta
  templateUrl: './app.component.html', //estructura
  styleUrls: ['./app.component.css']  //estilos
})
export class AppComponent{
mostrarHola = true;
arregloNumeros = [1, 2, 3, 4, 5, 6];
  arregloPeliculas = [
    {
      nombre: 'Tomb Raider',
      descripcion: 'Alicia Vikander, Walton Goggins',
      esEstreno: true,
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_FOh_xn19xgXf_Uq5OK3WWzAmoVoZLHCO2vjFd4LKaxijU59eg'
    },
    {
      nombre: 'Ready Player One',
      descripcion: 'Tye Sheridan, Olivia Cooke',
      esEstreno: false,
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFQprASMSiRnRHYgQl5sHoGr8GiMI9IB2XVIQP_tmD61KFgUY'
    },
  ]



















}

 /* nombre = 'Gabriela';
  apellido = 'Cuascota';
  edad = 26;
  sueldo = 1;
  fechaNacimiento = new Date('1991-07-10');
  nombreBoton = 'Cambiar color';
  nombreClase = 'sa-titulo';
  clase= 'papa';

  cambiarClaseDeTitulo() {
    const nombreClaseEsTitulo = this.nombreClase === 'sa-titulo';
    if (nombreClaseEsTitulo) {
      this.nombreClase = 'sa-subtitulo';
    } else {
      this.nombreClase = 'sa-titulo';
    }
  }
  aplicarClase(algo){
    console.log('algo', algo.value);
  }*/

