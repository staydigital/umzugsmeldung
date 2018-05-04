import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vertrag } from '../../model/vertrag';

@Component({
  selector: 'app-vertragviewer',
  templateUrl: './vertragviewer.component.html',
  styleUrls: ['./vertragviewer.component.css']
})
export class VertragviewerComponent implements OnInit {

  @Input() selectedVertrag: Vertrag;
  
  @Output() onVertragClick = new EventEmitter<Vertrag>();
  
  constructor() { }

  ngOnInit() {
  }

  vertragClick(vertrag: Vertrag) {
    console.log('In vertragClick');
    console.log(vertrag);
    this.onVertragClick.emit(vertrag);
  }

}
