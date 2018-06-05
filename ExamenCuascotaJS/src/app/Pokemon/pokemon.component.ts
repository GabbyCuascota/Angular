import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pockemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() numeroPokemon: number;
  @Input() nombrePokemon: string;
  @Input() poderEspecialUno: string;
  @Input() poderEspecialDos: string;
  @Input() fechaCaptura: string;
  @Input() nivel: number;
  @Input() entrenadorId: number;

  constructor() {
  }
  ngOnInit() {
  }

}
