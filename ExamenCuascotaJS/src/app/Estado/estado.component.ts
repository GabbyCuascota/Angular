import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  @Input() estado: [any];
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  numeroMedallas: number;
  campeonActual: boolean;

  tiles = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
    {text: 'Five', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Six', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Seven', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Eigth', cols: 1, rows: 2, color: '#DDBDF1'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
