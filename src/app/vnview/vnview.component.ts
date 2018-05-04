import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Vn } from '../model/vn';
import { Adresse } from '../model/adresse';
import { Vertrag } from '../model/vertrag';
import { Umzugsmeldung } from '../model/umzugsmeldung';

import { AdresseService } from '../services/adresse.service';
import { VertragService } from '../services/vertrag.service';
import { UmzugsmeldungService } from '../services/umzugsmeldung.service';
import { ContextService } from '../services/context.service';

import { tap, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-vnview',
  templateUrl: './vnview.component.html',
  styleUrls: ['./vnview.component.css']
})
export class VnviewComponent implements OnInit {

  @Input() selectedVn: Vn;

  selectedAdresse: Adresse;

  @Input() serverAdresse: Adresse;

  selectedVertraege: Vertrag[];

  selectedVertrag: Vertrag;
  
  processedVertraege: Vertrag[];

  editorMode: boolean = false;

  processMode: boolean = false;

  constructor(private adresseService: AdresseService, private vertragService: VertragService,
    private umzugsmeldungService: UmzugsmeldungService, private contextService: ContextService, private router: Router) { }

  ngOnInit() {
    this.selectedVn = this.contextService.selectedVn;
    this.getChildData();    
  }

  getChildData() {
    if (this.selectedVn.kundennummer) {
      this.selectedVn.getRelation(Adresse, 'adresse').subscribe(
        success => {
          this.selectedAdresse = success;
        }
      );
      this.selectedVn.getRelationArray(Vertrag, 'vertraege').subscribe(
        success => {
          this.selectedVertraege = success;
        }
      );
    }
  }

  onSelectVn(selectedVn) {
    this.selectedVn = selectedVn;
    this.getChildData();
  }

  gotoVertrag(vertrag) {
    this.contextService.selectedVertrag = vertrag;
    this.router.navigateByUrl('/vertraege');
  }

  setEditorMode(enabled: boolean) {
    this.editorMode = enabled;        
  }

  setProcessMode(enabled: boolean) {
    this.processMode = enabled;    
  }

  cancelCB() {
    this.editorMode = false;
  }
  
  saveCB(event) {
    this.adresseService.create(event)
    .map((res: any) => res)
    .flatMap((adresse: any) => {      
      const request = new Umzugsmeldung();
      request.vnId = this.selectedVn.id;
      request.adresseId = adresse.id;
      return this.umzugsmeldungService.create(request);
    })    
    .subscribe(
      success => {        
        this.selectedVn.getRelationArray(Vertrag, 'vertraege').subscribe(
          success => {                        
            this.processedVertraege = success;
            this.getChildData();            
            this.setEditorMode(false);
            this.setProcessMode(true);
          }
        );
      }
    );
  }

}
