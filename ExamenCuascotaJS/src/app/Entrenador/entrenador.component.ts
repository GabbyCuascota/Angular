import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html',
  styleUrls: ['./entrenador.component.css']
})
export class EntrenadorComponent implements OnInit {
  @Input() arregloEntrenador: [any];
  public nombreng: string;
  apellidong: string;
  fechang: string;
  numeroMedallasng: number;
  campeong: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  crear() {
    console.log(`${this.nombreng}`);
    console.log(`${this.campeong}`);
    this.arregloEntrenador.push(new Entrenadore(this.nombreng, this.apellidong, this.fechang, this.numeroMedallasng, this.campeong));
  }

  limpiar() {
    this.nombreng = '';
    this.apellidong = '';
    this.fechang =  '';
    this.numeroMedallasng = 0;
    this.campeong = false;
  }
}

class Entrenadore {
  constructor(public NombresEntrenador: string,
              public ApellidosEntrenador: string,
              public fechaEntrenador: string,
              public NumeroMedallasEntrenador: number,
              public CampeonActualEntrenador: boolean) {

  }
}
