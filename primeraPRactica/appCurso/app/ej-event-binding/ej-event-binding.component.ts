import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-event-binding',
  templateUrl: './ej-event-binding.component.html',
  styleUrls: ['./ej-event-binding.component.css']
})
export class EjEventBindingComponent implements OnInit {

  texto = 'Originalmente el texto se carga así';

  constructor() { }

  ngOnInit() {
  }


  modTexto() {
    this.texto = 'Al pulsar el botón el texto se muestra así';
  }

}
