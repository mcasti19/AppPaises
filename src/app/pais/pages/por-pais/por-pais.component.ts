import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  constructor(private paisService: PaisService) {

  }

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
      .subscribe((paises) => {

        console.log("Paises: ", paises);
        this.paises = paises;

      }, (err) => {

        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.slice(0, 5),
        (err) => this.paisesSugeridos = []
      );
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
