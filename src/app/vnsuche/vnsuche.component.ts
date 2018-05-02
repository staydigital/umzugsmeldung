import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { VnService } from '../services/vn.service';
import { Vn } from '../model/vn';
@Component({
  selector: 'app-vnsuche',
  templateUrl: './vnsuche.component.html',
  styleUrls: ['./vnsuche.component.css']
})

export class VnsucheComponent implements OnInit {
  formCtrl: FormControl;

  filteredVns: Observable<Vn[]>;

  vns: Vn[] = [];

  @Output() selectedVn = new EventEmitter<Vn>();

  constructor(private vnService: VnService) {
    this.formCtrl = new FormControl();
    this.filteredVns = this.formCtrl.valueChanges
      .pipe(
        startWith(''),
        map(vn => vn ? this.filterVn(vn) : this.vns.slice())
      );
  }

  filterVn(searchText: any) {
    if (searchText instanceof Vn) {
      return this.vns.filter(vn =>
        vn.getTextRepresentation().toLowerCase().indexOf(searchText.getTextRepresentation().toLowerCase()) !== -1);
    } return this.vns.filter(vn =>
      vn.getTextRepresentation().toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }


  ngOnInit() {
    this.vnService.getAll().subscribe(
      success => {
        this.vns = success;
      });
  }

  displayTextvalue(vn: Vn): String {
    if (vn) {
      return vn.getTextRepresentation();
    }
  }

  getSelectedOption(selectedOption: Vn) {
    this.selectedVn.emit(selectedOption);
  }

}
