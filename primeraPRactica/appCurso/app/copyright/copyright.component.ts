import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  copyright: string = '© Maimo S.A.'; // ALT+ 0169 simbola de copyrigth
  hoy: any = new Date();

  constructor(){}

  ngOnInit() {
  }

}
