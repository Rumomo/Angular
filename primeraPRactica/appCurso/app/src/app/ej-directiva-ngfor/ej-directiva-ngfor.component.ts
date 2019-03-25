import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-directiva-ngfor',
  templateUrl: './ej-directiva-ngfor.component.html',
  styleUrls: ['./ej-directiva-ngfor.component.css']
})
export class EjDirectivaNGForComponent implements OnInit {

  cursos: string[];

  constructor() {
    this.cursos = ['angular', 'html', 'css'];
  }

  ngOnInit() {
  }

}
