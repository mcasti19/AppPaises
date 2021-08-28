import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

  constructor(private paisService: PaisService) { }

  regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva: string = '';
  region: string = "";
  paises: Country[] = [];

  sugerencias(termino: string) {
  }

  activarRegion(region: string) {
    this.regionActiva = region
    this.paisService.buscarRegion(region)
      .subscribe((paises) => {
        this.paises = paises
      });
  }

  getClassCSS(region: string) {
    return (region === this.regionActiva)
      ? 'btn btn-primary'
      : 'btn btn-outline-primary'
  }
}
