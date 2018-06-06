import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from '../app.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements OnInit {

  @Input() pokemons: Pokemon[];

  @Output() dioClickEnFila: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  hizoClickEnFila(numeroPokemon) {
    this.dioClickEnFila.emit(numeroPokemon);
  }
}

/*
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  tablas: any[];

  ngOnInit() {
    this.tablas = [
      {field: 'numeroPokemon', header: 'numeroPokemon'},
      {field: 'nombrePokemon', header: 'nombrePokemon'},
      {field: 'poderEspecialUno', header: 'poderEspecialUno'},
      {field: 'poderEspecialDos', header: 'poderEspecialDos'},
      {field: 'fechaCaptura', header: 'fechaCaptura'},
      {field: 'nivel', header: 'nivel'},
      {field: 'entrenadorId', header: 'entrenadorId'}
    ];
  }
 /* tablas: Tabla[];
  cols: any[];
  constructor(private tablaService: TablaService) {
  }
  ngOnInit() {
    this.tablaService.getTablasSmall().then(tablas => this.tablas = tablas);

    this.cols = [
      {field: 'numeroPokemon', header: 'numeroPokemon'},
      {field: 'nombrePokemon', header: 'nombrePokemon'},
      {field: 'poderEspecialUno', header: 'poderEspecialUno'},
      {field: 'poderEspecialDos', header: 'poderEspecialDos'},
      {field: 'fechaCaptura', header: 'fechaCaptura'},
      {field: 'nivel', header: 'nivel'},
      {field: 'entrenadorId', header: 'entrenadorId'}
    ];
  }
}
*/
