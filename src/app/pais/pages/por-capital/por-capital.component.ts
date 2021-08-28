import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
    `
      li {
        cursor:pointer;
      }
    `
  ]
})
export class PorCapitalComponent {

  constructor(private paisService: PaisService) { }

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];

  buscar(termino: string) {
    this.hayError = false;

    this.termino = termino;
    this.paisService.buscarCapital(termino)
      .subscribe((paises) => {

        console.log("paises: ", paises);
        this.paises = paises;

      }, (err) => {

        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;

    this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos = paises.slice(0, 5))
  }
}
