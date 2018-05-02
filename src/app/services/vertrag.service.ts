import { Injectable, Injector } from '@angular/core';
import { RestService } from 'angular4-hal/dist/src/rest.service';
import { Vertrag } from '../model/vertrag';

@Injectable()
export class VertragService extends RestService<Vertrag> {
    constructor(injector: Injector) {
        super(Vertrag, 'vertrag', injector);
    }
}
