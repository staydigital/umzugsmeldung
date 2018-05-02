import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { VertragService } from '../services/vertrag.service';
import { Vertrag } from '../model/vertrag';

@Component({
  selector: 'app-vertragsuche',
  templateUrl: './vertragsuche.component.html',
  styleUrls: ['./vertragsuche.component.css']
})

export class VertragsucheComponent implements OnInit {
  formCtrl: FormControl;

  filteredVertraege: Observable<Vertrag[]>;
  vertraege: Vertrag[] = [];

  constructor(private vertragService: VertragService) {
    this.formCtrl = new FormControl();
    this.filteredVertraege = this.formCtrl.valueChanges
    .pipe(
      startWith(''),
      map(vertrag => vertrag ? this.filterVertraege(vertrag) : this.vertraege.slice())
    );
  }

  ngOnInit() {
    this.vertragService.getAll().subscribe(
      success => {
        this.vertraege = success;
      }
    );
  }

  filterVertraege(vsnr: string) {
    return this.vertraege.filter(vertrag =>
      vertrag.vsnr.toLowerCase().indexOf(vsnr.toLowerCase()) !== -1);
  }

}
