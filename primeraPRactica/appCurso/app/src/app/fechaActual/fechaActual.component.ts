import { Component } from '@angular/core';

@Component({
  selector: 'app-fechaactual',
  template: `
    <p>La cotización actual del dólar es de  {{ dolareuro | euro}}</p>
  `,
  styleUrls: ['./fechaActual.component.css']
})

export class FechaActualComponent {
 dolareuro: number = 0.88;
}
