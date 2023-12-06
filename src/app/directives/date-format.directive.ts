import { Directive, HostListener, ElementRef } from '@angular/core';


@Directive({
  selector: '[appDateFormat]'
})
export class DateFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const input = event.target;
    const trimmed = input.value.replace(/\s+/g, '');

    if (trimmed.length === 2) {
      input.value = trimmed + '/';
    }
  }
}