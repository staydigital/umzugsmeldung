import { Component, OnInit } from '@angular/core';
import { Vn } from '../model/vn';
import { Vertrag } from '../model/vertrag';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  selectedVn: Vn;
  selectedVertrag: Vertrag;

  constructor() { }

  ngOnInit() {
  }

}
