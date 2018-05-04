import { Component, OnInit, Input } from '@angular/core';

import { Vertrag } from '../../model/vertrag';

import { VertragService } from '../../services/vertrag.service';

@Component({
  selector: 'app-vertrageditor',
  templateUrl: './vertrageditor.component.html',
  styleUrls: ['./vertrageditor.component.css']
})
export class VertrageditorComponent implements OnInit {

  spinMode: boolean = false;
  editorMode: boolean = true;

  @Input() selectedVertrag: Vertrag;
  
  constructor(private vertragService: VertragService) { }

  ngOnInit() {
  }

  
  
  updateVertrag() {    
    this.editorMode = false;
    this.spinMode = true;
    this.vertragService.update(this.selectedVertrag).subscribe(
      success => {
        setTimeout( () => { this.spinMode = false; this.editorMode = true;       }, 1000 );        
      }       
    );
        
  }
    
}
