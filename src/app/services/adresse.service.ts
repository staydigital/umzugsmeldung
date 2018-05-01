import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Adresse } from '../model/adresse';

@Injectable()
export class AdresseService {

  mockAdresse: Adresse[] = [{
    adresseId: 1,
    strasse: 'Böhmerwaldstraße 13',
    plz: '93057',
    ort: 'Regensburg',
    land: 'Deutschland'
  }, {
    adresseId: 2,
    strasse: 'Musterweg 25',
    plz: '12345',
    ort: 'Musterstadt',
    land: 'Deutschland'
  }];

  constructor() { }

  getAdresse(adresseId: number): Observable<Adresse> {
    return of(this.mockAdresse.filter(adresse => adresse.adresseId === adresseId)[0]);
  }
}
