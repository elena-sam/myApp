import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplayGuests]'
})
export class DisplayGuestsDirective {

  @Input() set appDisplayGuests(condition: boolean) {
    if (condition) {
      this._vwRef.createEmbeddedView(this._templRef);
    } else {
      this._vwRef.clear();
    }
  }

  @Input() set appMovieList(condition: boolean) {
    if (condition) {
      this._vwRef.createEmbeddedView(this._templRef);
    } else {
      this._vwRef.clear();
    }
  }

  constructor(private _templRef: TemplateRef<any>, private _vwRef: ViewContainerRef) { }

}
