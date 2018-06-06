import {EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Component} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() entrenadorId: number;
  @Input() nombres: string;
  @Input() apellidos: string;
  @Input() fechaNacimiento: string;
  @Input() numeroMedallas: number;
  @Input() campeonActual: boolean;

  @Output() dioClickEnBotonCrear: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  hizoClickEnBotonLimpiar() {
    this.entrenadorId = 0;
    this.nombres = '';
    this.apellidos = '';
    this.fechaNacimiento = '';
    this.numeroMedallas = 0;
    this.campeonActual = false;
  }

  hizoClickEnBotonCrear() {
    const entrenador = {
      entrenadorId: this.entrenadorId,
      nombres: this.nombres,
      apellidos: this.apellidos,
      fechaNacimiento: this.fechaNacimiento,
      numeroMedallas: this.numeroMedallas,
      campeonActual: this.campeonActual
    };
    this.dioClickEnBotonCrear.emit(entrenador);
  }
}
