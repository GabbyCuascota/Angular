import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html',
  styleUrls: ['./entrenador.component.css']
})
export class EntrenadorComponent implements OnInit {
  @Input() arreglo: [any];
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
    this.arreglo.push(new Entrenador(this.nombreng, this.campeong));
  }

  limpiar() {
    this.nombreng = '';
    this.campeong = false;
  }
}

class Entrenador {
  constructor(public Nombres: string,
              public CampeonActual: boolean) {

  }
}
