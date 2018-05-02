import { Injectable, Injector } from '@angular/core';
import { RestService } from 'angular4-hal/dist/src/rest.service';
import { Umzugsmeldung } from '../model/umzugsmeldung';


@Injectable()
export class UmzugsmeldungService extends RestService<Umzugsmeldung> {

  constructor(injector: Injector) {
    super(Umzugsmeldung, 'umzugsmeldung', injector);
  }
}
