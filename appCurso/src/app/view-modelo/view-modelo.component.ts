import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../modelos/alumno.model';

@Component({
  selector: 'app-view-modelo',
  templateUrl: './view-modelo.component.html',
  styleUrls: ['./view-modelo.component.css']
})
export class ViewModeloComponent implements OnInit {

  alumno1 = new Alumnos(1, 'Roberto', 'Rodriguez', 'S/C de Tenerife');


  constructor() { }

  ngOnInit() {
  }

}
