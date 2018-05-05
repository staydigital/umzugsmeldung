import { Injectable } from '@angular/core';
import { Vn } from '../model/vn';
import { Vertrag } from '../model/vertrag';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContextService {

  private _refreshSidebar = new Subject();
  refreshSidebar$ = this._refreshSidebar.asObservable();

  private _onSelectedVertragChange = new Subject();
  onSelectedVertragChange$ = this._onSelectedVertragChange.asObservable();

  selectedVn: Vn = new Vn();

  private selectedVertrag: Vertrag = new Vertrag();

  refreshSidebar() {
    this._refreshSidebar.next();
  }

  setSelectedVertrag(vertrag: Vertrag) {
    this.selectedVertrag = vertrag;
    this._onSelectedVertragChange.next();
  }

  getSelectedVertrag(): Vertrag {
    return this.selectedVertrag;
  }

  constructor() { }

  reset() {
    this.selectedVn = new Vn();
    this.selectedVertrag = new Vertrag();
  }
}
