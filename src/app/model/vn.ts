import { Resource } from 'angular4-hal';
import { Adresse } from './adresse';

export class Vn extends Resource {

    constructor() {
        super();
    }

    kundennummer: string;
    vorname: string;
    nachname: string;
    Adresse: Adresse;
}
