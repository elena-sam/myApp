import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string;

  private _defaultColor = 'red';

  constructor(private _el: ElementRef, private _renderer: Renderer2) {
    // this._renderer.setStyle(this._el.nativeElement, 'color', this._defaultColor);
  }

  // Pour la méthode 'longue'
  // @HostListener('mouseenter') onMouseEnter() {
  //   this._renderer.setStyle(this._el.nativeElement, 'color', this.highlightColor);
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this._renderer.setStyle(this._el.nativeElement, 'color', this._defaultColor);
  // }

  // Afficher l'événement dans la console :
  // @HostListener('mouseleave', ['$event']) onMouseLeave(event: Event) {
  //   console.log('mouseleave');
  //   console.log(event);
  // }

}