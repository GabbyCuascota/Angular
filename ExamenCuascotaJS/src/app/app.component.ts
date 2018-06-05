import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arregloEntrenador2 = [];
  entrenadorId: 0;

  arregloEntrenador = [
    {
      nombres: 'Gabriela',
      apellidos: 'Cuascota',
      fechaNacimiento: '10/07/1991',
      numeroMedallas: 5,
      campeonActual: true,
      IdEntrenador: 1,
      Pokemon: [
        {
          numeroPokemon: 5,
          nombrePokemon: 'chamuco',
          poderEspecialUno: 'sacar la lengua',
          poderEspecialDos: 'comer',
          fechaCaptura: '17/03/2018',
          nivel: 4,
          ENTRENADORID: 1
        }
      ]
    },
    {
      nombres: 'Estefania',
      apellidos: 'Pazmiño',
      fechaNacimiento: '10/07/1990',
      numeroMedallas: 2,
      campeonActual: false,
      IdEntrenador: 2,
      Pokemon: [
        {
          numeroPokemon: 7,
          nombrePokemon: 'chamuco2',
          poderEspecialUno: 'dormir',
          poderEspecialDos: 'teletransportarse',
          fechaCaptura: '17/01/2013',
          nivel: 9,
          ENTRENADORID: 2
        },
        {
          numeroPokemon: 3,
          nombrePokemon: 'chamuco3',
          poderEspecialUno: 'volar',
          poderEspecialDos: 'pelear',
          fechaCaptura: '17/01/2010',
          nivel: 5,
          ENTRENADORID: 2
        },
      ]
    }
  ];

  mostrarSimpleCard(indice) {
    this.entrenadorId = indice;
  }
}
