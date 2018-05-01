import { Component, OnInit, Input } from '@angular/core';
import { Adresse } from '../../model/adresse';

@Component({
  selector: 'app-adressviewer',
  templateUrl: './adressviewer.component.html',
  styleUrls: ['./adressviewer.component.css']
})
export class AdressviewerComponent implements OnInit {

  @Input() selectedAdresse: Adresse;

  constructor() { }

  ngOnInit() {
  }

}
