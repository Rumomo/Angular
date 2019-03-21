import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-property-binding',
  templateUrl: './ej-property-binding.component.html',
  styleUrls: ['./ej-property-binding.component.css']
})
export class EjPropertyBindingComponent implements OnInit {

  texto = 'Escribe algo';

  constructor() {
    setTimeout(() => {
      this.texto = 'por favor';
    }, 3000);

   }

  ngOnInit() {
  }



}
