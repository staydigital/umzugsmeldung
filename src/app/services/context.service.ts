import { Injectable } from '@angular/core';
import { Vn } from '../model/vn';
import { Vertrag } from '../model/vertrag';

@Injectable()
export class ContextService {

  selectedVn: Vn = new Vn();

  selectedVertrag: Vertrag = new Vertrag();

  constructor() { }

  reset() {
    this.selectedVn = new Vn();
    this.selectedVertrag = new Vertrag();
  }
}
