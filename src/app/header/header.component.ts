import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activeView: 'suche';
  constructor() { }

  ngOnInit() {
  }

  changeView(ActiveView) {
    this.activeView = ActiveView;
  }

}
