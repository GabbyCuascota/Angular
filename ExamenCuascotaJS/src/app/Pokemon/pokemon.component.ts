import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pockemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  valueDate;

  constructor() {
  }

  clickCrear() {
    alert('crear');
    // execute action
  }

  clickLimpiar() {
    alert('lmpiar');
    // execute action
  }

  ngOnInit() {
  }

}
