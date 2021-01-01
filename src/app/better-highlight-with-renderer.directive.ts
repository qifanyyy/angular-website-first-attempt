import {Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlightWithRenderer]'
})
export class BetterHighlightWithRendererDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'lightpink');
  }
  // tslint:disable-next-line:typedef
  @HostListener('mouseenter') mouseover(event: Event){
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
  // tslint:disable-next-line:typedef
  @HostListener('mouseleave') mouseleave(event: Event){
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'lightpink');
    this.backgroundColor = 'lightpink';
  }
}
