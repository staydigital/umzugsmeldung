import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() selectedVertrag: Vertrag;

  @Output() onSelectVertrag = new EventEmitter<Vertrag>();

  constructor(private vertragService: VertragService) {
    
    
  }

  ngOnInit() {
    console.log('constructor');
    console.log(this.selectedVertrag);
    this.formCtrl = new FormControl();
    if (this.selectedVertrag) {
      this.filteredVertraege = this.formCtrl.valueChanges
      .pipe(
        startWith(this.selectedVertrag.vsnr),
        map(vertrag => vertrag ? this.filterVertraege(vertrag) : this.vertraege.slice())
      );
    } else {
      this.filteredVertraege = this.formCtrl.valueChanges
      .pipe(
        startWith(''),
        map(vertrag => vertrag ? this.filterVertraege(vertrag) : this.vertraege.slice())
      );
    }
    this.vertragService.getAll().subscribe(
      success => {
        this.vertraege = success;
      }
    );
  }

  filterVertraege(searchText: any) {
    if (searchText instanceof Vertrag) {
      return this.vertraege.filter(vertrag =>
        vertrag.vsnr.toLowerCase().indexOf(searchText.vsnr.toLowerCase()) !== -1);
    } return this.vertraege.filter(vertrag =>
      vertrag.vsnr.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    
  }

  displayTextvalue(vertrag: Vertrag): String {
    if (vertrag) {
      return vertrag.vsnr;
    }
  }
  onSelectedOption(selectedOption: Vertrag) {
    console.log('In onSelectedOption');    
    console.log(selectedOption);
    this.selectedVertrag = selectedOption;
    this.onSelectVertrag.emit(selectedOption);
  }
}
