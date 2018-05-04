import { Component, OnInit } from '@angular/core';
import { ContextService } from '../services/context.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activeView: 'suche';
  constructor(private contextService: ContextService) { }

  ngOnInit() {
  }

  changeView(ActiveView) {
    this.contextService.reset();
    this.activeView = ActiveView;
  }

}
