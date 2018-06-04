import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  @Input() nombres: string;
  @Input() apellidos: string;
  @Input() fechaNacimiento: string;
  @Input() numeroMedallas: number;
  @Input() campeonActual: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
