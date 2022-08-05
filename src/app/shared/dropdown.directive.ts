/***************************************
 * Toggle Open/Close Specific Dropdown *
 ***************************************/
// import { Directive, HostBinding, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appDropdown]',
// })
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen: boolean = false;

//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//   }
// }

/******************************************
 * Closing the Any Dropdown From Anywhere *
 ******************************************/
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
