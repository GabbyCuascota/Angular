import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejercicio-boton',
  templateUrl: './ejercicio-boton.component.html',
  styleUrls: ['./ejercicio-boton.component.css']
})
export class EjercicioBotonComponent implements OnInit {
  colorActual = 'Rojo';
  claseColor = 'alert alert-danger';

  constructor() {
  }

  ngOnInit() {
  }

  cambiarColor() {
    if (this.colorActual === 'Rojo') {
      this.colorActual = 'Amarillo';
      this.claseColor = 'alert alert-warning';
    } else {
      if (this.colorActual === 'Amarillo') {
        this.colorActual = 'Verde';
        this.claseColor = 'alert alert-success';
      } else {
        if (this.colorActual === 'Verde') {
          this.colorActual = 'Rojo';
          this.claseColor = 'alert alert-danger';
        }
      }
    }


  }

}


