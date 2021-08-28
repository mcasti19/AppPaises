import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-imput',
  templateUrl: './pais-imput.component.html',
  styles: [
  ]
})
export class PaisImputComponent implements OnInit {

  constructor() { }

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = "";

  debouncer: Subject<string> = new Subject();

  termino: string = "";

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        // console.log("Debouncer:", valor);
        this.onDebounce.emit(valor);

      })
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }

}
