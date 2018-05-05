import { Injectable, Injector } from '@angular/core';
import { RestService } from 'angular4-hal/dist/src/rest.service';
import { Beratungsprotokoll } from '../model/beratungsprotokoll';

@Injectable()
export class BeratungsprotokollService extends RestService<Beratungsprotokoll> {
    constructor(injector: Injector) {
        super(Beratungsprotokoll, 'beratungsprotokoll', injector);
    }
}
