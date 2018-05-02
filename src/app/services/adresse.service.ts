import { Injectable, Injector } from '@angular/core';
import { RestService } from 'angular4-hal/dist/src/rest.service';
import { Adresse } from '../model/adresse';

@Injectable()
export class AdresseService extends RestService<Adresse> {

  constructor(injector: Injector) {
    super(Adresse, 'adresse', injector);
   }
}