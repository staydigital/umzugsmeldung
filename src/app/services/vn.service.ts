import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Vn } from '../vn';

@Injectable()
export class VnService {

  mockVn: Vn[] = [{
    kundennummer: 'X001',
    vorname: 'Stefan',
    nachname: 'Wittmann',
    adresseId: 1
  },
  {
    kundennummer: 'Y001',
    vorname: 'Max',
    nachname: 'Mustermann',
    adresseId: 2
  }];

  constructor() { }

  getVns(): Observable<Vn[]> {
    return of(this.mockVn);
  }
}
