import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOpenmenu]'
})
export class OpenmenuDirective {

  @HostBinding('class.open') openmenu:boolean = false;

  constructor() { }

  @HostListener('click') open(){
    this.openmenu = !this.openmenu
  }

}
