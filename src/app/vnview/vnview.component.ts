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

  selectedVn: Vn;

  selectedAdresse: Adresse;

  selectedVertraege: Vertrag[];

  editorMode: Boolean = false;

  constructor(private adresseService: AdresseService, private vertragService: VertragService) { }

  ngOnInit() {
    this.getChildData();
  }

  getChildData() {
    this.adresseService.getAdresse(this.selectedVn.adresseId).subscribe(adresse => this.selectedAdresse = adresse);
    this.vertragService.getVertraegeByKundennummer(this.selectedVn.kundennummer).subscribe(vertraege => this.selectedVertraege = vertraege);
  }

  onSelectVn(selectedVn) {
    this.selectedVn = selectedVn;
    this.getChildData();
  }

  toggleEditorMode() {
    this.editorMode = !this.editorMode;
  }
}
