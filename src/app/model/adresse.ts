import { Resource } from 'angular4-hal';

export class Adresse extends Resource  {
    adresseId: number;
    strasse: string;
    plz: string;
    ort: string;
    land: string;
}
