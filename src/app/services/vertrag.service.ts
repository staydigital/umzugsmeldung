import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Vertrag } from '../model/vertrag';

@Injectable()
export class VertragService {
  mockVertraege: Vertrag[] = [{
    vertragId: 'JKL3234',
    kundennummer: 'X001'
  },
  {
    vertragId: 'XYZ2342',
    kundennummer: 'X001'
  },
  {
    vertragId: 'WITT234233',
    kundennummer: 'Y001'
  },
  {
    vertragId: 'LL23XXSD',
    kundennummer: 'Y001'
  }];

  constructor() { }

  getVertraege(): Observable<Vertrag[]> {
    return of(this.mockVertraege);
  }

  getVertraegeByKundennummer(kundennummer: string): Observable<Vertrag[]> {
    return of(this.mockVertraege.filter(vertrag =>
      vertrag.kundennummer === kundennummer));
  }

}
