import { Injectable, Injector } from '@angular/core';
import { RestService } from 'angular4-hal/dist/src/rest.service';
import { Vn } from '../model/vn';


@Injectable()
export class VnService extends RestService<Vn> {

  constructor(injector: Injector) {
    super(Vn, 'vn', injector);
  }
}
