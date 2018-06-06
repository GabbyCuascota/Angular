import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  entrenadores = [
    {
      entrenadorId: 1,
      nombres: 'Gabriela',
      apellidos: 'Cuascota',
      fechaNacimiento: '2000-01-10',
      numeroMedallas: 5,
      campeonActual: true,
      pokemons: [
        {
          numeroPokemon: 5,
          nombrePokemon: 'chamuco',
          poderEspecialUno: 'sacar la lengua',
          poderEspecialDos: 'comer',
          fechaCaptura: '2015-01-10',
          nivel: 4,
          entrenadorId: 1
        }
      ]
    },
    {
      entrenadorId: 2,
      nombres: 'Estefania',
      apellidos: 'Pazmiño',
      fechaNacimiento: '1984-01-30',
      numeroMedallas: 2,
      campeonActual: false,
      pokemons: [
        {
          numeroPokemon: 7,
          nombrePokemon: 'chamuco2',
          poderEspecialUno: 'dormir',
          poderEspecialDos: 'teletransportarse',
          fechaCaptura: '2013-08-10',
          nivel: 9,
          entrenadorId: 2
        },
        {
          numeroPokemon: 3,
          nombrePokemon: 'chamuco3',
          poderEspecialUno: 'volar',
          poderEspecialDos: 'pelear',
          fechaCaptura: '1931-01-10',
          nivel: 5,
          entrenadorId: 2
        }
      ]
    },
    {
      entrenadorId: 2,
      nombres: 'Sarita',
      apellidos: 'Salazar',
      fechaNacimiento: '1991-01-10',
      numeroMedallas: 90,
      campeonActual: false,
      pokemons: [
        {
          numeroPokemon: 21,
          nombrePokemon: 'Caperusa',
          poderEspecialUno: 'navegar',
          poderEspecialDos: 'escupir',
          fechaCaptura: '207-01-10',
          nivel: 56,
          entrenadorId: 2,
        },
        {
          numeroPokemon: 22,
          nombrePokemon: 'shumaher',
          poderEspecialUno: 'correr',
          poderEspecialDos: 'invisible',
          fechaCaptura: '1991-01-10',
          nivel: 34,
          entrenadorId: 2,
        }
      ]
    },
    {
      entrenadorId: 3,
      nombres: 'Martin',
      apellidos: 'Leon',
      fechaNacimiento: '1978-10-21',
      numeroMedallas: 45,
      campeonActual: true
    },
    {
      entrenadorId: 4,
      nombres: 'María',
      apellidos: 'Felix',
      fechaNacimiento: '2002-01-01',
      numeroMedallas: 34,
      campeonActual: true
    }
  ];
  entrenador = this.entrenadores[0];
  pokemon = this.entrenador.pokemons[0];

  getEntrenador() {
    return this.entrenador;
  }

  alertar(indice) {
    this.entrenador = this.entrenadores[indice];
  }

  alertarDioClickEnBotonCrear(entrenador) {
    this.entrenadores.push(entrenador);
  }

  alertarPokemonDioClickEnBotonCrear(pokemon) {
    this.entrenador.pokemons.push(pokemon);
  }

  alertarPokemonDioClickEnFila(numeroPokemon) {
    const pokemons = this.entrenador.pokemons.filter(person => person.numeroPokemon === numeroPokemon);

    if (pokemons == null)
      return;

    this.pokemon = pokemons[0];
  }
}


export interface Entrenador {
  entrenadorId: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  numeroMedallas: number;
  campeonActual: boolean;
  pokemons: Pokemon[];
}

export interface Pokemon {
  numeroPokemon;
  nombrePokemon;
  poderEspecialUno;
  poderEspecialDos;
  fechaCaptura;
  nivel;
  entrenadorId;
}


/*mostrarSimpleCard(indice) {
    this.entrenadorId = indice;
  }
}*/
