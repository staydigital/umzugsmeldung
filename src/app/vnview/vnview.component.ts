import { Component, OnInit, DoCheck } from '@angular/core';

import { Vn } from '../vn';
import { Adresse } from '../model/adresse';
import { Vertrag } from '../model/vertrag';

import { AdresseService } from '../services/adresse.service';
import { VertragService } from '../services/vertrag.service';

@Component({
  selector: 'app-vnview',
  templateUrl: './vnview.component.html',
  styleUrls: ['./vnview.component.css']
})
export class VnviewComponent implements OnInit {

  selectedVn: Vn = new Vn();

  selectedAdresse: Adresse;

  selectedVertraege: Vertrag[];

  editorMode: boolean = false;

  constructor(private adresseService: AdresseService, private vertragService: VertragService) { }

  ngOnInit() {
    this.getChildData();
  }

  getChildData() {
    if (this.selectedVn.kundennummer) {
      this.selectedVn.getRelation(Adresse, 'adresse').subscribe(
        success => {          
          this.selectedAdresse = success;
        }
      )
      this.selectedVn.getRelationArray(Vertrag, 'vertraege').subscribe(
        success => {          
          this.selectedVertraege = success;
        }
      )      
    }
  }

  onSelectVn(selectedVn) {
    this.selectedVn = selectedVn;
    this.getChildData();
  }

  toggleEditorMode() {
    this.editorMode = !this.editorMode;
  }

  cancelCB() {
    this.editorMode = false;    
  }

  saveCB(event) {    
    var serverAdresse;    
    this.adresseService.create(event).subscribe(
      success => {       
        serverAdresse = success;
      }
    )        
  }
}
