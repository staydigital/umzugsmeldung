import { Resource } from 'angular4-hal';
import { Adresse } from './adresse';
import { Hausrat } from './hausrat';
import { Kfz } from './kfz';
import { Unfall } from './unfall';
import { Haftpflicht } from './haftpflicht';
import { Lv } from './lv';

export class Vertrag extends Resource {
    vsnr: string;
    activityId: string;
    adresse: Adresse;
    hausrat: Hausrat;
    kfz: Kfz;
    unfall: Unfall;
    haftpflicht: Haftpflicht;
    lv: Lv;

    getSparte(): String {
        if (this.isHausrat()) {
            return "Hausrat";
        }
        if (this.isKfz()) {
            return "Kfz";
        }
        if (this.isUnfall()) {
            return "Unfall";
        }
        if (this.isHaftpflicht()) {
            return "Haftpflicht";
        }
        if (this.lv) {
            return "Lebensversicherung";
        }
    }

    isHandlingRequired(): boolean {
        if (this.activityId) {
            return true;
        }
        return false;
    }

    isHausrat(): boolean {
        if (this.hausrat) {
            return true;
        }
        return false;
    }

    isKfz(): boolean {
        if (this.kfz) {
            return true;
        }
        return false;
    }

    isUnfall(): boolean {
        if (this.unfall) {
            return true;
        }
        return false;
    }

    isHaftpflicht(): boolean {
        if (this.haftpflicht) {
            return true;
        }
        return false;
    }

    isLV(): boolean {
        if (this.lv) {
            return true;
        }
        return false;
    }

    isNoHandlingRequired(): boolean {
        if (this.activityId) {
            return false;
        }
        return true;
    }


}
