import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activateRoude: ActivatedRoute,
    private PaisService: PaisService
  ) { }

  pais!: Country;

  ngOnInit(): void {

    this.activateRoude.params
      .pipe(
        switchMap((params) => this.PaisService.getPaisCode(params.id)),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais)

    // this.activateRoude.params
    //   .subscribe(({ id }) => {
    //     console.log(id);
    //     this.PaisService.getPaisCode(id)
    //       .subscribe(pais => {
    //         console.log(pais);
    //       })
    //   })
  }

}
