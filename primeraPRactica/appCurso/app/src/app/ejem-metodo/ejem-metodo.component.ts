import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejem-metodo',
  templateUrl: './ejem-metodo.component.html',
  styleUrls: ['./ejem-metodo.component.css']
})
export class EjemMetodoComponent implements OnInit {

  puntuacion = 9;

  constructor() { }

  ngOnInit() {
  }

  getPuntuacion() {
    return this.puntuacion;
  }

}
