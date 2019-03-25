import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../modelos/alumno.model';

@Component({
  selector: 'app-ej-array-objetos',
  templateUrl: './ej-array-objetos.component.html',
  styleUrls: ['./ej-array-objetos.component.css']
})
export class EjArrayObjetosComponent implements OnInit {

  public alumnos: Array<Alumnos> = [
    {id: 1, nombre: 'Roberto', apellido: 'Rodriguez', ciudad: 'San Jose'},
    {id: 2, nombre: 'Francisco Manuel', apellido: 'Dionis', ciudad: 'La Laguna'},
    {id: 3, nombre: 'Nauzet', apellido: 'Bautista', ciudad: 'Candelaria'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
