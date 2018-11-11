import { Directive, HostBinding, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string;


  constructor(private _renderer: Renderer2, private _el: ElementRef) {
    this._renderer.setStyle(this._el.nativeElement, 'background-color', '#6c757d66');
  }


  @HostListener('mouseover') onMouseOver() {
    this._renderer.setStyle(this._el.nativeElement, 'background-color', this.highlightColor);
  }

  @HostListener('mouseout') onMouseOut() {
    this._renderer.setStyle(this._el.nativeElement, 'background-color', '#6c757d66');
  }


  // Afficher l'événement dans la console :
  // @HostListener('mouseleave', ['$event']) onMouseLeave(event: Event) {
  //   console.log('mouseleave');
  //   console.log(event);
  // }

}
