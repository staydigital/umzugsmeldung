import { Resource } from 'angular4-hal';
import { Adresse } from './adresse';

export class Vertrag extends Resource {
    vsnr: string;    
    adresse: Adresse;
}
