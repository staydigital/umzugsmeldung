import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Adresse } from '../../model/adresse';
@Component({
  selector: 'app-adresseditor',
  templateUrl: './adresseditor.component.html',
  styleUrls: ['./adresseditor.component.css']
})
export class AdresseditorComponent implements OnInit {

  @Input() selectedAdresse: Adresse;

  newAdresse: Adresse = new Adresse();

  @Output() cancelCB = new EventEmitter<Boolean>();

  @Output() saveCB = new EventEmitter<Adresse>();

  constructor() { }

  ngOnInit() {
  }

  saveAdresse() {
    console.log(this.newAdresse);
    this.saveCB.emit(this.newAdresse);
  }

  cancelSave() {
    this.cancelCB.emit();
  }

}
