import { Directive, ElementRef } from '@angular/core';



declare var $: any;

@Directive({
  selector: '[appBoystoolbar]'
})
export class BoystoolbarDirective {

  constructor(private el: ElementRef) {
    $(this.el.nativeElement).toolbar({

    });
   }

}


