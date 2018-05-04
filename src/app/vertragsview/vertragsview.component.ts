import { Component, OnInit } from '@angular/core';
import { ContextService } from '../services/context.service';
import { Vertrag } from '../model/vertrag';
@Component({
  selector: 'app-vertragsview',
  templateUrl: './vertragsview.component.html',
  styleUrls: ['./vertragsview.component.css']
})
export class VertragsviewComponent implements OnInit {

  selectedVertrag: Vertrag;
  constructor(private contextService: ContextService) { }

  ngOnInit() {
    this.selectedVertrag = this.contextService.selectedVertrag;
  }

  onSelect(vertrag: Vertrag){
    console.log('In onSelectVertrag');
    console.log(vertrag);
    this.selectedVertrag = vertrag;
  }
}
