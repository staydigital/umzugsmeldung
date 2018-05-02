import { Resource } from 'angular4-hal';
import { Adresse } from './model/adresse';

export class Vn extends Resource {
    
    constructor() {     
        super();
    }
    
    kundennummer: string;
    vorname: string;
    nachname: string;
    Adresse: Adresse;
}
