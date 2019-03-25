import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuItem]'
})
export class MenuItemDirective {

  @HostBinding('class.itemOrange') private mostrar: boolean = false;

  @HostListener('mouseover') onOver() {
    this.mostrar = true;
  }

  @HostListener('mouseout') onOut() {
    this.mostrar = false;
  }

}
