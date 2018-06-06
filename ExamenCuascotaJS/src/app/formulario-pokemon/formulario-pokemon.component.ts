import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-pokemon',
  templateUrl: './formulario-pokemon.component.html',
  styleUrls: ['./formulario-pokemon.component.css']
})

export class FormularioPokemonComponent implements OnInit {

  @Input() numeroPokemon: number;
  @Input() nombrePokemon: string;
  @Input() poderEspecialUno: string;
  @Input() poderEspecialDos: string;
  @Input() fechaCaptura: string;
  @Input() nivel: number;
  @Input() entrenadorId: number;

  @Output() dioClickEnBotonCrear: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  hizoClickEnBotonLimpiar() {
    this.numeroPokemon = 0;
    this.nombrePokemon = '';
    this.poderEspecialUno = '';
    this.poderEspecialDos = '';
    this.fechaCaptura = '';
    this.nivel = 0;
  }

  hizoClickEnBotonCrear() {
    const pokemon = {
      numeroPokemon: this.numeroPokemon,
      nombrePokemon: this.nombrePokemon,
      poderEspecialUno: this.poderEspecialUno,
      poderEspecialDos: this.poderEspecialDos,
      fechaCaptura: this.fechaCaptura,
      nivel: this.nivel,
      entrenadorId: this.entrenadorId,
    };
    this.dioClickEnBotonCrear.emit(pokemon);
  }
}
