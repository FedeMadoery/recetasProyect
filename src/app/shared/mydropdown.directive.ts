import {Directive, HostBinding, HostListener, } from '@angular/core';

@Directive({
  selector: '[appMydropdown]'
})
export class MydropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}
