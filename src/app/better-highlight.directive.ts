import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private toformat: ElementRef) { }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.toformat.nativeElement.style.backgroundColor = 'green';
  }
}
