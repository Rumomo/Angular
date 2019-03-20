import { Component } from '@angular/core';

@Component({
  selector: 'app-fechaactual',
  template: `
  <p>Tenerife {{hoy | date: 'd/MM/y H:m'}}</p>
  <app-copyright></app-copyright>
  `,
  styleUrls: ['./fechaActual.component.css']
})

export class FechaActualComponent {
  hoy = new Date();
}
