import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-directiva-ngsiwtch',
  templateUrl: './ej-directiva-ngsiwtch.component.html',
  styleUrls: ['./ej-directiva-ngsiwtch.component.css']
})
export class EjDirectivaNGSiwtchComponent implements OnInit {

  jugadores: any[] = [
    {nombre: 'Earving Magic Johnson', equipo: 'L.A. Lakers'},
    {nombre: 'Michael Jordan', equipo: 'Chicago Bulls'},
    {nombre: 'Larry Bird', equipo: 'Boston Celtics'},
    {nombre: 'Kareem Abdul Jabbar', equipo: 'L.A. Lakers'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
