import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { VnService } from '../services/vn.service';
import { Vnrep } from './vnrep';
import { Vn } from '../vn';
@Component({
  selector: 'app-vnsuche',
  templateUrl: './vnsuche.component.html',
  styleUrls: ['./vnsuche.component.css']
})

export class VnsucheComponent implements OnInit {
  formCtrl: FormControl;

  filteredVns: Observable<Vnrep[]>;

  vns: Vnrep[] = [];

  vnsdata: Vn[] = [];

  @Output() selectedVn = new EventEmitter<Vn>();

  constructor(private vnService: VnService) {
    this.formCtrl = new FormControl();
    this.filteredVns = this.formCtrl.valueChanges
    .pipe(
      startWith(''),
      map(vn => vn ? this.filterVn(vn) : this.vns.slice())
    );
  }

  filterVn(textvalue: string) {
    return this.vns.filter(vn =>
      vn.textvalue.toLowerCase().indexOf(vn.textvalue.toLowerCase()) !== -1);
  }

  ngOnInit() {
    this.vnService.getVns().subscribe(vns => this.vnsdata = vns);
    for (const vn of this.vnsdata) {
      this.vns.push(new Vnrep(vn, vn.kundennummer + ', ' + vn.nachname + ' ' + vn.vorname));
    }
    console.log(this.selectedVn);
  }

  displayTextvalue(vn: Vnrep): string {
    if (vn) {
      return vn.textvalue;
    }
  }

  getSelectedOption(selectedOption: Vnrep) {
    console.log('Before emit');
    console.log(selectedOption);
    this.selectedVn.emit(selectedOption.vn);
  }

}
