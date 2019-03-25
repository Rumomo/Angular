import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-directiva-ngstyle',
  templateUrl: './ej-directiva-ngstyle.component.html',
  styleUrls: ['./ej-directiva-ngstyle.component.css']
})
export class EjDirectivaNGStyleComponent implements OnInit {

  puntuacion: number;

  constructor() { }

  ngOnInit() {
  }

  setColor() {
    return this.puntuacion >= 5 ? 'green' : 'red';
  }

}
