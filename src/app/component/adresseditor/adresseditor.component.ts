import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Adresse } from '../../model/adresse';
@Component({
  selector: 'app-adresseditor',
  templateUrl: './adresseditor.component.html',
  styleUrls: ['./adresseditor.component.css']
})
export class AdresseditorComponent implements OnInit {

  @Input() selectedAdresse: Adresse;

  newAdresse: Adresse;

  @Output() cancelCB = new EventEmitter<Boolean>();

  @Output() saveCB = new EventEmitter<Adresse>();

  constructor() { }

  ngOnInit() {
  }

  saveAdresse() {
    alert('Save Adresse');
  }

  cancelSave() {
    alert('Cancel Save');
  }

}
